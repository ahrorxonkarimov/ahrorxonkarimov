"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getMaterials() {
  try {
    const materials = await prisma.material.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { materials };
  } catch (error) {
    console.error("Failed to fetch materials:", error);
    return { materials: [] };
  }
}

export async function createMaterial(formData: FormData) {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const format = formData.get("format") as string;
  const fileUrl = formData.get("fileUrl") as string;
  
  if (!title || !format || !fileUrl) {
    return { error: "Iltimos barcha kerakli maydonlarni to'ldiring." };
  }
  
  try {
    await prisma.material.create({
      data: {
        title,
        description,
        format,
        fileUrl,
        sizeBytes: 0, // Placeholder
      },
    });
    revalidatePath("/admin/materials");
    revalidatePath("/materials");
    return { success: true };
  } catch (error) {
    console.error("Failed to create material:", error);
    return { error: "Material qo'shishda xatolik yuz berdi." };
  }
}

export async function deleteMaterial(id: string) {
  try {
    await prisma.material.delete({
      where: { id },
    });
    revalidatePath("/admin/materials");
    revalidatePath("/materials");
  } catch (error) {
    console.error("Failed to delete material:", error);
  }
}
