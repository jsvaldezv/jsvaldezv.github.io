"use client";
import React, { useState } from "react";
import TrackCard from "@/components/TrackCard";
import { productions } from "./productions";

const uniqueCategories = [
    "all",
    ...new Set(productions.map((item) => item.category)),
];

const MusicProduction = () => {
    const [category, setCategory] = useState("all");
    const filteredProjects = productions.filter((project) =>
        category === "all" ? true : project.category === category,
    );

    return (
        <section className="min-h-screen py-16">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10">
                    <p className="section-eyebrow">Creative Work</p>
                    <h2 className="h2">Music Production</h2>
                </div>

                {/* Filter buttons */}
                <div className="flex flex-wrap gap-2 justify-center mb-10">
                    {uniqueCategories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setCategory(cat)}
                            className={`capitalize px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                                category === cat
                                    ? "bg-foreground text-background shadow-sm"
                                    : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/70"
                            }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <div
                    key={category}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-4 animate-fade-in"
                >
                    {filteredProjects.map((project, index) => (
                        <TrackCard project={project} key={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MusicProduction;
