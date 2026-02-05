import Link from 'next/link';
import styles from './page.module.css';
import { ArrowLeft } from 'lucide-react';

interface BlogPostPageProps {
    params: {
        slug: string;
    };
}

const getPost = (_slug: string) => {
    return {
        title: "The Future of SEO in 2024: What You Need to Know",
        date: "Feb 2, 2024",
        category: "SEO",
        content: `
      <p>Search engine optimization (SEO) is constantly evolving, and 2024 is shaping up to be a pivotal year. With the rise of artificial intelligence and machine learning, the way search engines rank content is changing faster than ever.</p>
      
      <h3>AI and Search</h3>
      <p>Google's integration of generative AI into search results (SGE) means that content creators need to focus more on unique value and less on generic information. It's no longer enough to just answer a question; you need to provide depth, context, and a unique perspective.</p>
      
      <h3>Voice Search Optimization</h3>
      <p>As smart speakers and voice assistants become more prevalent, optimizing for conversational queries is crucial. This means targeting long-tail keywords and structuring content in a way that directly answers specific questions.</p>
      
      <h3>User Experience (UX) is Key</h3>
      <p>Core Web Vitals are more important than ever. Fast loading times, mobile responsiveness, and a stable visual layout are prerequisites for ranking well. Google wants to send users to sites that provide a great experience.</p>
    `,
        image: "/blog/seo.jpg"
    };
};

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const post = getPost(params.slug);

    return (
        <article className={styles.article}>
            <header className={styles.header}>
                <div className={styles.meta}>
                    <span className={styles.category}>{post.category}</span>
                    <span className={styles.dot}>•</span>
                    <time className={styles.date}>{post.date}</time>
                </div>
                <h1 className={styles.title}>{post.title}</h1>
            </header>

            <div className={styles.imageWrapper}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--surface-hover), var(--border))' }} />
            </div>

            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <Link href="/blog" className={styles.backLink}>
                <ArrowLeft size={20} /> Back to Blog
            </Link>
        </article>
    );
}
