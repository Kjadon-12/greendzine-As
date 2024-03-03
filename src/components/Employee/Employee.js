import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../../assets/searchIcon.svg";
import styles from "./Employee.module.css";
import Card from '../Card/Card'

const Employee = () => {
  const [employeeList, setEmployeeList] = useState([
    { emp_id: 1, name: "Arjun", dob: "12-11-1996", role: "Software-Engineer" },
    { emp_id: 2, name: "Mukesh", dob: "1-11-1998", role: "Web-Developer" },
    { emp_id: 3, name: "Ravi", dob: "12-10-1995", role: "Flutter-Developer" },
    { emp_id: 4, name: "Kavita", dob: "06-11-1994", role: "Tester" },
  ]);
  const [filterData , setFilterData] = useState(employeeList)
  const [searchName , setSearchName] = useState('')
  const submitHandler = (e) =>{
    e.preventDefault();
    const filteredData = employeeList.filter((emp) => emp.name.toLowerCase() === searchName.toLowerCase());
    setFilterData(filteredData);
  }
  return (
    <>
      <div>
        <form className={styles.form} onSubmit={submitHandler}>
          <input
            value={searchName}
            onChange={(e)=>setSearchName(e.target.value)}
            placeholder="Search with name"
            className={styles.search}
          ></input>{" "}
          <button type="submit" className={styles.searchButton}>
            <SearchIcon width={25} height={25}></SearchIcon>
          </button>
        </form>
      </div>
      <div className={styles.cardCont}>
        {filterData.map((emp , idx) => (
            <Card key={idx} employee={emp} num={idx+1}></Card>
        ))}
      </div>
    </>
  );
};

export default Employee;
