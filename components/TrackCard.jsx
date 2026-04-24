import { Card } from "./ui/card";

const TrackCard = ({ project }) => {
    return (
        <Card className="overflow-hidden">
            <div className="aspect-video w-full">
                <iframe
                    className="w-full h-full"
                    src={`https://open.spotify.com/embed/track/${project.link
                        .split("/")
                        .pop()}?utm_source=generator`}
                    frameBorder="0"
                    allowFullScreen
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            </div>
            <div className="p-5">
                <h3 className="font-semibold text-foreground mb-1">
                    {project.main_title}
                </h3>
                <p className="text-sm text-muted-foreground">
                    {project.short_description}
                </p>
                {project.tech_used && (
                    <p className="text-sm text-muted-foreground mt-1">
                        {project.tech_used}
                    </p>
                )}
            </div>
        </Card>
    );
};

export default TrackCard;
