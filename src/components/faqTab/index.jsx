import { IoIosArrowForward } from "react-icons/io";
import styles from "./index.module.scss";

const FaqTab = ({ question, answer, display, isOpen }) => {
    return (
        <button onClick={display} className={styles.faq_tab}>
            <h1>
                {question}
                <IoIosArrowForward className={isOpen ? styles.arrowopen : ""} />
            </h1>
            <div className={styles.answer_container}>
                {isOpen && <p>{answer}</p>}
            </div>
        </button>
    )
}

export default FaqTab;