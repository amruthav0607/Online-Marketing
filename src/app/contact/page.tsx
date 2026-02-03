"use client";

import React, { useState } from 'react';
import styles from './page.module.css';
import { Button } from '@/components/Button';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function ContactPage() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Simulate sending (replace with actual API call later)
        await new Promise(resolve => setTimeout(resolve, 1000));

        setIsSubmitted(true);
    };

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <h1 className={styles.title}>Get in Touch</h1>
                <p className={styles.subtitle}>
                    Have a project in mind? Let&apos;s discuss how we can help your brand grow.
                </p>
            </div>

            <div className={styles.content}>
                <div className={styles.contactInfo}>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><Mail size={24} /></div>
                        <div>
                            <h3>Email Us</h3>
                            <p>hello@marketingpro.com</p>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><Phone size={24} /></div>
                        <div>
                            <h3>Call Us</h3>
                            <p>+1 (555) 000-0000</p>
                        </div>
                    </div>
                    <div className={styles.infoCard}>
                        <div className={styles.infoIcon}><MapPin size={24} /></div>
                        <div>
                            <h3>Visit Us</h3>
                            <p>123 Marketing Street, Design City, DC 20002</p>
                        </div>
                    </div>
                </div>

                {isSubmitted ? (
                    <div className={styles.successMessage}>
                        <CheckCircle size={48} className={styles.successIcon} />
                        <h2>Thank You!</h2>
                        <p>Your message has been sent successfully. We&apos;ll get back to you within 24 hours.</p>
                        <Button variant="secondary" onClick={() => setIsSubmitted(false)}>
                            Send Another Message
                        </Button>
                    </div>
                ) : (
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <div className={styles.formGroup}>
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" placeholder="John Doe" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="company">Company Name</label>
                            <input type="text" id="company" placeholder="Your Company" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" placeholder="john@example.com" />
                        </div>
                        <div className={styles.formGroup}>
                            <label htmlFor="message">Your Message</label>
                            <textarea id="message" rows={5} placeholder="Tell us about your project..."></textarea>
                        </div>
                        <Button variant="primary" fullWidth style={{ marginTop: '1rem' }}>
                            Send Message <Send size={16} style={{ marginLeft: '0.5rem' }} />
                        </Button>
                    </form>
                )}
            </div>
        </div>
    );
}
