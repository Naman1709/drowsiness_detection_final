import React, { useState } from "react"
import styles from "../../Styles/AuthPage/Login.module.css"
import { FcGoogle } from "react-icons/fc"
import { FaFacebook } from "react-icons/fa"
import { ToastContainer, toast } from "react-toastify" // Import Toastify
import "react-toastify/dist/ReactToastify.css" // Import Toastify styles

const LoginForm = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { username, email, password } = credentials

    if (!username?.trim() || !email?.trim() || !password?.trim()) {
      toast.error("Enter Valid Credentials")
      return
    }

    setLoading(true)
    try {
      const response = await fetch("http://localhost:3000/api/v1/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({ username, email, password }),
      })

      const data = await response.json()
      if (!response.ok) {
        toast.error(data.message || "Login failed.")
      } else {
        toast.success("Login successful!")
      }

      // Handle successful login (e.g., redirect, store token, etc.)
    } catch (error) {
      toast.error(error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Welcome back</h2>
          <p>Please enter your details to sign in.</p>
        </div>
        <div className={styles.socialButtons}>
          <button className={styles.googleBtn}>
            <FcGoogle className={styles.socialIcon} />
            Google
          </button>
          <button className={styles.facebookBtn}>
            <FaFacebook className={styles.socialIcon} />
            Facebook
          </button>
        </div>
        <p className={styles.orText}>or</p>
        <form className={styles.form} onSubmit={handleSubmit}>
          {loading && <p>Loading...</p>}
          <input
            type="text"
            name="username"
            placeholder="Username"
            className={styles.input}
            value={credentials.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            value={credentials.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={credentials.password}
            onChange={handleChange}
          />
          <div className={styles.formOptions}>
            <label>
              <input type="checkbox" /> Remember for 30 days
            </label>
            <a href="#" className={styles.forgotPassword}>
              Forgot password
            </a>
          </div>
          <button type="submit" className={styles.signInBtn} disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>
        <div className={styles.footer}>
          <p>
            Don’t have an account? <a href="#">Create account</a>
          </p>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  )
}

export default LoginForm
