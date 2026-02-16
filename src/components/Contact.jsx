import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Navbar from "./Navbar";
import Footer from "./Footer";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
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

    if (!form.message.trim())
      newErrors.message = "Message cannot be empty";

    return newErrors;
  };

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setSuccess(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  return (
    <>
    <Navbar />
    <section className="bg-gray-50 py-20 relative">

      <div className="container mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get in <span className="text-[#E91E1E]">Touch</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Fill out the form below.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-16">

          {/* ================= CONTACT FORM ================= */}
          <div className="bg-white p-10 rounded-3xl shadow-md shadow-slate-500">

            <form onSubmit={handleSubmit} className="space-y-8">

              {/* Floating Input */}
              {["name", "email"].map((field) => (
                <div key={field} className="relative">
                  <input
                    type={field === "email" ? "email" : "text"}
                    name={field}
                    value={form[field]}
                    onChange={handleChange}
                    placeholder=" "
                    className="peer w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#E91E1E]"
                  />
                  <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#E91E1E]">
                    {field === "name" ? "Full Name" : "Email Address"}
                  </label>
                  {errors[field] && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors[field]}
                    </p>
                  )}
                </div>
              ))}

              {/* Textarea */}
              <div className="relative">
                <textarea
                  name="message"
                  rows="4"
                  value={form.message}
                  onChange={handleChange}
                  placeholder=" "
                  className="peer w-full border-b-2 border-gray-300 py-3 focus:outline-none focus:border-[#E91E1E]"
                ></textarea>
                <label className="absolute left-0 top-3 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-4 peer-focus:text-sm peer-focus:text-[#E91E1E]">
                  Your Message
                </label>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-linear-to-r from-[#FFA500] to-[#E91E1E] text-white rounded-lg font-semibold hover:scale-105 transition duration-300"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* ================= CONTACT INFO + MAP ================= */}
          <div className="space-y-8">

            <div className="p-6 bg-white rounded-2xl shadow-lg flex items-start gap-4">
              <FaPhoneAlt className="text-[#E91E1E] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg flex items-start gap-4">
              <FaEnvelope className="text-[#FF7A00] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Email</h4>
                <p className="text-gray-600">support@zshopping.com</p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl shadow-lg flex items-start gap-4">
              <FaMapMarkerAlt className="text-[#FFA500] text-xl mt-1" />
              <div>
                <h4 className="font-semibold text-lg">Location</h4>
                <p className="text-gray-600">Mumbai, India</p>
              </div>
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps?q=Mumbai,India&output=embed"
                width="100%"
                height="250"
                loading="lazy"
              ></iframe>
            </div>

            {/* Social */}
            <div className="flex space-x-6 text-2xl text-gray-600">
              <FaFacebookF className="hover:text-[#E91E1E] cursor-pointer transition" />
              <FaInstagram className="hover:text-[#FF7A00] cursor-pointer transition" />
              <FaTwitter className="hover:text-[#FFA500] cursor-pointer transition" />
            </div>

          </div>
        </div>
      </div>

      {/* ================= SUCCESS POPUP ================= */}
      {success && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white p-10 rounded-3xl shadow-2xl text-center max-w-md">
            <h3 className="text-2xl font-bold mb-4 text-[#E91E1E]">
              Message Sent 🎉
            </h3>
            <p className="text-gray-600 mb-6">
              Thank you for contacting us. We'll get back to you soon!
            </p>
            <button
              onClick={() => setSuccess(false)}
              className="px-6 py-2 bg-[#E91E1E] text-white rounded-full hover:bg-red-600 transition"
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

export default Contact;