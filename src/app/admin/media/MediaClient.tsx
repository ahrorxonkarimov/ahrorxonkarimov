"use client";

import { useState } from "react";
import { Upload, Image as ImageIcon, Trash2, Download, Plus, X } from "lucide-react";
import Image from "next/image";
import { createMedia, deleteMedia } from "@/app/actions/media";

export default function MediaClient({ initialMedia }: { initialMedia: any[] }) {
  const [isUploading, setIsUploading] = useState(false);
  const [filename, setFilename] = useState("");
  const [fileUrl, setFileUrl] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("filename", filename);
    formData.append("fileUrl", fileUrl);

    try {
      await createMedia(formData);
      setIsUploading(false);
      setFilename("");
      setFileUrl("");
    } catch (error) {
      console.error("Failed to add media:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

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
          {isUploading ? <><X className="h-4 w-4" /> Bekor qilish</> : <><Upload className="h-4 w-4" /> Yuklash</>}
        </button>
      </div>

      {isUploading && (
        <form onSubmit={handleSubmit} className="border rounded-lg p-5 bg-card space-y-4">
          <h2 className="text-lg font-semibold">Yangi media yuklash</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Rasm nomi (Izoh)</label>
                <input 
                  type="text" 
                  value={filename}
                  onChange={(e) => setFilename(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" 
                  placeholder="Masalan: Bosh sahifa uchun banner" 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Rasm URL (Vaqtinchalik)</label>
                <input 
                  type="url" 
                  value={fileUrl}
                  onChange={(e) => setFileUrl(e.target.value)}
                  required
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" 
                  placeholder="https://..." 
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

      {/* Media Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {initialMedia.length === 0 ? (
          <div className="col-span-full py-12 text-center text-muted-foreground border rounded-lg border-dashed">
            Hali media fayllar qo&apos;shilmagan.
          </div>
        ) : (
          initialMedia.map((media) => (
            <div key={media.id} className="group border rounded-lg overflow-hidden bg-card flex flex-col">
              <div className="aspect-video relative bg-secondary">
                <Image src={media.fileUrl} alt={media.filename} fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                  <button 
                    onClick={() => deleteMedia(media.id)}
                    className="p-1.5 rounded bg-white/90 text-red-600 hover:bg-white"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
              <div className="p-3 flex-1 flex flex-col">
                <p className="text-sm font-semibold line-clamp-1">{media.filename}</p>
                <div className="flex items-center justify-between mt-auto pt-2 text-[11px] text-muted-foreground">
                  <span>{new Date(media.createdAt).toLocaleDateString()}</span>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
