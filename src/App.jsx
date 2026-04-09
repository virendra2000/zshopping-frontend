import Home from './components/Home'
import About from './components/About'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Contact from './components/Contact'
import Login from './components/Login'
import Register from './components/Register'
import NotFound from './components/ErrorPage'
import AdminLogin from './components/Admin/AdminLogin'
import AdminRoute from './components/Admin/AdminRoute'
import Maintenance from './components/Maintainence'
import { isMaintenanceTime } from './components/utils/maintenanceCheck'
import Products from './components/Products'
import ProductPage from './components/ProductPage'
function App() {
  const maintenanceMode = isMaintenanceTime();

  if (maintenanceMode) {
    return <Maintenance />;
  }
  return (
    <Router>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/register" element={<Register />} />
        <Route path="/products" element={<Products/>}/>
        <Route path="/products/:id" element={<ProductPage/>}/>
        <Route path="/admin" element={<AdminRoute>
          <AdminLogin/>
        </AdminRoute>} />
        <Route path="*" element={<NotFound />} />
    </Routes>
  </Router>
  )
}

export default App