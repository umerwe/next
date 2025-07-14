import { Card, CardContent } from "@/components/ui/card";
import { Star, Fuel, Settings, Users } from "lucide-react";
import { carData } from "@/data/car-data";
import CardHeader from "../card-header";
import CardFooter from "../card-footer";

export default function VehicleList() {
  return (
    <div className="grid grid-cols-1 place-items-center min-[490px]:grid-cols-2 md:place-items-start md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {carData.map((property: VehicleCardProps) => (
        <Card
          key={property.id}
          className="w-[280px] min-[490px]:w-[230px] min-[610px]:w-[280px]
          min-[767px]:w-[240px] min-[800px]:w-[250px] min-[950px]:w-[300px]
          min-[1020px]:w-[240px] min-[1150px]:w-[270px] border-0 bg-white 
          shadow-sm hover:shadow-md transition-shadow duration-200"
        >
          <CardHeader
            property={property}
          />

          <CardContent className="px-3 -mt-5">
            {/* Title and Rating */}
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-gray-900 text-xl">{property.title}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-header">{property.rating}</span>
                <span className="text-sm text-gray-500 text-header">({property.reviewCount})</span>
              </div>
            </div>

            {/* Category */}
            <p className="text-xs text-gray-custom mb-2">{property.category}</p>

            {/* Specifications */}
            <div className="flex justify-between text-xs font-medium text-gray-custom">
              <div className="flex items-center gap-1">
                <Fuel className="w-4 h-4" />
                <span className="pb-1">{property.fuelCapacity}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Settings className="w-4 h-4" />
                <span className="pb-1">{property.transmission}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Users className="w-4 h-4" />
                <span className="pb-1">{property.capacity}</span>
              </div>
            </div>
          </CardContent>

          <CardFooter
            property={property}
          />
        </Card>
      ))}
    </div>
  );
}
