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
        <section className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="section-eyebrow">Work</p>
                    <h2 className="h2">Software Projects</h2>
                </div>
                {/* Tabs */}
                <Tabs defaultValue={category} className="mb-16">
                    <TabsList className="w-full flex flex-wrap h-auto gap-1 mb-8 mx-auto max-w-3xl">
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setCategory(category)}
                                    value={category}
                                    key={index}
                                    className="capitalize text-sm flex-grow-0"
                                >
                                    {category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                    {/* Tabs content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
