import React from 'react'
import Image from 'next/image'
import styles from './Blog.module.css'

function Blog() {
  return (
    <div className={styles.blog}>
        
        <Image 
            src="/blog1.png"
            alt="blog images"
            width={382}
            height={414}
            className={styles.blogimage}
        />
        <Image 
            src="/blog2.png"
            alt="blog images"
            width={382}
            height={414}
            className={styles.blogimage}
        />
        <Image 
            src="/blog2.png"
            alt="blog images"
            width={382}
            height={414}
            className={styles.blogimage}
        />
    </div>
  )
}

export default Blog