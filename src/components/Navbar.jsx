import { useState } from "react";
import { PiShoppingCartBold } from "react-icons/pi";
import logo from '../assets/logo_transparent.png'
import { CgMenuRightAlt } from "react-icons/cg";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative w-full bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="/"><div className="text-2xl font-bold text-[#E91E1E]">
            <img src={logo} alt="ZShopping Logo" className="w-50 inline-block mr-2">
            </img>
        </div></a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8 text-gray-700 font-medium">
          <a href="/" className="hover:text-[#E91E1E] transition">Home</a>
          <a href="/products" className="hover:text-[#E91E1E] transition">Products</a>
          <a href="/about" className="hover:text-[#E91E1E] transition">About</a>
          <a href="/contact" className="hover:text-[#E91E1E] transition">Contact</a>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center space-x-6">

          {/* Cart */}
          <div className="relative cursor-pointer text-xl">
            <PiShoppingCartBold size={30}/>
            <span className="absolute -top-2 -right-3 bg-[#E91E1E] text-white text-xs px-2 py-0.5 rounded-full">
              3
            </span>
          </div>

          {/* Login */}
          <a
            href="/login"
            className="btn-primary px-6 py-2 bg-[#E91E1E] text-white rounded-md font-semibold hover:bg-red-600 transition"
          >
            Login
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <CgMenuRightAlt size={30}/>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden absolute top-full right-0 w-50 bg-white px-6 py-6 space-y-4 shadow-xl z-50">
          <a href="/" className="block">Home</a>
          <a href="/products" className="block">Products</a>
          <a href="/about" className="block">About</a>
          <a href="/contact" className="block">Contact</a>
          <a href="/login" className="block">Login</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;