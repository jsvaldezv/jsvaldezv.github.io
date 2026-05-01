import DevImg from "./Devlmg";
import Socials from "./Socials";
import Image from "next/image";

const Hero = () => {
    return (
        <section className="relative min-h-[88vh] flex items-center py-16 sm:py-20 overflow-hidden">
            {/* Dot grid background */}
            <div
                className="pointer-events-none absolute inset-0 z-0 opacity-[0.035] dark:opacity-[0.07]"
                style={{
                    backgroundImage:
                        "radial-gradient(circle, hsl(var(--foreground)) 1px, transparent 1px)",
                    backgroundSize: "28px 28px",
                }}
            />
            {/* Top-left corner accent lines */}
            <span className="pointer-events-none absolute z-0 top-12 left-4 sm:left-8 w-16 h-px bg-border" />
            <span className="pointer-events-none absolute z-0 top-12 left-4 sm:left-8 w-px h-16 bg-border" />
            {/* Bottom-right corner accent lines */}
            <span className="pointer-events-none absolute z-0 bottom-12 right-4 sm:right-8 w-16 h-px bg-border" />
            <span className="pointer-events-none absolute z-0 bottom-12 right-4 sm:right-8 w-px h-16 bg-border" />
            <div className="relative z-10 container mx-auto px-4">
                <div className="grid grid-cols-1 xl:grid-cols-2 items-center gap-12 xl:gap-20">
                    {/* Text */}
                    <div className="order-2 xl:order-1 text-center xl:text-left">
                        <div className="inline-flex items-center gap-2 mb-4">
                            <span className="block w-6 h-px bg-foreground/40" />
                            <p className="section-eyebrow !mb-0">
                                Audio Software Developer
                            </p>
                        </div>
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
                        <div className="relative flex flex-col items-center">
                            {/* Decorative outer dashed ring */}
                            <div className="pointer-events-none absolute inset-0 z-0 rounded-full border border-dashed border-border scale-[1.12]" />
                            {/* Decorative mid ring */}
                            <div className="pointer-events-none absolute inset-0 z-0 rounded-full border border-border/30 scale-[1.28]" />
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
