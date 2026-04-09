import { useCallback, useEffect, useRef, useState } from "react";
import shoppingimg from '../assets/shopping.png'
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import axios from "../axiosConfig";
const Home = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  // axios.default.withCredentials=true;
  const [products,setProducts] = useState([]);
  const [errormsg,setErrorMsg] = useState(false);

  useEffect(() => {
  const handleMouseMove = (e) => {
    if (!heroRef.current || !imageRef.current) return; // ✅ SAFETY

    const { left, top, width, height } =
      heroRef.current.getBoundingClientRect();

    const x = (e.clientX - left) / width;
    const y = (e.clientY - top) / height;

    heroRef.current.style.setProperty("--mouse-x", `${x * 100}%`);
    heroRef.current.style.setProperty("--mouse-y", `${y * 100}%`);

    imageRef.current.style.transform = `
      rotateY(${(x - 0.5) * 15}deg)
      rotateX(${(0.5 - y) * 15}deg)
      translateZ(20px)
    `;
  };

  const hero = heroRef.current;

  if (!hero) return; // ✅ IMPORTANT

  hero.addEventListener("mousemove", handleMouseMove);

  return () => {
    if (hero) {
      hero.removeEventListener("mousemove", handleMouseMove); // ✅ SAFE
    }
  };
}, []);


  const getProducts = useCallback(async () => {
     try {
          const res = await axios.get("/zshopping/api/products");
          const data = res.data;
          setProducts(data);
          setErrorMsg(false);
          if (res.status !== 200) {
            setErrorMsg(true);
          }
        }
        catch(error) {
          console.log(error)
          setErrorMsg(true)
        }
  },[])

  useEffect(() => {
    getProducts();
  },[getProducts]);

  if(errormsg === true) {
    return "Network Error or Server Level Error";
  }

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
    <section className="products flex flex-col gap-2 w-full">
        <span className="px-10 py-5 text-2xl font-bold w-full">All Products</span>

        <div className="px-5 py-5 flex flex-col w-full md:flex-row gap-2 flex-wrap">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
            <div className="p-5 flex flex-col bg-slate-100 shadow-xl shadow-slate-600 rounded-md gap-2">
              <img src={shoppingimg} className="w-52 h-auto"></img>
              <span className="text-xl font-bold">
                {product.name}
              </span>
              <p className="text-gray-500">{product.description}</p>
              <span className="text-lg font-bold text-green-500">&#8377; {product.price}</span>

              <button
                className={`cart-btn py-2 cursor-pointer bg-green-500 text-slate-100 rounded-md ${!product.available ? "disabled-btn bg-red-500" : ""}`}
                disabled={!product.available}
              >
                {product.available ? "Add to cart" : "Out of Stock"}
              </button>
            </div>
            </Link>
            ))}
        </div>
    </section>

    <Footer/>
    </>
  )
}

export default Home;