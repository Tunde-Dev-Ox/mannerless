import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { duration: 0.5, ease: "easeOut" }
    }
};

const Hero = () => {
    return (
        <div className={styles.hero}>
            <motion.figure
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                <img src="/ATOiRf10MemXGTGtCbpGGM6jCQ.avif" alt="hero-image" />
            </motion.figure>
            <div className={styles.hero_wrapper}>
                <motion.div
                    className={styles.hero_content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 variants={itemVariants}>
                        <span>Creative thinking.</span><br />Better music.
                    </motion.h1>
                    <motion.p variants={itemVariants}>
                        I work with artists who are ready to move past ideas and create music that stands the test of time.
                    </motion.p>
                    <motion.button variants={itemVariants}>
                        <Link to="/contact">
                           Let's build your record
                        </Link>
                    </motion.button>
                    <motion.span variants={itemVariants}>
                        100+ artists. Real releases.
                    </motion.span>
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;