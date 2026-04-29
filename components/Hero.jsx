import DevImg from "./Devlmg";
import Socials from "./Socials";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="min-h-[88vh] flex items-center py-16 sm:py-20">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12 xl:gap-20">
                    {/* Text */}
                    <div className="order-2 xl:order-1 text-center xl:text-left">
                        <p className="section-eyebrow">
                            Audio Software Developer
                        </p>
                        <h1 className="h1 mb-6">
                            Hello, I&apos;m{" "}
                            <span className="block">Jesús Valdez</span>
                        </h1>
                        <p className="text-muted-foreground text-lg sm:text-xl leading-relaxed max-w-lg mx-auto xl:mx-0 mb-8">
                            Innovating in audio means filling silence with
                            unheard beauty
                        </p>
                        <Socials
                            containerStyles="flex gap-x-5 justify-center xl:justify-start"
                            iconsStyles="text-muted-foreground text-2xl hover:text-foreground transition-colors duration-200"
                        />
                    </div>

                    {/* Photo + Shape */}
                    <div className="order-1 xl:order-2 flex justify-center xl:justify-end">
                        <div className="flex flex-col items-center">
                            {/* Circular photo */}
                            <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 xl:w-[460px] xl:h-[460px] rounded-full overflow-hidden bg-secondary ring-4 ring-border">
                                <DevImg
                                    containerStyles="absolute inset-0"
                                    imgSrc="/hero/developer.png"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
