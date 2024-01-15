'use client'
import React from 'react'
import Header from '../components/Header'
import styles from '../../styles/Profile.module.css'
import Sidebar from '../components/Sidebar'
import { useState } from 'react'

const page = () => {

  const [formData, setFormData]= useState({
    country:'',
    city:'',
    socialMedia1:'',
    socialMedia2:'',
    socialMedia3:'',

  });

  const handleChange = (e) =>{
      const {name, value} = e.target
      setFormData({
        ...formData,
        [name]: value,
      })
  }

  const handleFormSubmission = (e) =>{
    e.preventDefault();

  }

  return (
      <form onSubmit={handleFormSubmission} className={styles.container}>
        <div className={styles.line}>
          <div className={styles.row}>
            <label for="country" className={styles.label}>Country</label>
            <input type="text" className={styles.input} name='contry' id='country'  value={formData.country} onChange={handleChange} />
          </div>
          
          <div className={styles.row}>
            <label for="city"  className={styles.label}>City</label>
            <input type="text" className={styles.input} name='city' id='city'  value={formData.city} onChange={handleChange} />
          </div>
        </div>

        <div className={styles.line}>
          <div className={styles.row}>
            <label for="socialMedia1"  className={styles.label}>Social Media1</label>
            <input type="text" className={styles.input}  name='socialMedia1' id='socialMedia1'  value={formData.socialMedia1} onChange={handleChange} />
          </div>

          <div className={styles.row}>
            <label for="socialMedia2"  className={styles.label}>Social Media2</label>
            <input type="text" className={styles.input}  name='socialMedia2' id='socialMedia2'  value={formData.socialMedia2} onChange={handleChange} />
          </div>
        </div>
        <div className={styles.row}>
          <label for="socialMedia3" className={styles.label}>Social Media3</label>
          <input type="text" className={styles.input}  name='socialMedia3' id='socialMedia3'  value={formData.socialMedia3} onChange={handleChange} />
        </div>
       

        <button className={styles.submitButton} >Update Profile</button>
      </form>
  )
}

export default page
