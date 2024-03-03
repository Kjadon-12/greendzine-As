import React, { useState } from "react";
import Progress from "../Progress/Progress";
import styles from "./Dashboard.module.css";
const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState([
    { name: " Monday", value: 4 },
    { name: " Tuesday", value: 92 },
    { name: " Wednesday", value: 100 },
    { name: " Thursday", value: 93 },
    { name: " Friday", value: 89 },
    { name: " Saturday", value: 98 },
  ]);
  return (
    <>
      <div className={styles.dashWrapper}>
        <div className={styles.dashboardTitleBox}>
          <h2 className={styles.dashboardTitle}>
            Employee Productivity Dashboard
          </h2>
        </div>
        {dashboardData.map((dash, idx) => (
          <Progress key={idx} name={dash.name} value={dash.value}></Progress>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
