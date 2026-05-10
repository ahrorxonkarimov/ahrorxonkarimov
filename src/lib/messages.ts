// Simple message storage using localStorage
// In production, this would be a real database API

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  date: string;
  read: boolean;
}

const STORAGE_KEY = "ak_contact_messages";

export function getMessages(): ContactMessage[] {
  if (typeof window === "undefined") return [];
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveMessage(msg: Omit<ContactMessage, "id" | "date" | "read">): ContactMessage {
  const messages = getMessages();
  const newMsg: ContactMessage = {
    ...msg,
    id: Date.now().toString(),
    date: new Date().toISOString(),
    read: false,
  };
  messages.unshift(newMsg);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  return newMsg;
}

export function markAsRead(id: string): void {
  const messages = getMessages();
  const msg = messages.find((m) => m.id === id);
  if (msg) {
    msg.read = true;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
  }
}

export function deleteMessage(id: string): void {
  const messages = getMessages().filter((m) => m.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
}

export function getUnreadCount(): number {
  return getMessages().filter((m) => !m.read).length;
}
