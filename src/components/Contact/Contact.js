import React from 'react';
import styles from "./Contact.module.css";

const Contact = ({ name, number, onDeleteNumber }) => {
    return (
        <div>
            <span>
                {name}: {number}
            </span>
            <button
                className={styles.buttonDelete}
                type="button"
                onClick={onDeleteNumber}
            >
            DELETE
            </button>
        </div>
    );
};

export default Contact;