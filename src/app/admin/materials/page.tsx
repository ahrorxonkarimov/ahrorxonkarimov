import { getMaterials } from "@/app/actions/materials";
import MaterialsClient from "./MaterialsClient";

export const dynamic = "force-dynamic";

export default async function AdminMaterialsPage() {
  const { materials } = await getMaterials();
  return <MaterialsClient initialMaterials={materials} />;
}
