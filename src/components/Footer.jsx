import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">

      {/* Top Gradient Line */}
      <div className="h-1 w-full bg-linear-to-r from-[#FFA500] via-[#FF7A00] to-[#E91E1E] mb-10"></div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* About */}
        <div>
          <h3 className="text-white text-xl font-semibold mb-4">ZShopping</h3>
          <p className="text-sm leading-relaxed">
            Your one-stop destination for smart shopping. 
            Quality products, best prices, and seamless experience.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/products" className="hover:text-white transition">Products</a></li>
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-white transition">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition">Shipping</a></li>
            <li><a href="#" className="hover:text-white transition">Returns</a></li>
            <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Subscribe</h3>
          <p className="text-sm mb-4">
            Get updates on latest offers & products.
          </p>

          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-l-white border-r-0 rounded-l-md text-slate-100 placeholder:text-slate-100 focus:outline-none"
            />
            <button className="px-4 py-2 bg-[#E91E1E] text-white rounded-r-md hover:bg-red-600 transition">
              Join
            </button>
          </div>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-6 text-lg">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} ZShopping. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;