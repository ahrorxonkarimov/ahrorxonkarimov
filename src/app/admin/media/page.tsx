"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, Trash2, Download, Plus } from "lucide-react";
import Image from "next/image";

export default function AdminMedia() {
  const [isUploading, setIsUploading] = useState(false);

  const files = [
    { name: "ahrorxon.jpg", title: "Asosiy profil rasmi", date: "2024-05-10", size: "245 KB", type: "image", src: "/ahrorxon.jpg" },
    { name: "shifokor.jpg", title: "Tibbiyot amaliyotidan", date: "2024-05-08", size: "2.4 MB", type: "image", src: "/shifokor.jpg" },
    { name: "feldsher.jpg", title: "Feldsherlik davri", date: "2024-05-07", size: "1.9 MB", type: "image", src: "/feldsher.jpg" },
    { name: "talaba.jpg", title: "Talabalik hayoti", date: "2024-05-01", size: "260 KB", type: "image", src: "/talaba.jpg" },
    { name: "doclab.png", title: "Doclab.uz logotipi", date: "2024-04-20", size: "15 KB", type: "image", src: "/doclab.png" },
    { name: "doclab_uz.png", title: "Platforma banneri", date: "2024-04-18", size: "135 KB", type: "image", src: "/doclab_uz.png" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Media kutubxonasi</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Sayt uchun rasmlar va grafik fayllarni boshqarish.
          </p>
        </div>
        <button 
          onClick={() => setIsUploading(!isUploading)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          {isUploading ? "Bekor qilish" : <><Upload className="h-4 w-4" /> Yuklash</>}
        </button>
      </div>

      {/* Upload area with Metadata */}
      {isUploading && (
        <div className="border rounded-lg p-5 bg-card space-y-4">
          <h2 className="text-lg font-semibold">Yangi media yuklash</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Metadata Fields */}
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Izoh / Mavzu (Majburiy emas)</label>
                <input type="text" className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" placeholder="Masalan: Bosh sahifa uchun banner" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Yuklanayotgan sana</label>
                <input type="date" defaultValue={new Date().toISOString().split('T')[0]} className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            
            {/* File Drop */}
            <div className="border-2 border-dashed rounded-lg flex flex-col items-center justify-center text-center p-6 cursor-pointer hover:border-primary/50 hover:bg-accent/30 transition-colors">
              <Upload className="h-8 w-8 text-muted-foreground mb-2" />
              <p className="text-sm font-medium">Rasmni bu yerga tashlang yoki tanlang</p>
              <p className="text-xs text-muted-foreground mt-1">PNG, JPG, WEBP (max. 10MB)</p>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button onClick={() => setIsUploading(false)} className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">Bekor qilish</button>
            <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90">Yuklash va Saqlash</button>
          </div>
        </div>
      )}

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {files.map((file) => (
          <div key={file.name} className="group border rounded-lg overflow-hidden bg-card flex flex-col">
            <div className="aspect-video relative bg-secondary">
              <Image src={file.src} alt={file.name} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                <button className="p-1.5 rounded bg-white/90 text-gray-700 hover:bg-white"><Download className="h-3.5 w-3.5" /></button>
                <button className="p-1.5 rounded bg-white/90 text-red-600 hover:bg-white"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
            <div className="p-3 flex-1 flex flex-col">
              <p className="text-sm font-semibold line-clamp-1">{file.title || file.name}</p>
              <div className="flex items-center justify-between mt-auto pt-2 text-[11px] text-muted-foreground">
                <span>{file.date}</span>
                <span>{file.size}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
