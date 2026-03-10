import { maintenanceConfig } from "../utils/maintenanceConfig"

export const isMaintenanceTime = () => {

  if (!maintenanceConfig.enabled) return false;

  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const startHour = maintenanceConfig.startHour;
  const endHour = (startHour + maintenanceConfig.durationHours) % 24;

  // Example: start 23, duration 3 → end 2

  if (startHour < endHour) {
    // normal window
    return hour >= startHour && hour < endHour;
  } else {
    // window crosses midnight
    return hour >= startHour || hour < endHour;
  }
}