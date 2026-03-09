import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import Navbar from "./Navbar";
import Footer from "./Footer";
import registerImg from "../assets/login.png"; // reuse image if needed

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [success, setSuccess] = useState(false);

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  /* ================= VALIDATION ================= */
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!form.password) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Minimum 6 characters required";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
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
    setSuccess(true);
    setForm({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  /* ================= GOOGLE SIGNUP ================= */
  const handleGoogleSuccess = (credentialResponse) => {
    const decoded = jwtDecode(credentialResponse.credential);
    alert(`Welcome ${decoded.name} 🎉`);
  };

  return (
    <>
    <Navbar />
    <section className="min-h-screen flex">

      {/* LEFT SIDE */}
      <div className="hidden md:flex w-1/2 bg-linear-to-br from-[#FFA500] to-[#E91E1E] items-center justify-center text-white p-12">
        <div className="max-w-md">
          <h2 className="text-4xl font-bold mb-6">
            Join ZShopping Today
          </h2>
          <p className="text-lg">
            Create your account and start shopping smarter.
          </p>
          <img
            src={registerImg}
            alt="Register"
            className="mt-10 rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* RIGHT SIDE FORM */}
      <div className="flex w-full md:w-1/2 items-center justify-center p-8 bg-gray-50">

        <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl">

          <h3 className="text-3xl font-bold mb-8 text-center">
            Create Account
          </h3>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name}</p>
            )}

            {/* EMAIL */}
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full border px-4 py-3 rounded-lg"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}

            {/* PASSWORD */}
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
              />
              <div
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password}</p>
            )}

            {/* CONFIRM PASSWORD */}
            <div className="relative">
              <input
                type={showConfirm ? "text" : "password"}
                name="confirmPassword"
                placeholder="Confirm Password"
                value={form.confirmPassword}
                onChange={handleChange}
                className="w-full border px-4 py-3 rounded-lg"
              />
              <div
                className="absolute right-4 top-3 cursor-pointer"
                onClick={() => setShowConfirm(!showConfirm)}
              >
                {showConfirm ? <FaEyeSlash /> : <FaEye />}
              </div>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-[#FFA500] to-[#E91E1E] text-white rounded-lg font-semibold hover:scale-105 transition"
            >
              Register
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex grow border-t"></div>
            <span className="mx-4 text-gray-400 text-sm">OR</span>
            <div className="flex grow border-t"></div>
          </div>

          {/* Google Signup */}
          <div className="flex justify-center">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={() => console.log("Google Signup Failed")}
            />
          </div>

          {/* Login Link */}
          <p className="text-center mt-6 text-sm">
            Already have an account?{" "}
            <a href="/user/login" className="text-[#E91E1E] font-semibold">
              Login
            </a>
          </p>

        </div>
      </div>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center">
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-[#E91E1E]">
              Registration Successful 🎉
            </h3>
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-2 bg-[#E91E1E] text-white rounded-full"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
    <Footer />
    </>
  );
};

export default Register;