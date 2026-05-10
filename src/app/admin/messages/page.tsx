import { Mail, Clock, Eye, Trash2 } from "lucide-react";
import { getMessages, markMessageAsRead, deleteMessage } from "@/app/actions/messages";

export const dynamic = "force-dynamic";

export default async function AdminMessages() {
  const result = await getMessages();
  const messages = result.messages || [];
  
  const formatDate = (iso: Date) => {
    return new Date(iso).toLocaleDateString("uz-UZ", { 
      year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" 
    });
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Xabarlar</h1>
        <p className="text-sm text-muted-foreground mt-1">
          Aloqa formasi orqali yuborilgan xabarlar.
          {messages.filter((m: any) => !m.isRead).length > 0 && (
            <span className="ml-2 text-primary font-semibold">
              {messages.filter((m: any) => !m.isRead).length} ta yangi
            </span>
          )}
        </p>
      </div>

      {messages.length === 0 ? (
        <div className="border rounded-lg p-12 text-center text-muted-foreground bg-card">
          <Mail className="h-10 w-10 mx-auto mb-3 opacity-30" />
          <p className="font-medium">Hali xabar yo&apos;q</p>
          <p className="text-xs mt-1">Aloqa formasi orqali yuborilgan xabarlar shu yerda ko&apos;rinadi.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {messages.map((msg: any) => (
            <div
              key={msg.id}
              className={`border rounded-lg p-4 space-y-3 transition-colors ${!msg.isRead ? "bg-accent/50 border-primary/20" : "bg-card"}`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${!msg.isRead ? "bg-primary text-white" : "bg-secondary text-muted-foreground"}`}>
                    {msg.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm font-semibold truncate">{msg.name}</p>
                    <p className="text-xs text-muted-foreground truncate">{msg.email}</p>
                    {msg.phone && <p className="text-xs text-muted-foreground truncate">📞 {msg.phone}</p>}
                  </div>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <span className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {formatDate(msg.createdAt)}
                  </span>
                </div>
              </div>

              <p className="text-sm text-foreground/80 leading-relaxed pl-11">{msg.content}</p>

              <div className="flex items-center gap-2 pl-11">
                {!msg.isRead && (
                  <form action={markMessageAsRead.bind(null, msg.id)}>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:underline"
                    >
                      <Eye className="h-3 w-3" /> O&apos;qilgan deb belgilash
                    </button>
                  </form>
                )}
                <form action={deleteMessage.bind(null, msg.id)}>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1 text-xs font-medium text-red-500 hover:underline"
                  >
                    <Trash2 className="h-3 w-3" /> O&apos;chirish
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
