import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HiMenuAlt4 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const Nav_Link = [
    {
        index: 1,
        link: "Services",
        route: "/#services"
    },
    {
        index: 2,
        link: "About",
        route: "/about"
    },
    {
        index: 3,
        link: "Work",
        route: "/works"
    },
    {
        index: 4,
        link: "Contact",
        route: "/contact"
    }
]

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Disable scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isOpen]);

    return (
        <header className={`${styles.header} ${isOpen ? styles.open : ''}`}>
            <div className={styles.header_wrapper}>
                <div className={styles.logo}>
                    <span>
                        <Link to="/">Mannerless.</Link>
                    </span>
                </div>

                {/* Desktop Nav */}
                <nav className={styles.desktop_nav}>
                    <ul className={styles.header_nav}>
                        {Nav_Link.map((item) => (
                            <li
                                key={item.index}
                                className={styles.header_nav_link}>
                                {(item.link === "Services" && location.pathname === '/') ? (
                                    <a href="#services">{item.link}</a>
                                ) : (
                                    <Link to={item.route}>
                                        {item.link}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className={styles.cta}>
                    <Link to="/contact">
                        <button>
                            Get in touch
                        </button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <div className={styles.mobile_toggle} onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <IoClose size={30} color="#fff" /> : <HiMenuAlt4 size={30} color="#fff" />}
                </div>

                {/* Mobile Menu Overlay */}
                <div className={`${styles.mobile_menu} ${isOpen ? styles.active : ''}`}>
                    <ul className={styles.mobile_nav_list}>
                        {Nav_Link.map((item) => (
                            <li
                                key={item.index}
                                className={styles.mobile_nav_link}
                                onClick={() => setIsOpen(false)}
                            >
                                {(item.link === "Services" && location.pathname === '/') ? (
                                    <a href="#services">{item.link}</a>
                                ) : (
                                    <Link to={item.route}>
                                        {item.link}
                                    </Link>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header;