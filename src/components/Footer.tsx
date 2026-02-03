import Link from 'next/link';
import styles from './Footer.module.css';

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.content}>
                <div className={styles.column}>
                    <h3>MarketingPro</h3>
                    <p>Elevating brands with data-driven strategies and premium design.</p>
                </div>
                <div className={styles.column}>
                    <h3>Services</h3>
                    <ul>
                        <li><Link href="/services">SEO Optimization</Link></li>
                        <li><Link href="/services">Social Media</Link></li>
                        <li><Link href="/services">Content Strategy</Link></li>
                        <li><Link href="/services">Paid Advertising</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Company</h3>
                    <ul>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/services">About Us</Link></li>
                        <li><Link href="/services">Careers</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Connect</h3>
                    <ul>
                        <li><a href="#">Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div className={styles.bottom}>
                <p>&copy; {new Date().getFullYear()} MarketingPro. All rights reserved.</p>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </footer>
    );
};
