import styles from "./index.module.scss";
import { Link } from "react-router-dom";
import { FaApple, FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa";

const Footer = () => {
    const time = new Date();

    return(
        <footer>
            <div className={styles.footer_wrapper}>
                <div className={styles.footer_top__wrapper}>
                    <h2>
                        Listen to me on
                    </h2>
                    <ul>
                        <li>
                            <Link to="/">
                                <FaApple />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaSpotify />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                                <FaYoutube />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footer_bottom__wrapper}>
                    <span className={styles.footer_year}>
                        &copy; {time.getFullYear()}
                    </span>
                    <ul>
                        <li>
                            <Link to="/">
                               <FaYoutube />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                               <FaInstagram />
                            </Link>
                        </li>
                        <li>
                            <Link to="/">
                               <FaTiktok />
                            </Link>
                        </li>
                    </ul>
                    <div className={styles.creator}>
                        <span>
                            Built by <Link to="/">JOT</Link>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;