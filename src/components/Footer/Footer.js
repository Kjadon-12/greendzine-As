import React from 'react'
import styles from './Footer.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser  ,faHouse} from '@fortawesome/free-solid-svg-icons';
const Footer = ({showDashboard ,onButtonClick}) => {
  return (
    <>
    <div className={styles.footer}>
    <div onClick={() => onButtonClick('home')} className={showDashboard ? styles.btnActive : ''}><FontAwesomeIcon icon={faHouse} /></div>
    <div onClick={() => onButtonClick('employee')} className={!showDashboard ? `${styles.btnActive}`: ''}><FontAwesomeIcon icon={faUser} /></div>
    
    </div>
    </>
  )
}

export default Footer