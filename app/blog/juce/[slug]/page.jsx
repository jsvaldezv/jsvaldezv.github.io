import { blogsList } from "@/app/blog/blogsList";
import BlogPage from "@/components/BlogPage";

export function generateStaticParams() {
    return blogsList.map((project) => ({
        slug: project.slug,
    }));
}

const CurrentBlogPage = ({ params }) => {
    const product = blogsList.find((p) => p.slug === params.slug);
    if (!product) return <div>Project not found</div>;

    return (
        <BlogPage MainTitle={"Why Juce?"}/>
    );
};

export default CurrentBlogPage;