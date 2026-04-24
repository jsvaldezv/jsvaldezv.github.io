import DevImg from "./Devlmg";
import Socials from "./Socials";

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
                        <h1 className="h1 mb-5">
                            Hello, I&apos;m{" "}
                            <span className="block sm:inline">
                                Jesús Valdez
                            </span>
                        </h1>
                        <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-md mx-auto xl:mx-0 mb-8">
                            Innovating in audio means filling silence with
                            unheard beauty
                        </p>
                        <Socials
                            containerStyles="flex gap-x-5 justify-center xl:justify-start"
                            iconsStyles="text-muted-foreground text-xl hover:text-foreground transition-colors duration-200"
                        />
                    </div>

                    {/* Photo */}
                    <div className="order-1 xl:order-2 flex justify-center xl:justify-end">
                        <div className="relative w-52 h-52 sm:w-72 sm:h-72 xl:w-[400px] xl:h-[400px] rounded-2xl overflow-hidden bg-secondary">
                            <DevImg
                                containerStyles="absolute inset-0"
                                imgSrc="/hero/developer.png"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
