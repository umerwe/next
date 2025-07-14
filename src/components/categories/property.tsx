import { PropertyCard } from "@/components/property-card";
import { propertyData } from "@/data/property-data";

export function Properties() {
  return (
    <div className="grid grid-cols-1 place-items-center min-[490px]:grid-cols-2 md:place-items-start md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {propertyData.map((property, index) => (
        <PropertyCard key={index} {...property} />
      ))}
    </div>
  );
}

export default Properties;