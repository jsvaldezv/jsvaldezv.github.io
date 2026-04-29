import Image from "next/image";

const TrackCard = ({ project }) => {
    const trackId = project.link.split("/").pop().split("?")[0];
    return (
        <div className="flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover:shadow-md hover:border-foreground/10 transition-all duration-300">
            <div className="w-full h-[152px] shrink-0">
                <iframe
                    className="w-full h-full"
                    src={`https://open.spotify.com/embed/track/${trackId}?utm_source=generator`}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
            <div className="flex flex-col flex-1 p-5 pt-4 gap-1">
                {project.category && (
                    <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                        {project.category}
                    </p>
                )}
                <h3 className="font-bold text-foreground text-base leading-snug mb-1">
                    {project.main_title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.short_description}
                </p>
                {project.tech_used && project.tech_used.length > 0 && (
                    <div className="flex items-center gap-2 pt-4 mt-auto border-t border-border">
                        {project.tech_used.map((logo, i) => (
                            <div key={i} className="relative w-5 h-5 opacity-60">
                                <Image
                                    src={logo}
                                    fill
                                    className="object-contain"
                                    alt=""
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default TrackCard;
