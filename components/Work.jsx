"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";
import { Swiper, SwiperSlide } from "swiper/react";

const projectData = [
    {
        image: "/plugins/viewTwizzlay.png",
        category: "Audio Plug-in",
        technology: "C++ and JUCE",
        name: "Twizzlay",
        description: "Ping Pong Delay Audio Plug-in",
        link: "https://earcandytech.com/twizzlay",
        github: "none",
    },
    {
        image: "/plugins/viewPhono.png",
        category: "Audio Plug-in",
        technology: "C++ and JUCE",
        name: "Phonograin",
        description: "Granular Multi FX Audio Plug-in",
        link: "https://earcandytech.com/phonograin",
        github: "none",
    },
    {
        image: "/webdev/viewECT.png",
        category: "React JS",
        technology: "React JS and Firebase",
        name: "Ear Candy Technologies Website",
        description: "Current Company Website",
        link: "https://earcandytech.com/",
        github: "none",
    },
    {
        image: "/webdev/viewDrum.png",
        category: "JavaScript",
        technology: "JavaScript",
        name: "Drum Machine",
        description: "Real Time Drum Machine in the Browser",
        link: "https://jsvaldezv.github.io/drum-machine/",
        github: "https://github.com/jsvaldezv/drum-machine",
    },
];

const Work = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                {/* Text */}
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Projects</h2>
                    <p className="subtitle mb-8">See some of my work</p>
                    <Link href="/projects">
                        <Button>All projects</Button>
                    </Link>
                </div>
                {/* slider */}
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0 xl:mr-8">
                    <Swiper
                        className="h-[480px]"
                        slidesPerView={1}
                        breakpoints={{
                            640: {
                                slidesPerView: 2,
                            },
                        }}
                        spaceBetween={30}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {projectData.slice(0.4).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default Work;
