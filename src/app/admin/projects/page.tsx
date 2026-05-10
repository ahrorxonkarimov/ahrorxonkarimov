import { getProjects } from "@/app/actions/projects";
import ProjectsClient from "./ProjectsClient";

export const dynamic = "force-dynamic";

export default async function AdminProjectsPage() {
  const { projects } = await getProjects();
  return <ProjectsClient initialProjects={projects} />;
}
