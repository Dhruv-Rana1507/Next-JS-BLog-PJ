import Head from 'next/head'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    {/* style jsx used only in same component  */}
  {/* ================================== */}
  {/* <style jsx>
          {`
              
          `}
        </style> */}
{/* ==================================== */}




      <Head>
        <title>Momo Blog </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

        {/* <script src='/try.js    '></script> */}
      </Head>
      
      
      {/* <nav className={styles.mainnav}>
        <ul>
          <Link href='/'><li>Home</li></Link>
          <Link href='/blog'><li>Blog</li></Link>
          <Link href='/about'><li>About</li></Link>
          <Link href='/contact'><li>Contact</li></Link>
          
        </ul>
      </nav> */}
      <main className={`${styles.main} ${inter.className}`}>
        
          {/* the tmp is globaly imported from temp.js  */}
          <h1 className='hding tmp'>
            Hunting Coders
            </h1>
        
        <Image className={styles.myImg} src= "/bj.jpg" width={400} height={266}/>





          
        

        

        <div className="blog ">
          <div className="blogImage ">
            <h3>the blog content
            </h3>
            <h3 >the blog content
            </h3>
            <h3>the blog content
            </h3>
            <h3>the blog content
            </h3>
          </div>
        </div>
      </main>
    </>
  )
}
