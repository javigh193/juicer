import { Outlet } from "react-router"
import { Footer } from "../components/Footer/Footer"
import { Navbar } from "../components/Navbar/Navbar"

export default function ProjectLayout() {
  return (
      <main>
        <Navbar />
        <Outlet />
        <Footer />
      </main>
  )
}