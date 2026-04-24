"use client";
import React, { useState, useEffect } from "react";
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import ThemeToggler from "./ThemeToggler";

const Header = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b border-border transition-all duration-300 ${
                scrolled ? "py-3 shadow-sm" : "py-5"
            }`}
        >
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <Logo />
                    <div className="flex items-center gap-x-4">
                        <Nav
                            containerStyles="hidden xl:flex gap-x-8 items-center"
                            linkStyles="relative text-sm text-muted-foreground hover:text-foreground transition-colors"
                            underlineStyles="absolute left-0 top-full h-[2px] bg-foreground w-full"
                        />
                        <ThemeToggler />
                        <div className="xl:hidden">
                            <MobileNav />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
