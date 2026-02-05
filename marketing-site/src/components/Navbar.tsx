'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './Navbar.module.css';
import { Button } from './Button';
import classNames from 'classnames';

export const Navbar = () => {
    const pathname = usePathname();

    return (
        <nav className={styles.navbar}>
            <Link href="/" className={styles.logo}>
                Marketing<span>Pro</span>
            </Link>

            <div className={styles.links}>
                <Link href="/" className={classNames(styles.link, { [styles.active]: pathname === '/' })}>
                    Home
                </Link>
                <Link href="/services" className={styles.link}>
                    Services
                </Link>
                <Link href="/blog" className={classNames(styles.link, { [styles.active]: pathname === '/blog' })}>
                    Blog
                </Link>
                <Button href="/contact" variant="primary" style={{ padding: '0.5rem 1rem', fontSize: '0.875rem' }}>
                    Get Started
                </Button>
            </div>

            <button className={styles.mobileMenuBtn}>
                ☰
            </button>
        </nav>
    );
};
