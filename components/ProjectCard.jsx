import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader } from "./ui/card";
import { Github, Link2Icon } from "lucide-react";
import { Badge } from "./ui/badge";

const ProjectCard = ({ project }) => {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                <div className="relative w-full h-[245px] flex items-center justify-center bg-tertiary dark:bg-secondary/40 xl:bg-work_project_bg_light xl:dark:bg-work_project_bg_dark xl:bg-[110%] xl:bg-no-repeat overflow-hidden">
                    <Image
                        className="absolute shadow-2xl top-0 object-cover lg:h-[15.5rem] md:h-[15.5rem] sm:w-[100%] sm:h-[100%] sm:bg-center sm:bg-cover sm:bg-no-repeat"
                        src={project.main_image}
                        width={500}
                        height={0}
                        alt=""
                        priority
                    />
                    <div className="flex gap-x-4">
                        {project.link !== "none" ? (
                            <Link
                                href={project.path}
                                className="bg-tertiary dark:bg-white w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                            >
                                <Link2Icon className="text-black" />
                            </Link>
                        ) : (
                            <></>
                        )}

                        {project.github !== "none" ? (
                            <Link
                                href={project.github}
                                target="_blank"
                                className="bg-tertiary dark:bg-white w-[54px] h-[54px] rounded-full flex justify-center items-center scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200"
                            >
                                <Github className="text-black" />
                            </Link>
                        ) : (
                            <></>
                        )}
                    </div>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                <Badge className="text-sm font-medium mb-2 absolute top-4 left-5">
                    {project.category}
                </Badge>
                <h4 className="h4 mb-1">{project.main_title}</h4>
                <p className="text-muted-foreground text-lg font-semibold">
                    {project.short_description}
                </p>
                {project.padding ? <div className="py-[0.8rem]"></div> : <></>}
            </div>
        </Card>
    );
};

export default ProjectCard;
