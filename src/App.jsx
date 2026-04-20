import { BrowserRouter, Outlet, Route, Routes, useLocation } from 'react-router-dom'
import Footer from './components/Footer.jsx'
import Navbar from './components/Navbar.jsx'
import WhatsAppButton from './components/WhatsAppButton.jsx'
import { WHATSAPP_URL } from './constants.js'
import About from './pages/About.jsx'
import Courses from './pages/Courses.jsx'
import Experience from './pages/Experience.jsx'
import Home from './pages/Home.jsx'

function Layout() {
  const location = useLocation()

  return (
    <div className="flex min-h-svh flex-col">
      <Navbar />
      <div className="flex min-h-0 w-full flex-1 flex-col">
        <Outlet key={location.pathname} />
      </div>
      <Footer />
      <WhatsAppButton variant="floating" href={WHATSAPP_URL} />
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
