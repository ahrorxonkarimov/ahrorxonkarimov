"use client";

import { useState } from "react";
import { Plus, ExternalLink, Edit, Trash2, Check, X } from "lucide-react";
import { createProject, deleteProject } from "@/app/actions/projects";

export default function ProjectsClient({ initialProjects }: { initialProjects: any[] }) {
  const [isAdding, setIsAdding] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [link, setLink] = useState("");
  const [tags, setTags] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("link", link);
    formData.append("tags", tags);

    try {
      await createProject(formData);
      setIsAdding(false);
      setTitle("");
      setDescription("");
      setLink("");
      setTags("");
    } catch (error) {
      console.error("Failed to create project:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Loyihalar</h1>
        <button 
          onClick={() => setIsAdding(!isAdding)}
          className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors"
        >
          {isAdding ? <><X className="h-4 w-4" /> Bekor qilish</> : <><Plus className="h-4 w-4" /> Yangi loyiha</>}
        </button>
      </div>

      {isAdding && (
        <form onSubmit={handleSubmit} className="border rounded-lg p-5 bg-card space-y-4">
          <h2 className="text-lg font-semibold">Yangi loyiha qo&apos;shish</h2>
          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Loyiha nomi</label>
              <input 
                type="text" 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" 
                placeholder="Masalan: Doclab.uz" 
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-muted-foreground mb-1">Tavsif</label>
              <textarea 
                rows={3} 
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary resize-none" 
                placeholder="Loyiha haqida qisqacha ma'lumot..." 
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Link (URL)</label>
                <input 
                  type="url" 
                  value={link}
                  onChange={(e) => setLink(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" 
                  placeholder="https://..." 
                />
              </div>
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1">Taglar (vergul bilan ajrating)</label>
                <input 
                  type="text" 
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  className="w-full px-3 py-2 text-sm border rounded focus:ring-1 focus:ring-primary" 
                  placeholder="Web, Mobile, AI" 
                />
              </div>
            </div>
          </div>
          <div className="flex justify-end gap-3 pt-4 border-t">
            <button type="button" onClick={() => setIsAdding(false)} className="px-4 py-2 border rounded-md text-sm font-medium hover:bg-accent">Bekor qilish</button>
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {initialProjects.length === 0 ? (
          <div className="md:col-span-2 py-12 text-center text-muted-foreground border rounded-lg border-dashed">
            Hali loyihalar qo&apos;shilmagan.
          </div>
        ) : (
          initialProjects.map((project) => (
            <div key={project.id} className="card-ak space-y-3 p-4 border rounded-lg bg-card">
              <div className="flex items-center justify-between">
                <h3 className="font-bold">{project.title}</h3>
                <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
                  {project.status}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
              <div className="flex flex-wrap gap-1">
                {project.tags.split(",").filter(t => t.trim()).map((tag, i) => (
                  <span key={i} className="text-[10px] px-1.5 py-0.5 bg-accent rounded text-accent-foreground">{tag.trim()}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-2 border-t">
                {project.link ? (
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                    Loyiha manzili <ExternalLink className="h-3 w-3" />
                  </a>
                ) : <span className="text-sm text-muted-foreground">Link yo&apos;q</span>}
                <div className="flex gap-1">
                  <button 
                    onClick={() => deleteProject(project.id)}
                    className="p-1.5 rounded hover:bg-accent text-red-500"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))
        )}

        {!isAdding && (
          <div 
            onClick={() => setIsAdding(true)}
            className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center text-muted-foreground cursor-pointer hover:bg-accent/50 transition-colors"
          >
            <Plus className="h-8 w-8 mb-2" />
            <p className="text-sm font-medium">Yangi loyiha qo&apos;shish</p>
          </div>
        )}
      </div>
    </div>
  );
}
