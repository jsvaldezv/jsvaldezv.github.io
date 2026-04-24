import Link from "next/link";

const Logo = () => {
    return (
        <Link
            href="/"
            className="font-bold text-base tracking-tight text-foreground hover:opacity-80 transition-opacity"
        >
            Jesús Valdez
        </Link>
    );
};

export default Logo;
