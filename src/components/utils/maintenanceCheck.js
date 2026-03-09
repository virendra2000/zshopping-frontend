import { maintenanceConfig } from "../utils/maintenanceConfig"

export const isMaintenanceTime = () => {

  if(!maintenanceConfig.enabled) return false

  const now = new Date()

  const start = new Date()
  start.setHours(maintenanceConfig.startHour)
  start.setMinutes(maintenanceConfig.startMinute)
  start.setSeconds(0)

  const end = new Date(start.getTime() + maintenanceConfig.durationHours * 60 * 60 * 1000)

  return now >= start && now <= end
}