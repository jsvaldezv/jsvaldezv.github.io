"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { projects } from "./projects";

// Remove category duplicates
const uniqueCategories = [
    "all",
    ...new Set(projects.map((item) => item.category)),
];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all");
    const filteredProjects = projects.filter((project) => {
        return category === "all" ? project : project.category === category;
    });

    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    Software
                </h2>
                {/* Tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    <TabsList className="w-full grid h-full md:grid-cols-5 lg:max-w-[1200px] mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setCategory(category)}
                                    value={category}
                                    key={index}
                                    className="capitalize w-[162px] md:w-auto md:text-xs xl:text-lg"
                                >
                                    {category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {/* Tabs content */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <ProjectCard project={project} />
                                </TabsContent>
                            );
                        })}
                    </div>
                </Tabs>
            </div>
        </section>
    );
};

export default Projects;
