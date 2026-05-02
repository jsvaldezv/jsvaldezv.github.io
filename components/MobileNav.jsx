"use client";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { AlignJustify } from "lucide-react";

import Nav from "./Nav";
import Logo from "./Logo";
import Socials from "./Socials";

const MobileNav = () => {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <AlignJustify className="cursor-pointer" />
            </SheetTrigger>
            <SheetContent>
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col items-center justify-between h-full py-8">
                    <div className="flex flex-col items-center gap-y-32">
                        <Logo />
                        <Nav
                            containerStyles="flex flex-col items-center gap-y-6"
                            linkStyles="text-2xl"
                            onLinkClick={() => setOpen(false)}
                        />
                    </div>
                    <Socials
                        containerStyles="flex gap-x-4"
                        iconsStyles="text-2xl"
                    />
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default MobileNav;
