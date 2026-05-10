"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getProjects() {
  try {
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { projects };
  } catch (error) {
    console.error("Failed to fetch projects:", error);
    return { projects: [] };
  }
}

export async function createProject(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const link = formData.get("link") as string;
  const tags = formData.get("tags") as string;
  
  if (!title || !description) {
    return { error: "Iltimos sarlavha va tavsifni kiriting." };
  }
  
  try {
    await prisma.project.create({
      data: {
        title,
        description,
        link,
        tags: tags || "",
      },
    });
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
    return { success: true };
  } catch (error) {
    console.error("Failed to create project:", error);
    return { error: "Loyiha qo'shishda xatolik yuz berdi." };
  }
}

export async function deleteProject(id: string) {
  try {
    await prisma.project.delete({
      where: { id },
    });
    revalidatePath("/admin/projects");
    revalidatePath("/projects");
  } catch (error) {
    console.error("Failed to delete project:", error);
  }
}
