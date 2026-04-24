import Link from "next/link";
import Image from "next/image";
import { Github, Link2Icon } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
        <div className="group rounded-xl border border-border bg-card overflow-hidden">
            {/* Image area */}
            <div className="relative aspect-video overflow-hidden bg-secondary">
                <Image
                    src={project.main_image}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    alt={project.main_title}
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-300" />
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                    {project.link !== "none" && (
                        <Link
                            href={project.path}
                            className="w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-secondary"
                        >
                            <Link2Icon size={16} />
                        </Link>
                    )}
                    {project.github !== "none" && (
                        <Link
                            href={project.github}
                            target="_blank"
                            className="w-10 h-10 rounded-full bg-background flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-secondary"
                        >
                            <Github size={16} />
                        </Link>
                    )}
                </div>
            </div>
            {/* Content */}
            <div className="p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-1">
                    {project.category}
                </p>
                <h3 className="font-semibold text-foreground mb-1">
                    {project.main_title}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {project.short_description}
                </p>
            </div>
        </div>
    );
};

export default ProjectCard;
