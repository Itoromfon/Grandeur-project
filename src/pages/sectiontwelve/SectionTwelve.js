import React from 'react'
import styles from './SectionTwelve.module.css'
import Image from 'next/image'
import Blog from '../blog/Blog'

function SectionTwelve() {
  return (
    <div className={styles.blog}>
      <div>
          <h2 className={styles.blogh2}>Latest Blogs</h2>
          <p className={styles.blogp}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, 
          sed diam nonummy nibh euismod tincidunt </p>
      </div>
      <Blog />
    </div>
  )
}

export default SectionTwelve