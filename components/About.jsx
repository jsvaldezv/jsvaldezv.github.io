import DevImg from "./Devlmg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
    User2,
    AudioWaveform,
    Lightbulb,
    GraduationCap,
    Disc3,
    PiggyBank,
    Award,
} from "lucide-react";

const infoData = [
    {
        icon: <AudioWaveform size={20} />,
        text: "Specialized in Audio Plug-ins",
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Music Production Engineer",
    },
    {
        icon: <Lightbulb size={20} />,
        text: "Freelancer",
    },
    {
        icon: <PiggyBank size={20} />,
        text: "Entrepreneur",
    },
    {
        icon: <Disc3 size={20} />,
        text: "Dj & Producer",
    },
    {
        icon: <Award size={20} />,
        text: "Beginner Tennis Player",
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[1400px] pb-12 xl:py-24 mt-[6rem] mb-[6rem]">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row xl:items-center">
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles="bg_about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative [clip-path:circle()]"
                            imgSrc="/about/developer.png"
                        />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            {/* Tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left lg:text-center">
                                        <h3 className="h3 mb-4">
                                            Creating audio applications to
                                            elevate sound production
                                        </h3>
                                        <p className="subtitle max-w-xl max-auto xl:mx-0 lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100%]">
                                            As an audio software developer, I
                                            specialize in creating tools that
                                            enhance and transform music
                                            production and sound design. My work
                                            involves designing, programming and
                                            optimizing software that enables
                                            musicians, sound engineers, and
                                            producers to improve and customize
                                            their work with advanced audio
                                            effects and digital signal
                                            processing.
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div
                                                        className="flex items-center gap-x-4 mx-auto xl:mx-0"
                                                        key={index}
                                                    >
                                                        <div>{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
                <div className="flex flex-col xl:flex-row mt-20 xl:items-center">
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            {/* Tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left lg:text-center">
                                        <p className="subtitle max-w-xl max-auto xl:mx-0 lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100%]">
                                            Jesús Valdez holds a B.S. in Music
                                            Production Engineering from TEC de
                                            Monterrey, where he specialized in
                                            audio software development,
                                            primarily JUCE, C++ and Audio
                                            Plug-ins with 5+ years of experience
                                            in designing, developing, and
                                            implementing audio software.
                                        </p>
                                        <p className="subtitle max-w-xl max-auto xl:mx-0 lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100%]">
                                            He specialized in audio plugin
                                            development, real-time audio
                                            algorithms, and user interface
                                            design, with a proven track record
                                            of projects and commercial products
                                            used in music production, mixing,
                                            and mastering. In addition, he has
                                            experience building web applications
                                            focused on audio and implementing
                                            machine learning solutions for audio
                                            processing.
                                        </p>
                                        <p className="subtitle max-w-xl max-auto xl:mx-0 lg:max-w-[100%] md:max-w-[100%] sm:max-w-[100%]">
                                            His background as a music producer,
                                            DJ, and audio engineer gives him a
                                            deep understanding of both the
                                            technical and creative aspects of
                                            audio technology. Currently
                                            exploring artificial intelligence,
                                            business, and entrepreneurship to
                                            expand my knowledge and skills.
                                        </p>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 relative xl:justify-center">
                        <DevImg
                            containerStyles="bg_about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative [clip-path:circle()]"
                            imgSrc="/about/developer-two.png"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
