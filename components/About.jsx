import DevImg from "./Devlmg";
import {
    AudioWaveform,
    Lightbulb,
    GraduationCap,
    Disc3,
    PiggyBank,
    Award,
} from "lucide-react";

const infoData = [
    {
        icon: <AudioWaveform size={16} />,
        text: "Specialized in Audio Plug-ins",
    },
    { icon: <GraduationCap size={16} />, text: "Music Production Engineer" },
    { icon: <Lightbulb size={16} />, text: "Freelancer" },
    { icon: <PiggyBank size={16} />, text: "Entrepreneur" },
    { icon: <Disc3 size={16} />, text: "DJ & Producer" },
    { icon: <Award size={16} />, text: "Beginner Tennis Player" },
];

const About = () => {
    return (
        <section className="py-20 xl:py-28 border-t border-border">
            <div className="container mx-auto px-4">
                {/* Top grid: heading + photo */}
                <div className="grid grid-cols-1 xl:grid-cols-2 gap-12 xl:gap-20 items-start">
                    <div className="text-center xl:text-left">
                        <p className="section-eyebrow">About me</p>
                        <h2 className="h2 mb-5">
                            Creating audio applications to elevate sound
                            production
                        </h2>
                        <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg mx-auto xl:mx-0">
                            As an audio software developer, I specialize in
                            creating tools that enhance and transform music
                            production and sound design. My work involves
                            designing, programming and optimizing software that
                            enables musicians, sound engineers, and producers to
                            push their creative boundaries.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-sm mx-auto xl:mx-0">
                            {infoData.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 text-sm"
                                >
                                    <span className="text-muted-foreground flex-shrink-0">
                                        {item.icon}
                                    </span>
                                    <span className="text-foreground">
                                        {item.text}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="hidden xl:block">
                        <div className="relative aspect-square w-full max-w-[460px] rounded-2xl overflow-hidden bg-secondary">
                            <DevImg
                                containerStyles="absolute inset-0"
                                imgSrc="/about/developer.png"
                            />
                        </div>
                    </div>
                </div>

                {/* Bio paragraphs */}
                <div className="mt-16 max-w-3xl mx-auto xl:mx-0 space-y-4 text-center xl:text-left">
                    <p className="text-muted-foreground leading-relaxed">
                        Jesús Valdez holds a B.S. in Music Production
                        Engineering from TEC de Monterrey, where he specialized
                        in audio software development — primarily JUCE, C++ and
                        Audio Plug-ins — with 5+ years of experience designing,
                        developing, and implementing audio software.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        He specialized in audio plugin development, real-time
                        audio algorithms, and user interface design, with a
                        proven track record of commercial products used in music
                        production, mixing, and mastering. He also has
                        experience building web applications focused on audio
                        and implementing machine learning solutions for audio
                        processing.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                        His background as a music producer, DJ, and audio
                        engineer gives him a deep understanding of both the
                        technical and creative aspects of audio technology.
                        Currently exploring artificial intelligence, business,
                        and entrepreneurship to expand his knowledge and skills.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;
