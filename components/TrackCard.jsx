import { Card, CardHeader } from "./ui/card";

const TrackCard = ({ project }) => {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                <div className="w-full max-w-xl mx-auto aspect-[16/9] flex justify-center">
                    <iframe
                        className="w-full h-full rounded-xl"
                        src={`https://open.spotify.com/embed/track/${project.link
                            .split("/")
                            .pop()}?utm_source=generator`}
                        frameborder="0"
                        allowfullscreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    ></iframe>
                </div>
            </CardHeader>
            <div className="h-full px-8 py-6">
                {/* <Badge className="text-sm font-medium mb-2 absolute top-4 left-5">
                    {project.category}
                </Badge> */}
                <h4 className="h4 mb-1">{project.main_title}</h4>
                <p className="text-muted-foreground text-lg font-semibold">
                    {project.short_description}
                </p>
                <p className="text-muted-foreground text-lg">
                    {project.tech_used}
                </p>
                {project.padding ? <div className="py-[0.8rem]"></div> : <></>}
            </div>
        </Card>
    );
};

export default TrackCard;
