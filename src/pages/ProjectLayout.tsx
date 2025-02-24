import { Outlet } from "react-router"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"
import { ToastContainer } from "react-toastify"

export default function ProjectLayout() {
  return (
      <main>
        <ToastContainer />
        <Navbar />
        <Outlet />
        <Footer />
      </main>
  )
}