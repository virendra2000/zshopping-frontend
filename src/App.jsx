import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'

function App() {
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/admin" element={<h1>Restricted Page <br/> Please contact Administrator</h1>} />
        <Route path="*" element={<h1>Restricted Page <br/> Please contact Administrator</h1>} />
    </Routes>
  </Router>
  )
}

export default App