import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import StarterPage from './components/StarterPage'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home.js'
import Cities from './components/Cities.js'
import Contact from './components/Contact.js'
import City from './components/City.js'
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  const [className, setClassName] = useState('startscreen')

  useEffect(() => {
    const timer = setTimeout(() => {
      setClassName('invisible')
    }, 2900)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <StarterPage className={className} />
      <Navbar />
      <div className="com-container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/city" element={<City />} />
        </Routes>
      </div>
    </>
  )
}

export default App
