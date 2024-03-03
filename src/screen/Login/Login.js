import React, { useState } from "react";
import logo from "../../assets/logo.png";
import styles from './Login.module.css'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate =  useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    if(password.length >= 6){
        navigate('/home')
    }
    else{
      alert("Passwords must be at least 6 characters")
    }
    
  }
  // console.log(logo)
  return (
    <>
      <div className={styles.loginLogo}>
        <img src={logo} width={90} height={90} alt="logo"></img>
        <h3>We are Electric</h3>
      </div>
      <div >
        <form className={styles.loginForm} onSubmit={submitHandler}>
          <div>
            <input
              className={styles.loginInput}
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
          </div>
          <div>
            <input
            className={styles.loginInput}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
          </div>
          <button type="submit" className={styles.loginBtn}>Login</button>
        </form>
        <h4 className={styles.txt}>Forgot Password ?</h4>
      </div>

      <div>Login</div>
    </>
  );
};

export default Login;
