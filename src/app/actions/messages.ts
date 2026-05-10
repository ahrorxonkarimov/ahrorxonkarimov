"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function createMessage(formData: { name: string; email: string; phone?: string; message: string }) {
  try {
    await prisma.message.create({
      data: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        content: formData.message,
      },
    });
    return { success: true };
  } catch (error) {
    console.error("Failed to create message:", error);
    return { success: false, error: "Xabar yuborishda xatolik yuz berdi" };
  }
}

export async function getMessages() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: { createdAt: "desc" },
    });
    return { success: true, messages };
  } catch (error) {
    console.error("Failed to fetch messages:", error);
    return { success: false, messages: [] };
  }
}

export async function markMessageAsRead(id: string) {
  try {
    await prisma.message.update({
      where: { id },
      data: { isRead: true },
    });
    revalidatePath("/admin/messages");
  } catch (error) {
    console.error("Failed to mark message as read:", error);
  }
}

export async function deleteMessage(id: string) {
  try {
    await prisma.message.delete({
      where: { id },
    });
    revalidatePath("/admin/messages");
  } catch (error) {
    console.error("Failed to delete message:", error);
  }
}
