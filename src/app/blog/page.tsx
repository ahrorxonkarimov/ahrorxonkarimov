import { getPosts } from "@/app/actions/posts";
import Link from "next/link";
import { ArrowRight, Calendar, Eye } from "lucide-react";

export const metadata = {
  title: "Maqolalar",
  description: "Tibbiyot, IT va biznes bo'yicha maqolalar va blog.",
};

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const { posts } = await getPosts();
  const publishedPosts = posts.filter(p => p.status === "E'lon qilingan");

  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="container-ak">
        <div className="max-w-3xl mb-12">
          <h1 className="text-4xl font-black tracking-tight text-foreground mb-4">Maqolalar</h1>
          <p className="text-muted-foreground text-lg">
            Tibbiyot, texnologiya va startup boshqaruvi bo&apos;yicha fikrlarim va tajribalarim.
          </p>
        </div>
        
        {publishedPosts.length === 0 ? (
          <div className="glass p-12 rounded-2xl border text-center">
            <div className="w-16 h-16 mx-auto bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <span className="text-2xl text-primary">📝</span>
            </div>
            <h2 className="text-xl font-medium text-foreground mb-2">Maqolalar hali yo&apos;q</h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Yaqin kunlarda yangi maqolalar qo&apos;shiladi.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {publishedPosts.map((post) => (
              <Link 
                key={post.id} 
                href={`/blog/${post.slug}`}
                className="group border rounded-2xl overflow-hidden bg-card hover:shadow-xl transition-all flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {new Date(post.createdAt).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      {post.views} ko&apos;rilgan
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-6">
                    {post.content.replace(/[#*`]/g, '').slice(0, 150)}...
                  </p>
                  
                  <div className="mt-auto flex items-center gap-2 text-sm font-bold text-primary">
                    O&apos;qish <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
