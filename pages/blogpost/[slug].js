import React ,{useEffect,useState}from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Blogpost.module.css'
const slug = () => {
    const [blog, setBlog] = useState()
  const router = useRouter();
  useEffect(() => {
    if(!router.isReady) return 
          const {slug} = router.query;
          fetch(`http://localhost:3000/api/getblogs?slug=${slug}`).then((a)=>{
            return a.json();})
            .then(parsed =>{
             setBlog(parsed)
             console.log("its coming")
           })
        }, [router.isReady])
        
      
    return (
      <>
      <main className={`${styles.main} }`}>
      <h1 className={styles.title}>{blog && blog.title}</h1>
      <hr style={{ border: '3px dotted #ddd' }} />

    <div className={styles.content}>{blog && blog.content}{slug}
    <br/>
    <br/>
    <hr style={{ border: '3px dotted #ddd' }} />

    < h2 className={styles.author}>Author : = {blog && blog.author}</h2>
    </div>
   </main>
    </>
  )
}

export default slug;