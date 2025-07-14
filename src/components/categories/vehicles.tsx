import { VehicleCard } from "../vehicle-card"
import { carData } from "@/data/car-data"
export function Vehicles() {
  return (
    <div className="grid grid-cols-1 md:px-10 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6 p-6">
      {carData.map((car) => (
        <VehicleCard key={car.id} {...car} />
      ))}
    </div>
  )
}
