import React from 'react'
import styles from './SectionNine.module.css'

function SectionNine() {
  return (
    <div className={styles.privacy}>
        <h1 className={styles.privacyh1}>Privacy woven into the design. Security built to last.</h1>
        <div className={styles.maindiv}>
            <div className={styles.privacydiv}>
                <div className={styles.numbers}>
                    <p className={styles.numbersp}>1</p>
                </div>
                <div>
                    <p className={styles.datap}>Your data remains private with us.</p>
                    <p className={styles.datap2}>We don’t sell data nor serve ads. Your data is yours. Always.</p>
                </div>
            </div>
            <div className={styles.privacydiv}>
                <div className={styles.numbers}>
                    <p className={styles.numbersp}>2</p>
                </div>
                <div>
                    <p className={styles.datap}>External threat are kept out.</p>
                    <p className={styles.datap2}>Contained applications, vulnerability testing, and bug bounty initiatives strengthen your home’s safety.</p>
                </div>
            </div>
            <div className={styles.privacydiv}>
                <div className={styles.numbers}>
                    <p className={styles.numbersp}>3</p>
                </div>
                <div>
                    <p className={styles.datap}>A genuine purchase, nothing more.</p>
                    <p className={styles.datap2}>Charging you motivates us to deliver the best product possible. It’s as straightforward as that..</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SectionNine