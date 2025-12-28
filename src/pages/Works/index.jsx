import Header from "../../components/header";
import WorkCard from "../../components/card/workCard";
import useWorks from "../../hooks/useWorks";
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import Footer from "../../components/footer";

const Works = () => {
    const { works, loading, error } = useWorks();

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <>
            <Header />
            <main className={styles.works_page}>
                <div className={styles.works_page__header}>
                    <h1>All Works</h1>
                </div>

                <section className={styles.works_page__content}>
                    <motion.div
                        className={styles.works_grid}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {works.map((item) => (
                            <WorkCard
                                title={item.fields.name}
                                src={item.fields.image?.fields?.file?.url}
                                slug={item.fields.slug}
                                key={item.sys.id}
                            />
                        ))}
                    </motion.div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Works;
