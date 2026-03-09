import { useEffect, useState } from "react";
import service from "../assets/503.svg";
import { maintenanceConfig } from "./utils/maintenanceConfig";
const Maintenance = () => {

  const getTargetTime = () => {

  const start = new Date()

  start.setHours(maintenanceConfig.startHour)
  start.setMinutes(maintenanceConfig.startMinute)
  start.setSeconds(0)

  const end = new Date(start.getTime() + maintenanceConfig.durationHours * 60 * 60 * 1000)

  return end.getTime()
}

  const targetDate = getTargetTime();

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [progress, setProgress] = useState(0);

  useEffect(() => {

    const interval = setInterval(() => {

      const now = new Date().getTime();
      const difference = targetDate - now;

      setTimeLeft(calculateTimeLeft());

      const total = 60 * 60 * 1000; // 1 hour
      const passed = total - difference;

      let percentage = Math.floor((passed / total) * 100);

      if (percentage > 100) percentage = 100;

      setProgress(percentage);

    }, 1000);

    return () => clearInterval(interval);

  }, []);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center bg-[#020617] text-white overflow-hidden">

      {/* Background Stars */}
      <div className="absolute w-full h-full">
        <div className="absolute w-2 h-2 bg-white rounded-full animate-ping top-10 left-10"></div>
        <div className="absolute w-3 h-3 bg-blue-300 rounded-full animate-pulse bottom-20 right-20"></div>
        <div className="absolute w-2 h-2 bg-yellow-300 rounded-full animate-bounce top-40 right-40"></div>
      </div>
      <div className="w-72 mx-auto mb-6">
                  <img src={service} alt="404 Not Found" className="w-full h-auto" />
              </div>
      <h1 className="text-5xl text-center font-bold text-orange-400">
        Website Under Maintenance
      </h1>

      <p className="text-gray-400 mt-3">
        Our site will be back at 12:00 AM
      </p>

      {/* Countdown */}
      <div className="flex gap-10 text-3xl font-semibold mt-10">

        <div className="text-center">
          {timeLeft.hours}
          <p className="text-sm text-gray-400">Hours</p>
        </div>

        <div className="text-center">
          {timeLeft.minutes}
          <p className="text-sm text-gray-400">Minutes</p>
        </div>

        <div className="text-center">
          {timeLeft.seconds}
          <p className="text-sm text-gray-400">Seconds</p>
        </div>

      </div>

      {/* Progress Bar */}
      <div className="w-80 h-3 bg-gray-700 rounded-full mt-10 overflow-hidden">

        <div
          className="h-full bg-linear-to-r from-[#FFA500] to-[#E91E1E] transition-all duration-1000"
          style={{ width: `${progress}%` }}
        ></div>

      </div>

      <p className="mt-3 text-sm text-gray-400">
        System Upgrade in Progress
      </p>

    </div>
  );
};

export default Maintenance;