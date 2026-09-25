import { notFound } from "next/navigation";
import projectDetails from "@/data/projectDetails";
import ProjectDetailClient from "./ProjectDescription";

export default async function ProjectDetail({ params }) {

    const { slug } = await params;

    const project = projectDetails.find(
        (project) => project.slug === slug
    );

    if (!project) {
        notFound();
    }

    return (
        <ProjectDetailClient project={project} />
    );
}