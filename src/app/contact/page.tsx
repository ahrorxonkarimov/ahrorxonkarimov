export const metadata = {
  title: "Aloqa",
  description: "Ahrorxon Karimov bilan bog'lanish uchun barcha ma'lumotlar.",
};

import ContactSection from "@/components/sections/ContactSection";

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16 min-h-screen">
      <div className="mt-4">
        <ContactSection />
      </div>
    </div>
  );
}
