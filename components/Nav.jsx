import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const links = [
    { path: "/", name: "about" },
    { path: "/software", name: "software" },
    { path: "/music-production", name: "music production" },
    // { path: "/blog", name: "blog" },
    // { path: "/talks", name: "talks" },
    { path: "/cv", name: "CV" },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link
                        href={link.path}
                        key={index}
                        className={`capitalize ${linkStyles}`}
                    >
                        {link.path === path && (
                            <motion.span
                                initial={{ y: "-100%" }}
                                animate={{ y: 0 }}
                                transition={{ type: "tween" }}
                                layoutId="underline"
                                className={`${underlineStyles}`}
                            />
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    );
};

export default Nav;
