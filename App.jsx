import React from 'react'
import { Route ,Routes} from 'react-router-dom'
import About from './pages/about'
import Home from './pages/Home'
import Contact from './pages/contact'

export default function App() {
  return (
    <div>

<>
   <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>



</>

    </div>
  )
}
