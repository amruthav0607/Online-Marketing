import React from 'react';
import styles from './page.module.css';
import { Briefcase, MapPin, Clock, ArrowRight } from 'lucide-react';
import { Button } from '@/components/Button';

const jobs = [
    {
        title: "Senior SEO Specialist",
        department: "Growth",
        location: "Remote",
        type: "Full-time",
        description: "Lead the technical SEO strategy for high-growth SaaS clients."
    },
    {
        title: "Content Marketing Manager",
        department: "Creative",
        location: "Hybrid (New York)",
        type: "Full-time",
        description: "Craft compelling stories that resonate with diverse audiences across all digital channels."
    },
    {
        title: "Social Media Strategist",
        department: "Social",
        location: "Remote",
        type: "Contract",
        description: "Manage and grow our social presence with innovative viral-ready campaigns."
    },
    {
        title: "Data Analyst",
        department: "Operations",
        location: "Hybrid (London)",
        type: "Full-time",
        description: "Translate complex marketing data into actionable insights for our strategy teams."
    }
];

export default function CareersPage() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                <h1 className={styles.title}>Join Our Team</h1>
                <p className={styles.subtitle}>
                    Work with the brightest minds in the industry to redefine the future of marketing.
                </p>
            </header>

            <div className={styles.jobList}>
                {jobs.map((job, index) => (
                    <div key={index} className={styles.jobCard}>
                        <div className={styles.jobInfo}>
                            <h3>{job.title}</h3>
                            <div className={styles.meta}>
                                <span><Briefcase size={16} /> {job.department}</span>
                                <span><MapPin size={16} /> {job.location}</span>
                                <span><Clock size={16} /> {job.type}</span>
                            </div>
                            <p>{job.description}</p>
                        </div>
                        <Button variant="outline" className={styles.applyBtn}>
                            Apply Now <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
                        </Button>
                    </div>
                ))}
            </div>

            <section className={styles.cta}>
                <h2>Don&apos;t see a perfect fit?</h2>
                <p>We&apos;re always looking for talented individuals. Send us a speculative application!</p>
                <Button href="/contact" variant="primary">
                    General Application
                </Button>
            </section>
        </div>
    );
}
