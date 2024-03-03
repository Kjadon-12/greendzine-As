import React from 'react'
import styles from './Card.module.css'
const Card = ({employee , num}) => {
    // console.log(employee)
    // console.log(num)
  return (
    <>
    <div className={`${styles.cardWrapper} ${(num%2 === 0) ? styles.leftCard : styles.rigthCard}`}>
       <div className={styles.cardDetail}>
        <div className={styles.cardRow}>
            <div className={styles.cardRowTitle}>EMP ID :</div>
            <div className={styles.cardRowW}>{employee.emp_id}</div>
        </div>
        <div className={styles.cardRow}>
            <div className={styles.cardRowTitle}>Name :</div>
            <div className={styles.cardRowW}>{employee.name}</div>
        </div>
        <div className={styles.cardRow}>
            <div className={styles.cardRowTitle}>DOB :</div>
            <div className={styles.cardRowO}>{employee.dob}</div>
        </div>
        <div className={styles.cardRow}>
            <div className={styles.cardRowTitle}>Role :</div>
            <div className={styles.cardRowG}>{employee.role}</div>
        </div>
        
       </div>
       <div className={styles.tag}>{num}</div>

    </div>
    
    </>
  )
}

export default Card