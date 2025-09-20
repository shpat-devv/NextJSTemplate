import React from 'react';
import styles from './contact.module.css';

const Form = () => {
    return (
        <div className={styles.container}>
            <div className={styles.formWrapper}>
                <form className={styles.form}>
                    <p className={styles.formHeading}>GET IN TOUCH</p>

                    <div className={styles.formField}>
                        <input required placeholder="Name" className={styles.inputField} type="text" />
                    </div>

                    <div className={styles.formField}>
                        <input required placeholder="Email" className={styles.inputField} type="email" />
                    </div>

                    <div className={styles.formField}>
                        <input required placeholder="Subject" className={styles.inputField} type="text" />
                    </div>

                    <div className={styles.formField}>
                        <textarea required placeholder="Message" rows={4} className={styles.inputField} />
                    </div>

                    <button className={styles.sendMessageBtn}>Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Form;
