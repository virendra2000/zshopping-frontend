import { useEffect, useRef } from "react";
import shoppingimg from '../assets/shopping.png'
import Navbar from "./Navbar";
import Footer from "./Footer";
const Home = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { left, top, width, height } =
        heroRef.current.getBoundingClientRect();

      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;

      heroRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
      heroRef.current.style.setProperty("--mouse-y", `${y * 100}%`);

      // Parallax tilt
      imageRef.current.style.transform = `
        rotateY(${(x - 0.5) * 15}deg)
        rotateX(${(0.5 - y) * 15}deg)
        translateZ(20px)
      `;
    };

    heroRef.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      heroRef.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
    <Navbar/>
    <header
      ref={heroRef}
      className="hero relative m-10 min-h-[65vh] p-5 flex items-center overflow-hidden rounded-lg"
    >
      <div className="container mx-auto px-6 flex flex-col md:flex-row gap-6 items-center justify-between relative z-10">

        {/* LEFT CONTENT */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Welcome to <span className="text-yellow-200">ZShopping</span>
          </h1>

          <p className="text-lg md:text-xl text-white/90 mb-8">
            Your one-stop shop for all your needs!
          </p>

          <a
            href="/products"
            className="glass-btn px-8 py-3 rounded-full font-semibold transition duration-300"
          >
            Shop Now
          </a>
        </div>

        {/* RIGHT IMAGE */}
        <div className="perspective flex items-end h-full">
        <img
            ref={imageRef}
    src={shoppingimg}
    alt="Shopping"
    className="w-full max-w-lg md:max-w-xl object-contain drop-shadow-2xl transition-transform duration-200 -mb-6 md:-mb-10"
  />
</div>
      </div>

      <div className="sparkles"></div>
      <div className="shimmer"></div>
    </header>
    <Footer/>
    </>
  )
}

export default Home;