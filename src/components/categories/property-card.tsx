import { Card, CardContent } from "@/components/ui/card";
import { Users, BedDouble, Bath, Ruler, Star } from "lucide-react";
import { propertyData } from "@/data/property-data";
import CardHeader from "../card-header";
import CardFooter from "../card-footer";

export default function PropertyList() {
  return (
    <div className="grid grid-cols-1 place-items-center min-[490px]:grid-cols-2 md:place-items-start md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {propertyData.map((property: PropertyCardProps, index) => (
        <Card
          key={index}
          className="w-[280px] min-[490px]:w-[230px] min-[610px]:w-[280px]
          min-[767px]:w-[240px] min-[800px]:w-[250px] min-[950px]:w-[300px]
          min-[1020px]:w-[240px] min-[1150px]:w-[270px] border-0 bg-white 
          shadow-sm hover:shadow-md transition-shadow duration-200"
        >

          <CardHeader
          property = {property}
          />

          <CardContent className="px-3 -mt-5">
            {/* Title and Rating */}
            <div className="flex items-center justify-between mb-1">
              <h3 className="font-semibold text-gray-900 text-xl">{property.title}</h3>
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span className="text-sm text-header">{property.rating}</span>
                <span className="text-sm text-header">({property.reviewCount})</span>
              </div>
            </div>

            {/* Location */}
            <p className="text-sm text-[#00CC99] font-medium mb-2">
              Location: {property.location}
            </p>

            {/* Features */}
            <ul className="text-xs text-[#0E8800] mb-2 space-y-1">
              {property.freeCancellation && (
                <li className="flex items-center gap-1">
                  <span className="font-bold text-black">✔</span> Free cancellation
                </li>
              )}
              {property.noPrepayment && (
                <li className="flex items-center gap-1">
                  <span className="font-bold">✔</span> No prepayment needed – pay at the property
                </li>
              )}
            </ul>

            {/* Specifications */}
            <div className="flex justify-between text-xs font-medium text-gray-custom">
              <div className="flex items-center gap-1">
                <Ruler className="w-4 h-4" />
                <span>{property.area}</span>
              </div>
              <div className="flex items-center gap-1">
                <BedDouble className="w-4 h-4" />
                <span>{property.beds}</span>
              </div>
              <div className="flex items-center gap-1">
                <Bath className="w-4 h-4" />
                <span>{property.baths}</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>{property.guests}</span>
              </div>
            </div>
          </CardContent>

           <CardFooter
          property = {property}
          />
        </Card>
      ))}
    </div>
  );
}
