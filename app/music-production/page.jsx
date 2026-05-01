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
        <section className="relative min-h-screen py-16 overflow-hidden">
            {/* Dot grid */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.07]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Corner accents */}
            <span className="pointer-events-none absolute z-0 top-8 left-4 sm:left-8 w-12 h-px bg-border" />
            <span className="pointer-events-none absolute z-0 top-8 left-4 sm:left-8 w-px h-12 bg-border" />
            <span className="pointer-events-none absolute z-0 bottom-8 right-4 sm:right-8 w-12 h-px bg-border" />
            <span className="pointer-events-none absolute z-0 bottom-8 right-4 sm:right-8 w-px h-12 bg-border" />
            <div className="relative z-10 container mx-auto px-4">
                <div className="text-center mb-10">
                    <div className="inline-flex items-center justify-center gap-2 mb-2">
                        <span className="block w-6 h-px bg-foreground/40" />
                        <p className="section-eyebrow !mb-0">Creative Work</p>
                        <span className="block w-6 h-px bg-foreground/40" />
                    </div>
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
