"use client";

import { Search, MoreHorizontal, Shield, Ban, Mail } from "lucide-react";

export default function AdminUsers() {
  const users = [
    { id: 1, name: "Abdulloh Karimov", email: "ahrorxon.official@gmail.com", role: "Admin", status: "Faol", date: "2024-01-15" },
    { id: 2, name: "Ali Valiyev", email: "ali.v@mail.uz", role: "Foydalanuvchi", status: "Faol", date: "2024-04-20" },
    { id: 3, name: "Nilufar Karimova", email: "nilufar.k@gmail.com", role: "Foydalanuvchi", status: "Faol", date: "2024-05-01" },
    { id: 4, name: "Sardor Toshmatov", email: "sardor@example.com", role: "Foydalanuvchi", status: "Bloklangan", date: "2024-03-10" },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Foydalanuvchilar</h1>
        <p className="text-sm text-muted-foreground mt-1">Tizimda ro&apos;yxatdan o&apos;tgan barcha foydalanuvchilar.</p>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="text" placeholder="Ism yoki email bo'yicha qidirish..." className="w-full pl-9 pr-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
        </div>
        <select className="px-3 py-2 text-sm border rounded bg-background">
          <option>Barchasi</option>
          <option>Admin</option>
          <option>Foydalanuvchi</option>
          <option>Bloklangan</option>
        </select>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-card border-b">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Foydalanuvchi</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Roli</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Holat</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden sm:table-cell">Sana</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Amallar</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-accent/50 transition-colors">
                <td className="px-4 py-3">
                  <div>
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-muted-foreground">{user.email}</p>
                  </div>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${user.role === "Admin" ? "bg-blue-50 text-blue-700 dark:bg-blue-500/10 dark:text-blue-400" : "bg-gray-100 text-gray-600 dark:bg-gray-500/10 dark:text-gray-400"}`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs font-medium ${user.status === "Faol" ? "text-green-600" : "text-red-500"}`}>
                    {user.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground hidden sm:table-cell">{user.date}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 rounded hover:bg-accent text-muted-foreground" title="Xabar yuborish"><Mail className="h-3.5 w-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-accent text-muted-foreground" title="Rolini o'zgartirish"><Shield className="h-3.5 w-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-accent text-red-500" title="Bloklash"><Ban className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between text-sm text-muted-foreground">
        <p>Jami: {users.length} foydalanuvchi</p>
        <div className="flex gap-2">
          <button className="px-3 py-1 rounded border text-xs hover:bg-accent">Oldingi</button>
          <button className="px-3 py-1 rounded border text-xs hover:bg-accent">Keyingi</button>
        </div>
      </div>
    </div>
  );
}
