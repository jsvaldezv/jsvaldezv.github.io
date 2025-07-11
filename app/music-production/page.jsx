"use client";
import React, { useState } from "react";
import TrackCard from "@/components/TrackCard";
import { Tabs, TabsList, TabsContent, TabsTrigger } from "@/components/ui/tabs";
import { productions } from "./productions";

// Remove category duplicates
const uniqueCategories = [
    "all",
    ...new Set(productions.map((item) => item.category)),
];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategories);
    const [category, setCategory] = useState("all");
    const filteredProjects = productions.filter((project) => {
        return category === "all" ? project : project.category === category;
    });

    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    Music Production
                </h2>
                {/* Tabs */}
                <Tabs defaultValue={category} className="mb-24 xl:mb-48">
                    {/* Tabs content */}
                    <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4 pb-4">
                        {filteredProjects.map((project, index) => {
                            return (
                                <TabsContent value={category} key={index}>
                                    <TrackCard project={project} />
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
