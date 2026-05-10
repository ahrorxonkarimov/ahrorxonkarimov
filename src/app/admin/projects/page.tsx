"use client";

import { Plus, ExternalLink, Edit, Trash2 } from "lucide-react";

export default function AdminProjects() {
  const projects = [
    { id: 1, name: "Doclab.uz", status: "Faol", url: "https://doclab.uz", description: "O'quv va ilmiy hujjatlar platformasi" },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-bold tracking-tight">Loyihalar</h1>
        <button className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold rounded bg-primary text-white hover:bg-primary/90 transition-colors">
          <Plus className="h-4 w-4" /> Yangi loyiha
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((project) => (
          <div key={project.id} className="card-ak space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold">{project.name}</h3>
              <span className="text-xs font-medium px-2 py-0.5 rounded bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400">
                {project.status}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">{project.description}</p>
            <div className="flex items-center justify-between pt-2 border-t">
              <a href={project.url} target="_blank" rel="noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                {project.url} <ExternalLink className="h-3 w-3" />
              </a>
              <div className="flex gap-1">
                <button className="p-1.5 rounded hover:bg-accent text-muted-foreground"><Edit className="h-3.5 w-3.5" /></button>
                <button className="p-1.5 rounded hover:bg-accent text-red-500"><Trash2 className="h-3.5 w-3.5" /></button>
              </div>
            </div>
          </div>
        ))}

        <div className="border border-dashed rounded-lg p-6 flex flex-col items-center justify-center text-center text-muted-foreground">
          <Plus className="h-8 w-8 mb-2" />
          <p className="text-sm font-medium">Yangi loyiha qo&apos;shish</p>
        </div>
      </div>
    </div>
  );
}
