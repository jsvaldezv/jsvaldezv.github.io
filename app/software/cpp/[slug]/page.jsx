import { projects } from "@/app/software/projects";
import SoftwareHero from "@/components/SoftwareHero";

export function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

const SoftwarePage = ({ params }) => {
    const product = projects.find((p) => p.slug === params.slug);
    if (!product) return <div>Project not found</div>;

    return (
        <SoftwareHero
            MainTitle={product.main_title}
            Category={product.category}
            ShortDescription={product.short_description}
            LargeDescription={product.large_description}
            ExternalLink={product.external_link}
            TechnologiesUsed={product.tech_used}
            MainImage={product.main_image}
            YouTubeLink={product.yt_link}
        />
    );
};

export default SoftwarePage;
