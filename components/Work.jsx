"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import ProjectCard from "@/components/ProjectCard";

const projectData = [
    {
        main_title: "SweetPoint",
        category: "Audio Plug-in",
        short_description: "Smart Stereo Field Optimizer",
        main_image: "/plugins/viewSweetpoint.png",
        path: "/software/audio-plugin/sweetpoint",
        link: "https://earcandytech.com/sweetpoint",
        github: "none",
    },
    {
        main_title: "Phonograin",
        category: "Audio Plug-in",
        short_description: "Granular Multi FX",
        main_image: "/plugins/viewPhono.png",
        path: "/software/audio-plugin/phonograin",
        link: "https://earcandytech.com/phonograin",
        github: "none",
    },
    {
        main_title: "Ear Candy Technologies",
        category: "Web Dev",
        short_description: "Company Website — React & Firebase",
        main_image: "/webdev/viewECT.png",
        path: "/software/web-dev/ear-candy-tech",
        link: "https://earcandytech.com/",
        github: "none",
    },
    {
        main_title: "Drum Machine",
        category: "JavaScript",
        short_description: "Real-Time Drum Machine in the Browser",
        main_image: "/webdev/viewDrum.png",
        path: "/software/web-dev/drum-machine",
        link: "https://jsvaldezv.github.io/drum-machine/",
        github: "https://github.com/jsvaldezv/drum-machine",
    },
];

const Work = () => {
    return (
        <section className="py-20 xl:py-28 border-t border-border">
            <div className="container mx-auto px-4">
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
                    <div className="text-center sm:text-left">
                        <p className="section-eyebrow">Portfolio</p>
                        <h2 className="h2">Latest Projects</h2>
                    </div>
                    <Link href="/software" className="mx-auto sm:mx-0">
                        <Button variant="outline" size="sm">
                            View all projects
                        </Button>
                    </Link>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {projectData.map((project, index) => (
                        <ProjectCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Work;
