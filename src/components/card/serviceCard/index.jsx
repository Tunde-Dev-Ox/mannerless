import styles from './index.module.scss';
import { motion } from 'framer-motion';

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5 }
    }
};

const ServiceCard = ({ title, description, link, src, alt }) => {
    return (
        <motion.div
            className={styles.service_card}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <div className={styles.service_card__wrapper}>
                <div className={styles.service_contents}>
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                    <button>
                        {link}
                    </button>
                </div>
                <figure>
                    <img src={src} alt={alt} />
                </figure>
            </div>
        </motion.div>
    )
}

export default ServiceCard;