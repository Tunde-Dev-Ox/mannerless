import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getWorkBySlug } from '../../services/works';
import Header from '../../components/header';
import styles from './index.module.scss';
import { motion } from 'framer-motion';
import { FaSpotify, FaApple, FaYoutube, FaAmazon, FaSoundcloud, FaHeart } from 'react-icons/fa';
import Footer from '../../components/footer';

const WorkDetails = () => {
    const { slug } = useParams();
    const [work, setWork] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getWorkBySlug(slug).then(item => {
            setWork(item);
            setLoading(false);
        });
    }, [slug]);

    if (loading) return <div className={styles.loading}>Loading...</div>;
    if (!work) return <div className={styles.error}>Work not found</div>;

    const { name, description, image, artist, genre, duration, price, spotify, apple, youtube, amazon, soundcloud, deezer, type, category } = work.fields;
    const imageUrl = image?.fields?.file?.url;
    const year = new Date(work.sys.createdAt).getFullYear();

    return (
        <>
            <Header />
            <main className={styles.detail_page}>
                <div className={styles.detail_container}>
                    {/* Left Column - Image */}
                    <motion.div
                        className={styles.image_section}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <img src={imageUrl} alt={name} />
                    </motion.div>

                    {/* Right Column - Info */}
                    <motion.div
                        className={styles.info_section}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className={styles.tags}>
                            {type && <span className={styles.tag}>{type}</span>}
                            <span className={styles.tag}>{year}</span>
                        </div>

                        <h1 className={styles.title}>{name}</h1>

                        {description && (
                            <p className={styles.description}>
                                {description}
                            </p>
                        )}

                        <div className={styles.listen_now}>
                            <span> LISTEN NOW ► </span>
                        </div>

                        <div className={styles.metadata_table}>
                            <div className={styles.row}>
                                <div className={styles.label}>Artist</div>
                                <div className={styles.value}>{artist}</div>
                            </div>
                            <div className={styles.row}>
                                <div className={styles.label}>Genre</div>
                                <div className={styles.value}>{genre}</div>
                            </div>
                            {duration && (
                                <div className={styles.row}>
                                    <div className={styles.label}>Duration</div>
                                    <div className={styles.value}>{duration}</div>
                                </div>
                            )}
                            {price && (
                                <div className={styles.row}>
                                    <div className={styles.label}>Price</div>
                                    <div className={styles.value}>{price}</div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </div>

                {/* Available On Section */}
                <motion.section
                    className={styles.available_on}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                >
                    <div className={styles.section_title}>
                        <h2>AVAILABLE ON</h2>
                    </div>

                    <div className={styles.platforms_grid}>
                        {apple && <PlatformButton name="Apple Music" icon={<FaApple />} link={apple} />}
                        {spotify && <PlatformButton name="Spotify" icon={<FaSpotify />} link={spotify} />}
                        {youtube && <PlatformButton name="YouTube Music" icon={<FaYoutube />} link={youtube} />}
                        {amazon && <PlatformButton name="Amazon Music" icon={<FaAmazon />} link={amazon} />}
                        {soundcloud && <PlatformButton name="SoundCloud" icon={<FaSoundcloud />} link={soundcloud} />}
                        {deezer && <PlatformButton name="Deezer" icon={<FaHeart />} link={deezer} />}
                    </div>
                </motion.section>
            </main>
            <Footer />
        </>
    );
};

const PlatformButton = ({ name, icon, link }) => (
    <a href={link} target="_blank" rel="noopener noreferrer" className={styles.platform_btn}>
        <span>LISTEN ON {name.toUpperCase()}</span>
        <span className={styles.icon}>{icon}</span>
    </a>
);

export default WorkDetails;
