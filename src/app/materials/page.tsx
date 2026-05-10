import { FileText, Download } from "lucide-react";
import { getMaterials } from "@/app/actions/materials";

export const metadata = {
  title: "Materiallar",
  description: "O'quv va ilmiy materiallar, tibbiyotga oid hujjatlar (pdf, docx, excell).",
};

export const dynamic = "force-dynamic";

export default async function MaterialsPage() {
  const { materials } = await getMaterials();

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container-ak">
        <div className="max-w-3xl mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Materiallar</h1>
          <p className="text-muted-foreground text-lg">
            Sizga kerakli o&apos;quv materiallari, qo&apos;llanmalar va namunalarni shu yerdan yuklab olishingiz mumkin.
          </p>
        </div>

        <div className="grid gap-4">
          {materials.length === 0 ? (
            <div className="text-center py-12 border rounded-lg border-dashed text-muted-foreground">
              Hozircha materiallar yo&apos;q.
            </div>
          ) : (
            materials.map((item) => (
              <div key={item.id} className="card-ak flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-6 border rounded-lg bg-card shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                      <span className="bg-secondary px-2 py-0.5 rounded text-xs font-medium text-foreground">{item.format}</span>
                      <span>{new Date(item.createdAt).toLocaleDateString()}</span>
                    </div>
                    {item.description && <p className="text-sm mt-2 text-muted-foreground">{item.description}</p>}
                  </div>
                </div>
                
                <a 
                  href={item.fileUrl} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors"
                >
                  <Download className="h-4 w-4" /> Yuklab olish
                </a>
              </div>
            ))
          )}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Yana ko&apos;proq materiallar kerakmi?</p>
          <a href="https://doclab.uz" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-foreground hover:bg-secondary/80 rounded-md font-medium transition-colors">
            Doclab.uz platformasiga o&apos;tish &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
