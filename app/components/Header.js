'use client'
import React from 'react'
import styles from '../../styles/Header.module.css'
import { UilUser, UilEnvelope, UilBell } from '@iconscout/react-unicons'
import { useRouter } from 'next/navigation'

const Header = () => {
  const router = useRouter()


  return (
    <div className={styles.header}>
       <p className={styles.pageTitle}>Home</p>
        <div className={styles.left}>
            <UilEnvelope/>
            <div className={styles.bellIconWrapper}>
              <div className={styles.notificationCounter}> 
                  <p>5</p>
              </div>
              <UilBell/>
            </div>
           
            <div className={styles.userWrapper} onClick={() => router.push('/Profile')}>
              <div className={styles.userIconWrapper}>
                  <UilUser size={25}/>
              </div>
              <div className={styles.usernameWrapper}>
                <p className={styles.username}>Jack</p>
                <p>Admin account</p>
              </div>
              
            </div>
            
             
        </div>
    </div>
  )
}

export default Header
