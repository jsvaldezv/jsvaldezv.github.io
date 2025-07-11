"use client";
import React from "react";
import JobPosition from "./position-job";

const Projects = () => {
    return (
        <section className="min-h-screen pt-12 mb-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    CV
                </h2>
                <div className="pt-8">
                    <JobPosition
                        date={"Jan 2021 - Present"}
                        mainTitle={"Audio Software Developer"}
                        subTitle={"Ear Candy Technologies"}
                        description={""}
                        bullets={[
                            "Led the full development cycle of audio plugins from scratch, designing and implementing real-time audio processing algorithms that ensure seamless performance on macOS and Windows for both Intel and ARM architectures using JUCE framework and C++. The plugins have been downloaded by 6k+ users and are actively used by producers and audio engineers in production, mixing and mastering workflows.",
                            "Implemented CI/CD pipelines with GitHub Actions, reducing build and deployment time by 50%, ensuring faster and more reliable updates.",
                            "Designed and built a C++ library for general-purpose audio plugin development to improve development efficiency, which has been used in 4+ plugins, reducing development time by 30%.",
                            "Integrated machine learning and real-time analysis into the latest audio plugin, SweetPoint, enabling smart mid-side configuration recommendations to enhance the track's stereo image dynamically.",
                            "Developed DSP algorithms for real time granular synthesis, synthesizers, convolution, filters, time-based, dynamic and reverb effects, as well as real-time visualizers such as spectrograms and goniometers, ensuring accurate and responsive audio representation.",
                            "Instructor for Ear Candy Technologies' Audio Plugin Development course, guiding students in designing and implementing plugins. Over 20+ plugins have been developed as final projects across Latin America and Spain.",
                        ]}
                    />
                    <JobPosition
                        date={"Aug 2022 - Jan 2025"}
                        mainTitle={"Adjunt Professor"}
                        subTitle={"Tecnológico de Monterrey"}
                        description={""}
                        bullets={[
                            "Taught audio plugin development with C++ and JUCE, covering DSP fundamentals and real-time audio implementation, earning a 95% student approval rating.",
                        ]}
                    />
                    <JobPosition
                        date={"Aug 2022 - Jan 2025"}
                        mainTitle={"Audio Software Developer"}
                        subTitle={"OIKLA"}
                        description={""}
                        bullets={[
                            "Developed Shape audio plugin with JUCE framework and C++ designed to refine perceived loudness and frequency balance, ensuring a natural, ear-friendly, and musically inspiring sound. This plugin have been used by 6k+ music producers and engineers, enhancing mixing and mastering workflows.",
                            "Additionally, Implemented a cloud-connected licensing system with Google Cloud, streamlining software authentication and distribution.",
                        ]}
                    />
                    <JobPosition
                        date={"Aug 2023 - Jan 2024"}
                        mainTitle={"Audio Software Developer"}
                        subTitle={"Audialab, Inc."}
                        description={""}
                        bullets={[
                            "Developed audio plugins with JUCE framework and C++ focused on real-time drum instruments, achieving low-latency performance for responsive playback.",
                            "Integrated a cloud-connected generative system for sample creation, enabling dynamic and scalable audio content generation, with asynchronous processing to reduce load times by 25%.",
                        ]}
                    />
                    <JobPosition
                        date={"Feb 2023 - Sep 2023"}
                        mainTitle={"Audio Software Developer"}
                        subTitle={"Aztech AudioWorks"}
                        description={""}
                        bullets={[
                            "Developed audio plugins with JUCE framework and C++ focused on real-time granular instrument with efficient DSP implementations.",
                            "Designed and implemented user interfaces from scratch using the JUCE framework and C++, ensuring fluid real-time interaction and efficient CPU usage.",
                        ]}
                    />
                    <JobPosition
                        date={"Aug 2018 - Mar 2020"}
                        mainTitle={"Mixing Engineer"}
                        subTitle={"Cuica House"}
                        description={
                            "Produced music for artists and bands, handling recording, audio editing, and mixing using Ableton Live and Pro Tools. Several singles were successfully released on digital streaming platforms."
                        }
                        bullets={[]}
                    />
                    <JobPosition
                        date={"Jun 2019 - Dec 2019"}
                        mainTitle={"Audio Software Developer"}
                        subTitle={"Centro de Cultura Digital"}
                        description={
                            "Developed audio programming for a spatialization plugin tailored to the facilities of the Digital Culture Center. Used JUCE and C++ to design and implement the final audio plugin, optimizing immersive sound experiences and enhancing spatial audio rendering."
                        }
                        bullets={[]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Projects;
