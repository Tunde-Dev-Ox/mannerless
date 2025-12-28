import styles from './index.module.scss';
import Header from "../../components/header";
import Footer from "../../components/footer";
import { SKILLS_DATA } from "../../skills_data";

const About = () => {
    return (
        <>
            <Header />
            <main className={styles.about_page}>
                <section className={styles.hero}>
                    <div className={styles.container}>
                        <h1>About Me.</h1>
                        <p className={styles.subtitle}>Music Producer and Composer</p>
                        <figure>
                            <img src="https://images.unsplash.com/photo-1621619054919-167f2fcf135c?q=80&w=1166&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about image 1" />
                        </figure>
                    </div>
                </section>

                <section className={styles.intro}>
                    <div className={styles.container}>
                        <div className={styles.bio}>
                            <h2>Who I Am</h2>
                            <p>
                                I&nbsp;m a dedicated music producer with a deep passion for writing meaningful music and crafting strong compositions that stand the test of time. My work sits at the intersection of creativity and structure — blending emotion, musical theory, and modern production techniques to create records that truly connect with listeners. <br/><br />With a strong background in music production and a solid understanding of how the music industry works, I approach every project with intention and clarity. Whether I&nbsp;m building a track from a simple idea, arranging a full production, or refining a mix, my focus is always on serving the music and the artist&nbsp;s vision. I believe great music is not just heard — it&nbsp;s felt. <br /><br />As a producer, composer, and songwriter, I pay close attention to detail, from melody and harmony to rhythm, texture, and sonic balance. I enjoy shaping raw ideas into fully realized records, ensuring each piece carries its own identity while maintaining a high standard of musical and technical quality. <br /><br />I am a First Class graduate of Music from the University of Lagos, where I developed a strong foundation in music theory, composition, performance, and critical listening. This academic grounding, combined with real-world studio experience, allows me to work confidently across different styles, settings, and creative demands. <br /><br />Above all, I am driven by a genuine love for music and a commitment to excellence. My goal is simple: to create music that lasts, tells a story, and leaves a lasting impression on anyone who listens.
                            </p>
                            <figure>
                                <img src="https://images.unsplash.com/photo-1613418337534-aa921419f75e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="about image 2" />
                            </figure>
                        </div>
                    </div>
                </section>

                <section className={styles.skills}>
                    <div className={styles.container}>
                        <h2>My Skills</h2>
                        <div className={styles.skills_grid}>
                            {SKILLS_DATA.map((skill) => (
                                <div key={skill.id} className={styles.skill_card}>
                                    <div className={styles.icon}>
                                        {skill.icon}
                                    </div>
                                    <h3>{skill.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default About;
