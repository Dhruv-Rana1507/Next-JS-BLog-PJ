import React, { useEffect, useState } from 'react'
import styles from '@/styles/Blog.module.css'
import Link from 'next/link'
const blog = () => {
  const [blogs, setblogs] = useState([]);
  useEffect(()=>{
      console.log("Useefect is running")
      fetch('http://localhost:3000/api/blogs').then((a)=>{
       return a.json();})
       .then(parsed =>{
        setblogs(parsed)
      })
},[])
  


  return (<div className={styles.blog}>
      <main className={styles.main}>

        {blogs.map((blogitem)=>{
          return <div key={blogitem.title}>
        <Link href={`/blogpost/${blogitem.slug}`}>
         <h3 className={styles.title}>{blogitem.title}</h3></Link>
          <p className={styles.content}>{blogitem.content.substr(0,140)}...</p>
          </div>
        })}

    
    
    </main>
  </div>
  )
}

export default blog