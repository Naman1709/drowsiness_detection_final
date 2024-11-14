import React from "react"
import Register from "../components/AuthPage/Register"
import Login from "../components/AuthPage/Login"
import styles from "../Styles/AuthPage/AuthenticationPage.module.css"

const AuthenticationPage = () => {
  return (
    <div className={styles.mainCont}>
      <Register />
      {/* <Login/> */}
    </div>
  )
}

export default AuthenticationPage
