import PropertyList from "@/components/categories/property-card";
import VehicleList  from "@/components/categories/vehicle-card";

export default function Home() {
  return (
    <div className="mb-40">
      <PropertyList />
      <VehicleList />
    </div>
  );
}
