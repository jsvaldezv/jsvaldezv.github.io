"use client";
import Socials from "./Socials";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="border-t border-border py-10">
            <div className="container mx-auto px-4">
                <div className="flex flex-col items-center gap-y-4">
                    <Socials
                        containerStyles="flex gap-x-5"
                        iconsStyles="text-muted-foreground text-[20px] hover:text-foreground transition-colors"
                    />
                    <p className="text-sm text-muted-foreground">
                        Copyright &copy; {year} Jesús Valdez. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
