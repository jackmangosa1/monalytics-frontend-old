'use client'
import React from 'react'
import styles from '../../styles/Sidebar.module.css'
import { UilEstate, UilAnalytics, UilSearch, UilUser, UilStore, UilEnvelope, UilBell } from '@iconscout/react-unicons'
import Image from 'next/image'
import Logo from '../../public/logo.png'
import { useRouter } from 'next/navigation'

const Sidebar = () => {
  const router = useRouter()

  return (
    <div className={styles.sidebar}>
        <header className={styles.sidebarTitle} onClick={() => router.push('/')}>
          <Image src={Logo} height={60} width={180}/>
        </header>
       <ul className={styles.sidebarMain}>
          <li className={`${styles.listItem} ${styles.active}`}>
            <UilEstate size={20}/>
            <p>Home</p>
          </li>
          <li className={styles.listItem}>
            <UilAnalytics/>
            <p>Analysis</p>
          </li>
          <li className={styles.listItem}>
            <UilSearch size={20}/>
            <p>Search Engine</p>
          </li>
          <li className={styles.listItem}>
            <UilUser size={20}/>
            <p>Influencers</p>
          </li>
          <li className={styles.listItem}>
            <UilStore size={20}/>
            <p>Stock</p>
          </li>
            
        </ul>
    </div>
  )
}

export default Sidebar
