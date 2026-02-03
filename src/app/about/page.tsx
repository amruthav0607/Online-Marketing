import React from 'react';
import styles from './page.module.css';
import { Target, Users, Heart, Star } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Our Story</h1>
                <p className={styles.subtitle}>
                    Building the future of digital marketing through data, design, and dedication.
                </p>
            </header>

            <section className={styles.section}>
                <div className={styles.imageOverlay}>
                    <div className={styles.glassCard}>
                        <h2>Who We Are</h2>
                        <p>
                            Founded in 2020, MarketingPro emerged from a simple observation: most marketing agencies care about clicks, but few care about growth. Our mission is to bridge the gap between creative design and analytical performance.
                        </p>
                    </div>
                </div>
            </section>

            <div className={styles.grid}>
                <div className={styles.valueCard}>
                    <Target className={styles.icon} />
                    <h3>Our Mission</h3>
                    <p>To empower brands with cutting-edge digital strategies that deliver measurable impact and sustainable growth.</p>
                </div>
                <div className={styles.valueCard}>
                    <Users className={styles.icon} />
                    <h3>The Team</h3>
                    <p>A diverse group of strategists, designers, and data scientists united by a passion for excellence.</p>
                </div>
                <div className={styles.valueCard}>
                    <Heart className={styles.icon} />
                    <h3>Our Values</h3>
                    <p>Integrity, transparency, and relentless innovation are at the core of everything we build.</p>
                </div>
                <div className={styles.valueCard}>
                    <Star className={styles.icon} />
                    <h3>Our Vision</h3>
                    <p>To become the world's most trusted partner for businesses navigating the digital landscape.</p>
                </div>
            </div>
        </div>
    );
}
