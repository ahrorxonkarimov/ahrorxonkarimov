"use client";

import { useState } from "react";
import { Plus, Search, Eye, Edit, Trash2, Image as ImageIcon, Link2, Bold, Italic, List, Heading1, Heading2, Check } from "lucide-react";

export default function AdminPosts() {
  const [isComposing, setIsComposing] = useState(false);
  const [content, setContent] = useState("");
  
  const posts = [
    { id: 1, title: "Tibbiyotda sun'iy intellektning o'rni", status: "E'lon qilingan", date: "2024-05-10", views: 342 },
    { id: 2, title: "Doclab.uz platformasi yangilanishi", status: "E'lon qilingan", date: "2024-05-08", views: 218 },
    { id: 3, title: "Tibbiy hujjatlar bilan ishlash qo'llanmasi", status: "Qoralama", date: "2024-05-05", views: 0 },
    { id: 4, title: "O'zbekiston tibbiyotida raqamlashtirish", status: "Qoralama", date: "2024-05-03", views: 0 },
  ];

  if (isComposing) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex items-center justify-between gap-4 border-b pb-4">
          <h1 className="text-2xl font-bold tracking-tight">Yangi maqola yozish</h1>
          <div className="flex gap-2">
            <button onClick={() => setIsComposing(false)} className="px-4 py-2 border rounded text-sm font-medium hover:bg-accent">
              Bekor qilish
            </button>
            <button onClick={() => setIsComposing(false)} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors">
              <Check className="h-4 w-4" /> E&apos;lon qilish
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Cover Image Upload */}
          <div className="w-full h-40 md:h-64 border-2 border-dashed rounded-lg bg-accent/20 flex flex-col items-center justify-center cursor-pointer hover:bg-accent/50 transition-colors">
            <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
            <span className="text-sm font-medium">Muqova rasmini yuklash</span>
            <span className="text-xs text-muted-foreground mt-1">1200x630 tavsiya etiladi</span>
          </div>

          <input 
            type="text" 
            placeholder="Maqola sarlavhasi..." 
            className="w-full text-3xl md:text-5xl font-bold bg-transparent outline-none placeholder:text-muted-foreground"
          />

          {/* Editor Toolbar */}
          <div className="flex items-center gap-1 border-y py-2 sticky top-0 bg-background/95 backdrop-blur z-10">
            <button className="p-2 hover:bg-accent rounded text-muted-foreground" title="Heading 1"><Heading1 className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-accent rounded text-muted-foreground" title="Heading 2"><Heading2 className="h-4 w-4" /></button>
            <div className="w-px h-4 bg-border mx-2" />
            <button className="p-2 hover:bg-accent rounded text-muted-foreground" title="Bold"><Bold className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-accent rounded text-muted-foreground" title="Italic"><Italic className="h-4 w-4" /></button>
            <div className="w-px h-4 bg-border mx-2" />
            <button className="p-2 hover:bg-accent rounded text-muted-foreground" title="List"><List className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-accent rounded text-muted-foreground" title="Link"><Link2 className="h-4 w-4" /></button>
            <button className="p-2 hover:bg-accent rounded text-muted-foreground" title="Image"><ImageIcon className="h-4 w-4" /></button>
          </div>

          {/* Telegraph style markdown editor */}
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Maqola matnini shu yerga yozing... (Markdown qo'llab-quvvatlanadi)"
            className="w-full min-h-[50vh] text-lg leading-relaxed bg-transparent outline-none resize-none placeholder:text-muted-foreground/50"
          />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Maqolalar</h1>
        <button onClick={() => setIsComposing(true)} className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" /> Yangi maqola
        </button>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input type="text" placeholder="Maqolalardan qidirish..." className="w-full pl-9 pr-3 py-2 text-sm border rounded bg-background focus:ring-1 focus:ring-primary" />
        </div>
        <select className="px-3 py-2 text-sm border rounded bg-background">
          <option>Barchasi</option>
          <option>E&apos;lon qilingan</option>
          <option>Qoralama</option>
        </select>
      </div>

      <div className="border rounded-lg overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="bg-card border-b">
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Sarlavha</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Holat</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden md:table-cell">Sana</th>
              <th className="text-left px-4 py-3 text-xs font-semibold text-muted-foreground uppercase hidden sm:table-cell">Ko&apos;rishlar</th>
              <th className="text-right px-4 py-3 text-xs font-semibold text-muted-foreground uppercase">Amallar</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {posts.map((post) => (
              <tr key={post.id} className="hover:bg-accent/50 transition-colors">
                <td className="px-4 py-3">
                  <p className="text-sm font-medium">{post.title}</p>
                </td>
                <td className="px-4 py-3 hidden md:table-cell">
                  <span className={`text-xs font-medium px-2 py-0.5 rounded ${post.status === "E'lon qilingan" ? "bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400" : "bg-yellow-50 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"}`}>
                    {post.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-muted-foreground hidden md:table-cell">{post.date}</td>
                <td className="px-4 py-3 text-sm text-muted-foreground hidden sm:table-cell">{post.views}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-1">
                    <button className="p-1.5 rounded hover:bg-accent text-muted-foreground"><Eye className="h-3.5 w-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-accent text-muted-foreground"><Edit className="h-3.5 w-3.5" /></button>
                    <button className="p-1.5 rounded hover:bg-accent text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
