import React from "react"
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom"
import Hero from "./Components/HomePage/Hero"
import DetectionPage from "./Components/DetectionPage"
import HistoryPage from "./Components/HistoryPage"
import UserProfile from "./Components/UserProfile"
import Register from "./components/AuthPage/Register"
import Login from "./components/AuthPage/Login"
import Layout from "./Pages/Layout"

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Hero />} />
        <Route path="/detect" element={<DetectionPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>
    </>
  )
)

const App = () => {
  return <RouterProvider router={router} />
}

export default App