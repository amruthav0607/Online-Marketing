import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/Button";
import styles from "./page.module.css";
import { BarChart3, Globe, Zap, Users, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className={styles.page}>
      <Hero />

      <section id="services" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Our Expertise</h2>
            <p className={styles.sectionSubtitle}>
              Comprehensive marketing solutions tailored to your business goals.
            </p>
          </div>

          <div className={styles.grid}>
            <ServiceCard
              title="SEO Optimization"
              description="Boost your visibility and rank higher on search engines with our advanced SEO strategies."
              icon={<BarChart3 size={24} />}
            />
            <ServiceCard
              title="Social Media Marketing"
              description="Engage your audience and build a community with curated content and targeted campaigns."
              icon={<Users size={24} />}
            />
            <ServiceCard
              title="Content Strategy"
              description="Compelling storytelling that resonates with your customers and drives conversions."
              icon={<Zap size={24} />}
            />
            <ServiceCard
              title="Paid Advertising"
              description="Maximize ROI with data-backed PPC campaigns across Google, Meta, and LinkedIn."
              icon={<Globe size={24} />}
            />
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.container}>
          <div className={styles.ctaContent}>
            <h2>Ready to Transform Your Digital Presence?</h2>
            <p>Join hundreds of successful brands that trust us with their growth.</p>
            <Button href="/#contact" variant="primary" style={{ marginTop: '2rem' }}>
              Get in Touch <ArrowRight size={16} style={{ marginLeft: '0.5rem' }} />
            </Button>
          </div>
        </div>
      </section>

      <section id="contact" className={styles.section}>
        <div className={styles.container}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>Contact Us</h2>
            <p className={styles.sectionSubtitle}>
              Let&apos;s discuss how we can help your business grow.
            </p>
          </div>
          <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <p style={{ marginBottom: '1rem' }}>
              Reach out to us at <a href="mailto:hello@marketingpro.com" style={{ color: 'var(--primary)' }}>hello@marketingpro.com</a>
            </p>
            <p>
              123 Marketing Street, Design City, DC 20002
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
