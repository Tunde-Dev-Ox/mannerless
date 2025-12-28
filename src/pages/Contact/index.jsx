import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import styles from './index.module.scss';
import Header from "../../components/header";
import Footer from "../../components/footer";

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully!");
                e.target.reset();
            }, (error) => {
                console.log(error.text);
                alert("Failed to send message, please try again.");
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <>
            <Header />
            <main className={styles.contact_page}>
                <div className={styles.container}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.text_content}>
                            <h1>Get in Touch.</h1>
                            <p>Have a project in mind or just want to say hi? I'd love to hear from you.</p>

                            <div className={styles.contact_info}>
                                <div className={styles.item}>
                                    <h3>Email</h3>
                                    <a href="mailto:hello@mannerless.com">hello@mannerless.com</a>
                                </div>
                                <div className={styles.item}>
                                    <h3>Socials</h3>
                                    <div className={styles.social_links}>
                                        <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                                        <a href="#" target="_blank" rel="noopener noreferrer">Instagram</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <form ref={form} onSubmit={sendEmail} className={styles.contact_form}>
                            <div className={styles.form_group}>
                                <label htmlFor="user_name">Name</label>
                                <input type="text" name="user_name" id="user_name" placeholder="Your Name" required />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="user_email">Email</label>
                                <input type="email" name="user_email" id="user_email" placeholder="your@email.com" required />
                            </div>
                            <div className={styles.form_group}>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" id="message" rows="5" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            <button type="submit" disabled={loading}>
                                {loading ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Contact;