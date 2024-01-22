import React from 'react'
import styles from "../../styles/Card.module.css"

const Card = ({ title, value}) => {
  return (
    <div className={styles.card}>
        <p className={styles.cardTitle}>{title}</p>
        <p className={styles.cardValue}>{value}</p>
    </div>
  )
}

export default Card
