import Link from "next/link";
// import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/">
            <h1 className="text-2xl font-bold">Jesús Valdez</h1>
            {/* <Image src="/logo.png" width={54} height={54} priority alt="" /> */}
        </Link>
    );
};

export default Logo;
