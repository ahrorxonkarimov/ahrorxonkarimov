"use client";

import { useState } from "react";
import { FileText, Plus, UploadCloud, Search, Trash2, Edit } from "lucide-react";

export default function AdminMaterials() {
  const [isUploading, setIsUploading] = useState(false);

  const materials = [
    { id: 1, title: "Tibbiyotda biznes-reja namunasi", format: "PDF", size: "2.4 MB", date: "2024-05-10" },
    { id: 2, title: "Xirurgiya amaliyoti bo'yicha qo'llanma", format: "DOCX", size: "1.1 MB", date: "2024-05-08" },
    { id: 3, title: "Bemorlar ro'yxati va analizi", format: "XLSX", size: "500 KB", date: "2024-05-01" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Materiallar</h1>
          <p className="text-sm text-muted-foreground mt-1">
            Saytdagi barcha o&apos;quv va ilmiy hujjatlarni (pdf, docx, excell) boshqarish.
          </p>
        </div>
        <button
          onClick={() => setIsUploading(!isUploading)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          {isUploading ? "Bekor qilish" : <><Plus className="h-4 w-4" /> Material qo&apos;shish</>}
        </button>
      </div>

      {isUploading && (
        <div className="border rounded-lg p-5 bg-card space-y-4">
          <h2 className="text-lg font-semibold">Yangi material yuklash</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Mavzu / Nomi</label>
                <input type="text" className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" placeholder="Masalan: Tibbiyotda biznes-reja" />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Qisqacha izoh</label>
                <textarea rows={3} className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary resize-none" placeholder="Ushbu material haqida ma'lumot..." />
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Material formati</label>
                <select className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary bg-transparent">
                  <option value="pdf">PDF Hujjat</option>
                  <option value="docx">Word (DOCX)</option>
                  <option value="xlsx">Excel (XLSX)</option>
                  <option value="ppt">Taqdimot (PPTX)</option>
                </select>
              </div>
              <div className="border-2 border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-accent/50 transition-colors">
                <UploadCloud className="h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-sm font-medium">Faylni tanlang yoki shu yerga tashlang</p>
                <p className="text-xs text-muted-foreground mt-1">PDF, DOCX, XLSX (max. 10MB)</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button onClick={() => setIsUploading(false)} className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">Bekor qilish</button>
            <button className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90">Yuklash va Saqlash</button>
          </div>
        </div>
      )}

      <div className="border rounded-lg bg-card overflow-hidden">
        <div className="p-4 border-b flex items-center gap-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input type="text" placeholder="Materiallarni qidirish..." className="flex-1 text-sm bg-transparent outline-none" />
        </div>
        <table className="w-full text-sm">
          <thead className="bg-muted/50 border-b">
            <tr>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Mavzu</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Format</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Hajmi</th>
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Sana</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Amallar</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {materials.map((item) => (
              <tr key={item.id} className="hover:bg-accent/50 transition-colors">
                <td className="px-4 py-3 font-medium flex items-center gap-2">
                  <FileText className="h-4 w-4 text-primary" />
                  {item.title}
                </td>
                <td className="px-4 py-3">
                  <span className="bg-secondary px-2 py-0.5 rounded text-xs font-medium">{item.format}</span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{item.size}</td>
                <td className="px-4 py-3 text-muted-foreground">{item.date}</td>
                <td className="px-4 py-3 text-right">
                  <div className="flex items-center justify-end gap-2">
                    <button className="p-1.5 text-muted-foreground hover:text-primary transition-colors" title="Tahrirlash">
                      <Edit className="h-4 w-4" />
                    </button>
                    <button className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors" title="O'chirish">
                      <Trash2 className="h-4 w-4" />
                    </button>
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
