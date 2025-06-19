"use client";
import React, { useState } from "react";
import Image from "next/image";

const SoftwareHero = ({
    MainTitle,
    Category,
    ShortDescription,
    LargeDescription,
    ExternalLink,
    TechnologiesUsed,
    MainImage,
    YouTubeLink,
}) => {
    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 mt-10">
                    <div className="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
                        <div className="lg:col-span-3">
                            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl dark:text-white">
                                {MainTitle}
                            </h1>
                            <p className="mt-3 text-xl font-bold text-gray-800 dark:text-neutral-400">
                                {Category}
                            </p>
                            <p className="mt-3 text-lg text-gray-800 dark:text-neutral-400">
                                {ShortDescription}
                            </p>
                            <div className="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
                                <a
                                    className="w-full sm:w-auto py-3 px-8 inline-flex justify-center items-center gap-x-2
                                                text-sm font-medium rounded-lg border border-transparent bg-primary text-white 
                                                hover:bg-foreground focus:outline-hidden focus:bg-foreground disabled:opacity-50 
                                                disabled:pointer-events-none"
                                    href={ExternalLink}
                                    target="_blank"
                                >
                                    Try it now!
                                </a>
                            </div>

                            <div className="mt-6 lg:mt-12">
                                <span className="text-xs font-medium text-gray-800 uppercase dark:text-neutral-200">
                                    Technologies:
                                </span>

                                <div className="mt-4 flex gap-x-8">
                                    {TechnologiesUsed.map((tech, index) => {
                                        return (
                                            <Image
                                                src={tech}
                                                alt={index}
                                                width={40}
                                                height={40}
                                            />
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                        <div className="lg:col-span-4 mt-10 lg:mt-0">
                            <img
                                className="w-full rounded-xl"
                                src={MainImage}
                                alt={MainTitle}
                            />
                        </div>
                    </div>
                </div>

                <div class="relative overflow-hidden mb-10">
                    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pb-10">
                        <div className="">
                            <div className="max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 lg:py-24 mx-auto">
                                <blockquote className="max-w-4xl mx-auto">
                                    <p className="mb-6 md:text-2xl">
                                        <span className="font-semibold text-black-800">
                                            What it does?
                                        </span>
                                    </p>

                                    <p className="text-xl sm:text-xl md:text-2xl md:leading-normal text-black text-gray-600 dark:text-neutral-600">
                                        {LargeDescription}
                                    </p>
                                </blockquote>
                            </div>
                        </div>
                        <div class="mt-10 max-w-5xl mx-auto">
                            <div class="relative w-full aspect-video">
                                <iframe
                                    class="absolute top-0 left-0 w-full h-full"
                                    src={YouTubeLink}
                                    title="YouTube video player"
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SoftwareHero;
