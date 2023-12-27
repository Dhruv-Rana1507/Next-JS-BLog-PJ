import React from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blogpost.module.css'
const slug = () => {
    const router = useRouter();
    const {slug} = router.query;
    return (
      <>
      <main className={`${styles.main} }`}>
      <h1>Title of the Post</h1>
      <hr / >
    <div>This is the Post for the {slug}</div>
   </main>
    </>
  )
}

export default slug;