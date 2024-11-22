import React, { useState } from "react"
import styles from "../../Styles/AuthPage/Register.module.css"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, email, password,  phoneNo } = formData

    if (!name || !email || !password || !phoneNo) {
      toast.error("All fields are required.")
      return
    }

    setLoading(true)
    try {
      const response = await fetch(
        "http://localhost:5001/api/v1/user/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: name,
            email,
            password,
            phoneNumber: phoneNo,
          }),
        }
      )

      const data = await response.json()

      if (!response.ok) {
        toast.error(data.message || "Registration failed.")
      } else {
        toast.success("Registration successful!")
      }
      // Handle successful registration (e.g., redirect to login page or show success message)
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
          <h2>Create an account</h2>
          <p>Please enter your details to sign up.</p>
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className={styles.input}
            value={formData.name}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="phoneNo"
            placeholder="Enter emergency contact"
            className={styles.input}
            value={formData.phoneNo}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className={styles.input}
            value={formData.password}
            onChange={handleChange}
          />
          <div className={styles.formOptions}>
            <label>
              <input type="checkbox" required /> I agree to the Terms and
              Conditions
            </label>
          </div>
          <button type="submit" className={styles.signUpBtn} disabled={loading}>
            {loading ? "Signing up..." : "Sign up"}
          </button>
        </form>
        <div className={styles.footer}>
          <p>
            Already have an account? <a href="#">Sign in</a>
          </p>
        </div>
      </div>
      {/* ToastContainer positioned at top center */}
      <ToastContainer position="top-center" autoClose={1000} />
    </>
  )
}

export default Register
