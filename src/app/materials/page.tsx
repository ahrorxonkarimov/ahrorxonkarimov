import { FileText, Download } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Materiallar",
  description: "O'quv va ilmiy materiallar, tibbiyotga oid hujjatlar (pdf, docx, excell).",
};

export default function MaterialsPage() {
  const materials = [
    { id: 1, title: "Tibbiyotda biznes-reja namunasi", format: "PDF", size: "2.4 MB", date: "10-May, 2024" },
    { id: 2, title: "Xirurgiya amaliyoti bo'yicha qo'llanma", format: "DOCX", size: "1.1 MB", date: "08-May, 2024" },
    { id: 3, title: "Bemorlar ro'yxati va analizi", format: "XLSX", size: "500 KB", date: "01-May, 2024" },
  ];

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
          {materials.map((item) => (
            <div key={item.id} className="card-ak flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">{item.title}</h3>
                  <div className="flex items-center gap-3 mt-1 text-sm text-muted-foreground">
                    <span className="bg-secondary px-2 py-0.5 rounded text-xs font-medium text-foreground">{item.format}</span>
                    <span>{item.size}</span>
                    <span>•</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
              
              <button className="w-full md:w-auto flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded-md text-sm font-medium hover:bg-primary/90 transition-colors">
                <Download className="h-4 w-4" /> Yuklab olish
              </button>
            </div>
          ))}
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
