import React from 'react'
import styles from './EnergySmart.module.css'

function EnergySmart() {
  return (
    <div>
        <div>
            <h1 className={styles.h1}>Monitor Your Home With Grandeur Smart.</h1>
        </div>
        <div>
            <div>
                <h1 className={styles.smarth1}>Your Smart in Charts.</h1>
                <p className={styles.smartp}>Your devices gather a lot of valuable information. Homey Insights 
                   collects this data and beautifully presents it in one place.
                </p>
            </div>
            <div></div>
        </div>
    </div>
  )
}

export default EnergySmart