import { getProjects } from "@/app/actions/projects";
import ProjectsClientPage from "./ProjectsClientPage";

export const metadata = {
  title: "Loyihalarim",
  description: "Raqamli platformalar va zamonaviy texnologiyalar yo'lidagi ishlarim.",
};

export const dynamic = "force-dynamic";

export default async function ProjectsPage() {
  const { projects } = await getProjects();
  return <ProjectsClientPage initialProjects={projects} />;
}
