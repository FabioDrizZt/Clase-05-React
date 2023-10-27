import Footer from "../components/Footer"
import Header from "../components/Header"
import { Outlet } from 'react-router-dom'

export default function Home() {
  return (
    <div>
      <Header />
      <h1>Bienvenido a mi e-commerce 🛒</h1>
      <Outlet />
      <Footer />
    </div>
  )
}
