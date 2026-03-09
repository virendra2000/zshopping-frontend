import { Link } from "react-router-dom";
import errorimage from "../assets/404.svg";
const NotFound = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-[#0f172a] text-white overflow-hidden">

      {/* Floating Particles */}
      <div className="absolute w-full h-full">
        <div className="absolute w-4 h-4 bg-red-400 rounded-full animate-ping top-20 left-10"></div>
        <div className="absolute w-3 h-3 bg-orange-400 rounded-full animate-pulse bottom-20 right-20"></div>
        <div className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-bounce top-40 right-40"></div>
      </div>

      <div className="text-center z-10 px-6">

        {/* Lottie Animation */}
        <div className="w-72 mx-auto mb-6 animate-bounce">
            <img src={errorimage} alt="404 Not Found" className="w-full h-auto" />
        </div>

        <p className="text-lg mt-4 text-gray-300">
          Oops! The page you are looking for is lost in space.
        </p>

        <Link
          to="/"
          className="inline-block mt-6 px-8 py-3 bg-linear-to-r from-[#FFA500] to-[#E91E1E] rounded-lg hover:scale-105 transition"
        >
          Back To Home
        </Link>

      </div>
    </div>
  );
};

export default NotFound;