import { getMedia } from "@/app/actions/media";
import MediaClient from "./MediaClient";

export const dynamic = "force-dynamic";

export default async function AdminMediaPage() {
  const { media } = await getMedia();
  return <MediaClient initialMedia={media} />;
}
