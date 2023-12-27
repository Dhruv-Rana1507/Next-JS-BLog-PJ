import React from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
const blog = () => {
  return (
    <div className="blog ">
      <main className={`${styles.main} }`}>


    <div className={styles.blogImage }>
      <Link href={'/blogpost/mynewblog'}>
      <h3>the blog content
      </h3></Link>
      <h3 >the blog content
      </h3>
      <h3>the blog content
      </h3>
      <h3>the blog content
      </h3>
    </div>
    </main>
  </div>
  )
}

export default blog