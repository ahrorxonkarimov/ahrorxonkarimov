"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getMedia() {
  try {
    const media = await prisma.media.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { media };
  } catch (error) {
    console.error("Failed to fetch media:", error);
    return { media: [] };
  }
}

export async function createMedia(formData: FormData) {
  const fileUrl = formData.get("fileUrl") as string;
  const filename = formData.get("filename") as string;
  const mimeType = formData.get("mimeType") as string;
  
  if (!fileUrl || !filename) {
    return { error: "Iltimos barcha kerakli maydonlarni to'ldiring." };
  }
  
  try {
    await prisma.media.create({
      data: {
        fileUrl,
        filename,
        mimeType: mimeType || "application/octet-stream",
        sizeBytes: 0,
      },
    });
    revalidatePath("/admin/media");
    return { success: true };
  } catch (error) {
    console.error("Failed to add media:", error);
    return { error: "Media qo'shishda xatolik yuz berdi." };
  }
}

export async function deleteMedia(id: string) {
  try {
    await prisma.media.delete({
      where: { id },
    });
    revalidatePath("/admin/media");
  } catch (error) {
    console.error("Failed to delete media:", error);
  }
}
