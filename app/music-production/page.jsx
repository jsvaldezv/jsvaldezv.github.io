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
        <section className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="section-eyebrow">Creative Work</p>
                    <h2 className="h2">Music Production</h2>
                </div>
                {/* Tabs */}
                <Tabs defaultValue={category} className="mb-16">
                    {/* Tabs content */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-4">
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
