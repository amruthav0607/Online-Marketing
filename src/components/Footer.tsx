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
                        <li><Link href="#">SEO Optimization</Link></li>
                        <li><Link href="#">Social Media</Link></li>
                        <li><Link href="#">Content Strategy</Link></li>
                        <li><Link href="#">Paid Advertising</Link></li>
                    </ul>
                </div>
                <div className={styles.column}>
                    <h3>Company</h3>
                    <ul>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Careers</Link></li>
                        <li><Link href="#">Contact</Link></li>
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
