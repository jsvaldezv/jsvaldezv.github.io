import DevImg from "./Devlmg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import Image from "next/image";

import { User2, AudioWaveform, Lightbulb, GraduationCap } from "lucide-react";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Jesús Valdez",
    },
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
        text: "Freelance and Entrepreneur",
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "Example University",
                qualification: "Bachelor of science",
                years: "3015 - 2018",
            },
            {
                university: "Example University",
                qualification: "Bachelor of science",
                years: "3015 - 2018",
            },
            {
                university: "Example University",
                qualification: "Bachelor of science",
                years: "3015 - 2018",
            },
        ],
    },
    {
        title: "experience",
        data: [
            {
                university: "ABC Inc.",
                role: "Software Eng",
                years: "3015 - 2018",
            },
            {
                university: "ABC Inc.",
                role: "Software Eng",
                years: "3015 - 2018",
            },
            {
                university: "ABC Inc.",
                role: "Software Eng",
                years: "3015 - 2018",
            },
        ],
    },
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "C++",
            },
            {
                name: "JavaScript",
            },
            {
                name: "Python",
            },
        ],
    },
    {
        title: "libraries",
        data: [
            {
                name: "JUCE",
            },
            {
                name: "HTML and CSS",
            },
            {
                name: "React JS",
            },
        ],
    },
    // {
    //     title: "tools",
    //     data: [
    //         {
    //             imgPath: "/about/vscode.svg",
    //         },
    //         {
    //             imgPath: "/about/figma.svg",
    //         },
    //         {
    //             imgPath: "/about/notion.svg",
    //         },
    //         {
    //             imgPath: "/about/wordpress.svg",
    //         },
    //     ],
    // },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    };

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    About me
                </h2>
                <div className="flex flex-col xl:flex-row">
                    {/* Image */}
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles="bg_about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative [clip-path:circle()]"
                            imgSrc="/about/developer.png"
                        />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-2 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="personal"
                                >
                                    Personal Info
                                </TabsTrigger>

                                {/* <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="qualifications"
                                >
                                    Qualifications
                                </TabsTrigger> */}

                                <TabsTrigger
                                    className="w-[162px] xl:w-auto"
                                    value="skills"
                                >
                                    Skills
                                </TabsTrigger>
                            </TabsList>
                            {/* Tabs content */}
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">
                                            Creating innovative audio
                                            applicatins to elevate sound
                                            production and design.
                                        </h3>
                                        <p className="subtitle max-w-xl max-auto xl:mx-0">
                                            As an audio software developer, I
                                            specialize in creating innovative
                                            tools that enhance and transform
                                            music production and sound design.
                                            My work involves designing,
                                            programming, and optimizing software
                                            that enables musicians, sound
                                            engineers, and producers to improve
                                            and customize their work with
                                            advanced audio effects and signal
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
                                        {/* Languages */}
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">
                                                Languages
                                            </div>
                                            <div className="border-b border-boder"></div>
                                            <div>English and Spanish</div>
                                        </div>
                                    </div>
                                </TabsContent>

                                {/* Qualifications */}
                                {/* <TabsContent value="qualifications">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Awesome journey
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <div className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "experience"
                                                            ).title
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "experience"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                company,
                                                                role,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {" "}
                                                                            {
                                                                                company
                                                                            }{" "}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {" "}
                                                                            {
                                                                                role
                                                                            }{" "}
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {" "}
                                                                            {
                                                                                years
                                                                            }{" "}
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>

                                            
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <div className="capitalize font-medium">
                                                        {
                                                            getData(
                                                                qualificationData,
                                                                "education"
                                                            ).title
                                                        }
                                                    </div>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(
                                                        qualificationData,
                                                        "education"
                                                    ).data.map(
                                                        (item, index) => {
                                                            const {
                                                                university,
                                                                qualification,
                                                                years,
                                                            } = item;
                                                            return (
                                                                <div
                                                                    className="flex gap-x-8 group"
                                                                    key={index}
                                                                >
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {
                                                                                university
                                                                            }
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">
                                                                            {
                                                                                qualification
                                                                            }
                                                                        </div>
                                                                        <div className="text-base font-medium">
                                                                            {
                                                                                years
                                                                            }
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent> */}

                                {/* Skills */}
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-8">
                                            What I Use Everyday
                                        </h3>

                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">
                                                Programming languages
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>

                                            <div>
                                                {getData(
                                                    skillData,
                                                    "skills"
                                                ).data.map((item, index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div
                                                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                                            key={index}
                                                        >
                                                            <div className="font-medium">
                                                                {name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">
                                                Libraries and frameworks
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>

                                            <div>
                                                {getData(
                                                    skillData,
                                                    "libraries"
                                                ).data.map((item, index) => {
                                                    const { name } = item;
                                                    return (
                                                        <div
                                                            className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                                            key={index}
                                                        >
                                                            <div className="font-medium">
                                                                {name}
                                                            </div>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>

                                        {/* Tools */}
                                        {/* <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                                {" "}
                                                Tools{" "}
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div className="flex gap-x-8 justify-center xl:justify-start">
                                                {getData(
                                                    skillData,
                                                    "tools"
                                                ).data.map((item, index) => {
                                                    const { imgPath } = item;
                                                    return (
                                                        <div key={index}>
                                                            <Image
                                                                src={imgPath}
                                                                width={48}
                                                                height={48}
                                                                alt=""
                                                                priority
                                                            />
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div> */}
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
