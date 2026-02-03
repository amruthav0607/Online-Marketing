import { BlogCard } from "@/components/BlogCard";
import styles from "./page.module.css";

const POSTS = [
    {
        slug: "future-of-seo-2024",
        title: "The Future of SEO in 2024: What You Need to Know",
        excerpt: "Discover the latest trends in search engine optimization, from AI-driven search to voice optimization and local SEO strategies.",
        date: "Feb 2, 2024",
        image: "/blog/seo.jpg"
    },
    {
        slug: "social-media-trends",
        title: "Top Social Media Trends Defining the Year",
        excerpt: "Stay ahead of the curve with our analysis of the most impactful social media trends reshaping digital marketing.",
        date: "Jan 28, 2024",
        image: "/blog/social.jpg"
    },
    {
        slug: "content-marketing-guide",
        title: "A Comprehensive Guide to Content Marketing",
        excerpt: "Learn how to build a content machine that drives traffic, generates leads, and establishes your brand as an authority.",
        date: "Jan 15, 2024",
        image: "/blog/content.jpg"
    },
    {
        slug: "email-marketing-roi",
        title: "Maximizing ROI with Personalized Email Marketing",
        excerpt: "Unlock the power of segmentation and personalization to boost open rates and conversions in your email campaigns.",
        date: "Jan 10, 2024",
        image: "/blog/email.jpg"
    },
    {
        slug: "brand-identity-essentials",
        title: "Building a Brand Identity that Lasts",
        excerpt: "Why consistency and storytelling are the foundation of every successful modern brand architecture.",
        date: "Jan 5, 2024",
        image: "/blog/brand.jpg"
    },
    {
        slug: "ai-marketing-future",
        title: "How AI is Revolutionizing Marketing Workflows",
        excerpt: "From automation to predictive analytics, learn how to leverage AI to stay competitive in the market.",
        date: "Jan 2, 2024",
        image: "/blog/marketing-ai.jpg"
    }
];

export default function BlogPage() {
    return (
        <div className={styles.page}>
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Our Insights</h1>
                    <p className={styles.subtitle}>
                        Expert analysis, tips, and strategies to help your business grow in the digital age.
                    </p>
                </div>

                <div className={styles.grid}>
                    {POSTS.map((post) => (
                        <BlogCard
                            key={post.slug}
                            {...post}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
