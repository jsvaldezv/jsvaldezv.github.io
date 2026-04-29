import Link from "next/link";
import Image from "next/image";
import { Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project }) => {
    return (
        <div className="group flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-foreground/10 transition-all duration-300">
            {/* Image */}
            <div className="relative aspect-video overflow-hidden bg-secondary">
                {project.main_image && (
                    <Image
                        src={project.main_image}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        alt={project.main_title}
                    />
                )}
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-300" />
                {/* Action buttons */}
                <div className="absolute inset-0 flex items-center justify-center gap-3">
                    {project.path && (
                        <Link
                            href={project.path}
                            className="w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300"
                        >
                            <ArrowUpRight size={16} />
                        </Link>
                    )}
                    {project.github && project.github !== "none" && (
                        <Link
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-11 h-11 rounded-full bg-background/90 backdrop-blur-sm flex items-center justify-center opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75"
                        >
                            <Github size={16} />
                        </Link>
                    )}
                </div>
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5 gap-1">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                    {project.category}
                </p>
                <h3 className="font-bold text-foreground text-base leading-snug mb-1">
                    {project.main_title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.short_description}
                </p>

                {/* Tech logos */}
                {project.tech_used && project.tech_used.length > 0 && (
                    <div className="flex items-center gap-2 pt-4 mt-auto border-t border-border">
                        {project.tech_used.map((logo, i) => (
                            <div key={i} className="relative w-5 h-5 opacity-60">
                                <Image
                                    src={logo}
                                    fill
                                    className="object-contain"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;
