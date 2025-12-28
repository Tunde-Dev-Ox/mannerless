import { Link } from 'react-router-dom';
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

const WorkCard = ({ title, src, alt, slug }) => {
    return (
        <motion.div
            className={styles.work_card}
            variants={itemVariants}
            initial="rest"
            whileHover="hover"
            animate="rest"
        >
            <Link to={`/works/${slug}`} className={styles.work_card__link}>
                <figure className={styles.work_card__image}>
                    <img src={src} alt={alt || title} />
                    <motion.div
                        className={styles.work_card__overlay}
                        variants={{
                            rest: { opacity: 0 },
                            hover: { opacity: 1 }
                        }}
                    />
                </figure>
                <motion.div
                    className={styles.work_card__content}
                    variants={{
                        rest: { y: "100%", opacity: 0 },
                        hover: { y: 0, opacity: 1 }
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                    <h3>{title}</h3>
                </motion.div>
            </Link>
        </motion.div>
    )
}

export default WorkCard;
