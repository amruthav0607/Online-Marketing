import React from 'react';
import styles from './page.module.css';
import { BarChart3, Globe, Zap, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/Button';

const services = [
    {
        title: "SEO Optimization",
        description: "Boost your visibility and rank higher on search engines with our advanced SEO strategies. We focus on keyword research, on-page optimization, and high-quality backlink building.",
        icon: <BarChart3 size={32} />,
        features: ["Keyword Strategy", "Technical SEO", "Content Optimization", "Link Building"]
    },
    {
        title: "Social Media Marketing",
        description: "Engage your audience and build a community with curated content and targeted campaigns. We manage your presence across all major platforms to drive brand loyalty.",
        icon: <Users size={32} />,
        features: ["Platform Management", "Content Creation", "Community Engagement", "Social Ads"]
    },
    {
        title: "Content Strategy",
        description: "Compelling storytelling that resonates with your customers and drives conversions. We create content that educates, inspires, and converts.",
        icon: <Zap size={32} />,
        features: ["Blog Strategy", "Copywriting", "Video Content", "Email Marketing"]
    },
    {
        title: "Paid Advertising",
        description: "Maximize ROI with data-backed PPC campaigns across Google, Meta, and LinkedIn. We optimize your spend to ensure you reach the right people at the right time.",
        icon: <Globe size={32} />,
        features: ["Google Ads", "Meta Ads", "LinkedIn Ads", "ROI Tracking"]
    }
];

export default function ServicesPage() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Our Services</h1>
                <p className={styles.subtitle}>
                    Scalable marketing solutions designed to help your business achieve its full potential.
                </p>
            </div>

            <div className={styles.servicesGrid}>
                {services.map((service, index) => (
                    <div key={index} className={styles.serviceCard}>
                        <div className={styles.iconWrapper}>{service.icon}</div>
                        <h2>{service.title}</h2>
                        <p>{service.description}</p>
                        <ul className={styles.features}>
                            {service.features.map((feature, idx) => (
                                <li key={idx}><CheckCircle2 size={16} /> {feature}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className={styles.cta}>
                <h2>Ready to grow your business?</h2>
                <p>Let&apos;s find the right strategy for your unique needs.</p>
                <Button href="/contact" variant="primary">
                    Get a Free Quote <ArrowRight size={18} style={{ marginLeft: '0.5rem' }} />
                </Button>
            </div>
        </div>
    );
}
