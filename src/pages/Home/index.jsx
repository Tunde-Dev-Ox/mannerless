import Header from "../../components/header";
import Hero from "../../components/hero";
import styles from './index.module.scss';
import ServiceCard from "../../components/card/serviceCard";
import { SERVICE_DATA } from "../../data";
import useWorks from "../../hooks/useWorks";
import WorkCard from "../../components/card/workCard";
import Footer from "../../components/footer";
import { IoIosArrowForward } from "react-icons/io";
import Faq from "../../components/faq";

import { motion } from 'framer-motion';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

import { Link } from "react-router-dom";

import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
    const { works, loading, error } = useWorks();
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace('#', ''));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    }, [hash]);

    return (
        <>
            <Header />
            <main>
                <Hero />
                <section className={styles.home_section} id="services">
                    <div className={styles.home_section__wrapper}>
                        <h1>
                            What I do
                        </h1>
                        <motion.div
                            className={styles.services_card__wrapper}
                            variants={containerVariants}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {SERVICE_DATA.map((item) => (
                                <ServiceCard
                                    title={item.title}
                                    description={item.description}
                                    src={item.img}
                                    link={item.cta}
                                    key={item.title}
                                />
                            ))}
                        </motion.div>
                    </div>
                </section>
                <section className={styles.home_section}>
                    <div className={styles.home_section__wrapper}>
                        <h1>
                            My works
                        </h1>
                        <motion.div
                            className={styles.works_card__wrapper}
                            variants={containerVariants}
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                        >
                            {works.slice(0, 4).map((item) => (
                                <WorkCard
                                    title={item.fields.name}
                                    src={item.fields.image?.fields?.file?.url}
                                    slug={item.fields.slug}
                                    key={item.sys.id}
                                />
                            ))}
                        </motion.div>
                        <div className={styles.view_all__wrapper}>
                            <Link to="/works" className={styles.view_all__btn}>
                                View All
                            </Link>
                        </div>
                    </div>
                </section>
                <section className={styles.about_section}>
                    <div className={styles.about_section__wrapper}>
                        <img src="https://images.unsplash.com/photo-1645043365543-8705252fa404?q=80&w=837&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        <div className={styles.about_section_content}>
                            <h4>
                                "I am JohnBosco Madueke, a music producer and composer. I write music that breaks the status quo."
                            </h4>
                            <Link to="/about">
                                Learn more <IoIosArrowForward />
                            </Link>
                        </div>
                    </div>
                </section>
                <Faq />
                <Footer />
            </main>
        </>
    )
}

export default Home;