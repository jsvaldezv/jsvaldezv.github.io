"use client";
import Image from "next/image";
import Link from "next/link";

const SoftwareHero = ({
    MainTitle,
    Category,
    ShortDescription,
    LargeDescription,
    ExternalLink,
    TechnologiesUsed,
    MainImage,
    YouTubeLink,
    Gallery,
}) => {
    return (
        <section className="relative min-h-screen pt-12 pb-20 overflow-hidden">
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
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back link */}
                <Link
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                    href="/software"
                >
                    <svg
                        className="shrink-0 size-4"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to Software
                </Link>

                {/* Hero grid */}
                <div className="mt-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Left — info */}
                    <div className="flex flex-col gap-5">
                        <div className="inline-flex items-center gap-2">
                            <span className="block w-6 h-px bg-foreground/40" />
                            <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                                {Category}
                            </span>
                        </div>
                        <h1 className="h1 text-foreground">{MainTitle}</h1>
                        <p className="text-base text-muted-foreground leading-relaxed">
                            {ShortDescription}
                        </p>

                        {ExternalLink !== "none" && (
                            <div className="pt-2">
                                <a
                                    href={ExternalLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-foreground text-background text-sm font-medium hover:opacity-80 transition-opacity duration-200"
                                >
                                    Try it now
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="14"
                                        height="14"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M7 7h10v10" />
                                        <path d="M7 17 17 7" />
                                    </svg>
                                </a>
                            </div>
                        )}

                        {/* Tech logos */}
                        {TechnologiesUsed && TechnologiesUsed.length > 0 && (
                            <div className="pt-4 border-t border-border">
                                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                                    Technologies
                                </span>
                                <div className="mt-3 flex items-center gap-4">
                                    {TechnologiesUsed.map((tech, index) => (
                                        <div
                                            key={index}
                                            className="relative w-8 h-8 hover:opacity-100 transition-opacity"
                                        >
                                            <Image
                                                src={tech}
                                                alt={`tech-${index}`}
                                                fill
                                                className="object-contain"
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Right — image */}
                    <div className="overflow-hidden border-border">
                        <img
                            className="w-full h-auto object-cover"
                            src={MainImage}
                            alt={MainTitle}
                        />
                    </div>
                </div>

                {/* Description */}
                <div className="mt-16">
                    <div className="flex items-center gap-4 mb-6">
                        <span className="flex-1 h-px bg-border" />
                        <h2 className="h3 text-foreground">What it does?</h2>
                        <span className="flex-1 h-px bg-border" />
                    </div>
                    <p className="text-base text-muted-foreground leading-relaxed">
                        {LargeDescription}
                    </p>
                </div>

                {/* YouTube embed */}
                {YouTubeLink !== "none" && (
                    <div className="mt-12 max-w rounded-2xl overflow-hidden border border-border">
                        <div className="relative w-full aspect-video">
                            <iframe
                                className="absolute top-0 left-0 w-full h-full"
                                src={YouTubeLink}
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>
                    </div>
                )}

                {/* Gallery */}
                {Gallery && Gallery.length > 0 && (
                    <div className="mt-16">
                        <h2 className="h3 text-foreground mb-6">Gallery</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {Gallery.map((img, index) => (
                                <div
                                    key={index}
                                    className="rounded-xl overflow-hidden border border-border bg-secondary p-4"
                                >
                                    <div className="relative w-full aspect-video">
                                        <Image
                                            src={img}
                                            fill
                                            className="object-contain"
                                            alt={`${MainTitle} gallery ${index + 1}`}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default SoftwareHero;
