import { Button } from './Button';
import styles from './Hero.module.css';

export const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.background}>
                <div className={styles.glow} />
            </div>

            <div className={styles.content}>
                <div className={styles.badge}>
                    Digital Excellence Redefined
                </div>

                <h1 className={styles.title}>
                    Elevate Your Brand with Data-Driven Marketing
                </h1>

                <p className={styles.subtitle}>
                    We craft premium digital experiences and strategic campaigns that drive growth, engage audiences, and build lasting brand loyalty.
                </p>

                <div className={styles.actions}>
                    <Button href="/contact" variant="primary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                        Start Your Journey
                    </Button>
                    <Button href="/services" variant="secondary" style={{ padding: '0.875rem 2rem', fontSize: '1rem' }}>
                        Explore Services
                    </Button>
                </div>
            </div>
        </section>
    );
};
