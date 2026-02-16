import { useEffect, useRef, useState } from "react";
import aboutImg from "../assets/about.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
const About = () => {
  const statsRef = useRef(null);
  const [counts, setCounts] = useState({
    users: 0,
    products: 0,
    satisfaction: 0,
    support: 0,
  });

  /* ================= COUNTING ANIMATION ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animateCount("users", 10000, 2000);
          animateCount("products", 500, 2000);
          animateCount("satisfaction", 99, 2000);
          animateCount("support", 24, 2000);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(statsRef.current);
  }, []);

  const animateCount = (key, target, duration) => {
    let start = 0;
    const increment = target / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= target) {
        clearInterval(counter);
        setCounts((prev) => ({ ...prev, [key]: target }));
      } else {
        setCounts((prev) => ({ ...prev, [key]: Math.floor(start) }));
      }
    }, 16);
  };

  /* ================= TESTIMONIAL SLIDER ================= */
  const testimonials = [
    {
      name: "Riya Sharma",
      text: "ZShopping completely changed my online shopping experience!",
    },
    {
      name: "Aman Verma",
      text: "Fast delivery and amazing support. Highly recommended!",
    },
    {
      name: "Priya Singh",
      text: "Quality products at affordable prices. Love it!",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <Navbar />
    <section className="relative overflow-hidden">

      {/* ================= PARALLAX HERO ================= */}
      <div className="relative h-[70vh] flex items-center justify-center text-center text-white parallax-bg">
        <div className="absolute inset-0"></div>
        <div className="relative z-10 max-w-3xl px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About ZShopping
          </h2>
          <p className="text-lg">
            Empowering smart shopping with technology & trust.
          </p>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="py-20 bg-white">

        {/* ABOUT + IMAGE */}
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1">
            <img
              src={aboutImg}
              alt="About"
              className="w-full max-w-lg mx-auto rounded-2xl shadow-2xl"
            />
          </div>

          <div className="flex-1">
            <h3 className="text-3xl font-bold mb-6">
              The Future of Online Shopping
            </h3>
            <p className="text-gray-600 leading-relaxed">
              ZShopping combines innovation with reliability to provide
              seamless online experiences. Our mission is to simplify
              shopping through technology and customer trust.
            </p>
          </div>
        </div>

        {/* ================= STATS ================= */}
        <div
          ref={statsRef}
          className="container mx-auto px-6 mt-20 grid grid-cols-2 md:grid-cols-4 gap-10 text-center"
        >
          <div>
            <h3 className="text-3xl font-bold text-[#E91E1E]">
              {counts.users}+
            </h3>
            <p className="text-gray-600 mt-2">Happy Customers</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#FF7A00]">
              {counts.products}+
            </h3>
            <p className="text-gray-600 mt-2">Products</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#FFA500]">
              {counts.satisfaction}%
            </h3>
            <p className="text-gray-600 mt-2">Satisfaction</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#E91E1E]">
              {counts.support}/7
            </h3>
            <p className="text-gray-600 mt-2">Support</p>
          </div>
        </div>

        {/* ================= TIMELINE ================= */}
        <div className="container mx-auto px-6 mt-24">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our Journey
          </h3>

          <div className="relative border-l-4 border-[#E91E1E] pl-8 space-y-12">
            <div>
              <h4 className="font-semibold text-lg">2022 - Founded</h4>
              <p className="text-gray-600">
                ZShopping started with a mission to simplify online shopping.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2023 - 5K Users</h4>
              <p className="text-gray-600">
                Rapid growth with thousands of happy customers.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-lg">2024 - Expansion</h4>
              <p className="text-gray-600">
                Expanded product categories & nationwide shipping.
              </p>
            </div>
          </div>
        </div>

        {/* ================= TESTIMONIAL ================= */}
        <div className="container mx-auto px-6 mt-24 text-center">
          <h3 className="text-3xl font-bold mb-10">
            What Our Customers Say
          </h3>

          <div className="max-w-2xl mx-auto p-8 shadow-xl rounded-2xl bg-gray-50 transition duration-500">
            <p className="text-gray-700 italic mb-4">
              "{testimonials[index].text}"
            </p>
            <h4 className="font-semibold text-[#E91E1E]">
              - {testimonials[index].name}
            </h4>
          </div>
        </div>

      </div>
    </section>
    <Footer />
    </>
  );
};

export default About;