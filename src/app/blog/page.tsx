export const metadata = {
  title: "Maqolalar",
  description: "Tibbiyot, IT va biznes bo'yicha maqolalar va blog.",
};

export default function BlogPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h1 className="text-4xl font-bold text-white mb-6">Maqolalar</h1>
        
        <div className="glass p-12 rounded-2xl border border-ak-card-border text-center">
          <div className="w-16 h-16 mx-auto bg-ak-card rounded-2xl border border-ak-card-border flex items-center justify-center mb-4">
            <span className="text-2xl">📝</span>
          </div>
          <h2 className="text-xl font-medium text-white mb-2">Blog tizimi ishlab chiqilmoqda</h2>
          <p className="text-ak-text max-w-md mx-auto">
            Tez orada bu yerda tibbiyot, texnologiya va startup boshqaruvi bo&apos;yicha maqolalar chop etiladi.
          </p>
        </div>
      </div>
    </div>
  );
}
