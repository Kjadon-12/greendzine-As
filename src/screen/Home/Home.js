import React, { useState } from 'react'
import Footer from '../../components/Footer/Footer'
import styles from './Home.module.css'
import girl from '../../assets/girl.png';
import moptroLogo from '../../assets/moptroLogo.png';
import Dashboard from '../../components/Dashboard/Dashboard';
const Home = () => {
    const [showDashboard , setShowDashboard] = useState(true)
    const handleButtonClick = (buttonType) => {
        // console.log(buttonType)
        // console.log(showDashboard)
        if (buttonType === 'home') {
            setShowDashboard(true);
          } else if (buttonType === 'employee') {
            setShowDashboard(false);
          }
        
      };
  return (
    <>
    <div className={styles.homeWrapper}>
    <div className={styles.homeGirl}>
        <img src={girl} alt='girl' width={40} height={40}></img>
    </div>
    <div className={styles.homeLogo}>
       
        <img src={moptroLogo} alt='logo' width={71} height={70}></img>
        <div className={styles.tag}>4</div>
    </div>
    
    {showDashboard ? (<Dashboard/>) : (<h1 className={styles.heading}>Employee List</h1>)}
    <Footer showDashboard={showDashboard} onButtonClick={handleButtonClick}/>
    </div>
    </>
  )
}

export default Home