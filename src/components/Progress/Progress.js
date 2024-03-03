import React from "react";
import styles from "./Progress.module.css";
const ProgressBar = ({ value }) => {
  const style = {
    width: `${value}%`,
    background: "#36A54680 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    border: "1px solid #36A546",
    height: "11px",
  };

  return <div style={style}></div>;
};

const Progress = ({ name, value }) => {
  return (
    <>
      <div className={styles.progressDetails}>
        <h3 className={styles.progressTitle}>Productivity on {name}</h3>
        <h3 className={styles.progressText}>{value}%</h3>
      </div>
      <div className={styles.progressBar}>
        <ProgressBar value={value}></ProgressBar>
      </div>
    </>
  );
};

export default Progress;
