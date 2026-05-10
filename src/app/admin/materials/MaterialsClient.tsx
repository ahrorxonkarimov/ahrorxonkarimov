"use client";

import { useState } from "react";
import { FileText, Plus, UploadCloud, Search, Trash2, Edit } from "lucide-react";
import { createMaterial, deleteMaterial } from "@/app/actions/materials";

export default function MaterialsClient({ initialMaterials }: { initialMaterials: any[] }) {
  const [isUploading, setIsUploading] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [format, setFormat] = useState("PDF");
  const [fileUrl, setFileUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("format", format);
    formData.append("fileUrl", fileUrl || "https://example.com/placeholder.pdf"); // Placeholder for now

    try {
      await createMaterial(formData);
      setIsUploading(false);
      setTitle("");
      setDescription("");
      setFileUrl("");
    } catch (error) {
      console.error("Failed to create material:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <form onSubmit={handleSubmit} className="border rounded-lg p-5 bg-card space-y-4">
          <h2 className="text-lg font-semibold">Yangi material yuklash</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Mavzu / Nomi</label>
                <input 
                  type="text" 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" 
                  placeholder="Masalan: Tibbiyotda biznes-reja" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Qisqacha izoh</label>
                <textarea 
                  rows={3} 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary resize-none" 
                  placeholder="Ushbu material haqida ma'lumot..." 
                />
              </div>
            </div>
            
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Material formati</label>
                <select 
                  value={format}
                  onChange={(e) => setFormat(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary bg-transparent"
                >
                  <option value="PDF">PDF Hujjat</option>
                  <option value="DOCX">Word (DOCX)</option>
                  <option value="XLSX">Excel (XLSX)</option>
                  <option value="PPTX">Taqdimot (PPTX)</option>
                </select>
              </div>
              <div className="space-y-1">
                <label className="block text-xs font-medium text-muted-foreground mb-1">Fayl URL (Vaqtinchalik)</label>
                <input 
                  type="url" 
                  value={fileUrl}
                  onChange={(e) => setFileUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" 
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button type="button" onClick={() => setIsUploading(false)} className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">Bekor qilish</button>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 disabled:opacity-50"
            >
              {isSubmitting ? "Saqlanmoqda..." : "Saqlash"}
            </button>
          </div>
        </form>
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
              <th className="px-4 py-3 text-left font-medium text-muted-foreground">Sana</th>
              <th className="px-4 py-3 text-right font-medium text-muted-foreground">Amallar</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {initialMaterials.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-muted-foreground">
                  Hali materiallar qo&apos;shilmagan.
                </td>
              </tr>
            ) : (
              initialMaterials.map((item) => (
                <tr key={item.id} className="hover:bg-accent/50 transition-colors">
                  <td className="px-4 py-3 font-medium flex items-center gap-2">
                    <FileText className="h-4 w-4 text-primary" />
                    {item.title}
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-secondary px-2 py-0.5 rounded text-xs font-medium">{item.format}</span>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(item.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <button 
                        onClick={() => deleteMaterial(item.id)}
                        className="p-1.5 text-muted-foreground hover:text-red-500 transition-colors" 
                        title="O'chirish"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
