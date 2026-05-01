import { GanttChartSquare, Blocks, Gem } from "lucide-react";

const servicesData = [
    {
        icon: <GanttChartSquare size={28} strokeWidth={1.5} />,
        title: "Web Design",
        description:
            "Designing clean, modern, and user-friendly interfaces that leave a lasting impression.",
    },
    {
        icon: <Blocks size={28} strokeWidth={1.5} />,
        title: "Web Development",
        description:
            "Building performant, scalable web applications with modern frameworks and best practices.",
    },
    {
        icon: <Gem size={28} strokeWidth={1.5} />,
        title: "App Development",
        description:
            "Creating audio software and plug-ins that push the boundaries of music production.",
    },
];

const Services = () => {
    return (
        <section className="py-20 xl:py-28 border-t border-border">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <p className="section-eyebrow">What I do</p>
                    <h2 className="h2">My Services</h2>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                    {servicesData.map((item, index) => (
                        <div
                            key={index}
                            className="border border-border rounded-xl p-8 hover:border-foreground/20 transition-colors"
                        >
                            <div className="w-11 h-11 bg-secondary rounded-lg flex items-center justify-center mb-5 text-foreground">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-foreground mb-2">
                                {item.title}
                            </h3>
                            <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
