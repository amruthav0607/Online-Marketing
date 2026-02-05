import Link from 'next/link';
import Image from 'next/image';
import styles from './BlogCard.module.css';

interface BlogCardProps {
    title: string;
    excerpt: string;
    date: string;
    slug: string;
    image?: string;
}

export const BlogCard = ({ title, excerpt, date, slug, image }: BlogCardProps) => {
    return (
        <article className={styles.card}>
            <div className={styles.imageWrapper}>
                {image ? (
                    <Image src={image} alt={title} fill className={styles.image} />
                ) : (
                    <div style={{ width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--surface-hover), var(--border))' }} />
                )}
            </div>
            <div className={styles.content}>
                <time className={styles.date}>{date}</time>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.excerpt}>{excerpt}</p>
                <Link href={`/blog/${slug}`} className={styles.link}>
                    Read More &rarr;
                </Link>
            </div>
        </article>
    );
};
