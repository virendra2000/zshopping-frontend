import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import loginImg from "../assets/login.png"; // optional side image
import Navbar from "./Navbar";
import Footer from "./Footer";
const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    let newErrors = {};

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    return newErrors;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      alert("Login Successful 🚀");
    }, 1500);
  };

  return (
    <>
    <Navbar />

    <section className="min-h-screen flex">

      {/* LEFT SIDE BRAND SECTION */}
      <div className="hidden md:flex w-1/2 bg-linear-to-br from-[#FFA500] to-[#E91E1E] items-center justify-center text-white p-12">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6">Welcome Back to ZShopping</h2>
          <p className="text-lg">
            Shop smarter, faster, and better with us.
          </p>

          {/* Optional image */}
          <img
            src={loginImg}
            alt="Login"
            className="mt-10 rounded-2xl"
          />
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-gray-50">

        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl">

          <h3 className="text-3xl font-bold mb-8 text-center">
            Login
          </h3>

          <form onSubmit={handleSubmit} className="space-y-8">

            {/* EMAIL */}
            <div className="relative">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#E91E1E]"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#E91E1E]">
                Email Address
              </label>
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email}
                </p>
              )}
            </div>

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={form.password}
                onChange={handleChange}
                placeholder=" "
                className="peer w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#E91E1E]"
              />
              <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#E91E1E]">
                Password
              </label>

              {/* Show/Hide */}
              <div
                className="absolute right-0 top-3 cursor-pointer text-gray-500"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>

              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password}
                </p>
              )}
            </div>

            {/* REMEMBER + FORGOT */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  name="remember"
                  checked={form.remember}
                  onChange={handleChange}
                />
                Remember me
              </label>

              <a href="#" className="text-[#E91E1E] hover:underline">
                Forgot Password?
              </a>
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-linear-to-r from-[#FFA500] to-[#E91E1E] text-white rounded-lg font-semibold hover:scale-105 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-white shadow-lg shadow-slate-400 text-slate-900 rounded-lg font-semibold hover:scale-105 transition duration-300 disabled:opacity-50 cursor-pointer"
            >
              <span className="flex items-center justify-center gap-2">
                <span>Login with Google </span>
                <FcGoogle size={30}/>
              </span>
            </button>
          </form>

          {/* SIGNUP */}
          <p className="text-center mt-6 text-sm">
            Don’t have an account?{" "}
            <a href="/register" className="text-[#E91E1E] font-semibold">
              Sign Up
            </a>
          </p>

        </div>
      </div>

    </section>
    <Footer />
    </>
  );
};

export default Login;