"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function getPosts() {
  try {
    const posts = await prisma.post.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { posts };
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return { posts: [] };
  }
}

export async function createPost(formData: FormData) {
  const title = formData.get("title") as string;
  const content = formData.get("content") as string;
  const status = formData.get("status") as string || "DRAFT";
  
  if (!title || !content) {
    return { error: "Iltimos, sarlavha va matnni kiriting." };
  }
  
  // Generate slug, fallback to timestamp if empty (e.g. for non-latin characters)
  let slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");
  if (!slug) slug = `post-${Date.now()}`;
  else slug = `${slug}-${Date.now()}`;
  
  try {
    await prisma.post.create({
      data: {
        title,
        slug,
        content,
        status,
      },
    });
    revalidatePath("/admin/posts");
    revalidatePath("/blog");
    return { success: true };
  } catch (error) {
    console.error("Failed to create post:", error);
    return { error: "Maqola yaratishda xatolik yuz berdi." };
  }
}

export async function deletePost(id: string) {
  try {
    await prisma.post.delete({
      where: { id },
    });
    revalidatePath("/admin/posts");
    revalidatePath("/blog");
  } catch (error) {
    console.error("Failed to delete post:", error);
  }
}
