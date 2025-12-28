import styles from "./index.module.scss";
import FaqTab from "../faqTab";
import { FAQ_DATA } from "../../data";
import { useState } from "react";

const Faq = () => {
    const [openFaq, setOpenFaq] = useState(null)
    function handleFaqClick(id) {
        setOpenFaq((prevId) => {
            if (prevId === id) {
                return null
            }
            return id;
        });
    }
    return (
        <div className={styles.faq}>
            <div className={styles.faq_wrapper}>
                <h2>
                    Got questions?
                </h2>
                <div className={styles.faq_tab__wrapper}>
                    {FAQ_DATA.map((item) => (
                        <FaqTab
                            key={item.id}
                            question={item.question}
                            answer={item.answer}
                            isOpen={openFaq === item.id}
                            display={() => handleFaqClick(item.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Faq;