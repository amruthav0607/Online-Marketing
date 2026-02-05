import styles from './ServiceCard.module.css';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

export const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
    return (
        <div className={styles.card}>
            <div className={styles.icon}>
                {icon}
            </div>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.description}>{description}</p>
        </div>
    );
};
