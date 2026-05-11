"use server";

import prisma from "@/lib/prisma";
import { headers } from "next/headers";

export async function trackVisitor(path: string) {
  try {
    const headersList = await headers();
    const ip = headersList.get("x-forwarded-for") || headersList.get("x-real-ip") || "unknown";
    const userAgent = headersList.get("user-agent") || "unknown";

    // Skip tracking for admin paths to avoid clutter
    if (path.startsWith("/admin")) return;

    // Find if visitor already visited this path from this IP recently (e.g., today)
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const existingVisitor = await prisma.visitor.findFirst({
      where: {
        ip,
        path,
        createdAt: {
          gte: today,
        },
      },
    });

    if (existingVisitor) {
      await prisma.visitor.update({
        where: { id: existingVisitor.id },
        data: { visits: { increment: 1 } },
      });
    } else {
      await prisma.visitor.create({
        data: {
          ip,
          userAgent,
          path,
          visits: 1,
        },
      });
    }
  } catch (error) {
    console.error("Failed to track visitor:", error);
  }
}

export async function getVisitors() {
  try {
    // Check if table exists by doing a simple count or query
    const visitors = await prisma.visitor.findMany({
      orderBy: { updatedAt: "desc" },
      take: 100,
    });
    return { visitors };
  } catch (error) {
    console.error("Visitors table might not exist yet:", error);
    return { visitors: [] };
  }
}
