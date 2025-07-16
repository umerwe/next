import {
  AirVent,
  Bath,
  BedSingle,
  Star,
  Wifi
} from "lucide-react";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { CardContent } from "./ui/card";

interface CardBodyProps {
  property: PropertyCardProps | AppartmentsCardProps | RoomCardProps;
}

const CardBody = ({ property }: CardBodyProps) => {
  const isRoom = "wifi" in property;
  const hasArea = "area" in property;

  return (
    <CardContent className="px-3 -mt-5">
      {/* Title and Rating */}
      <div className="flex items-center justify-between mb-1">
        <h3 className="font-semibold text-gray-900 text-xl truncate">{property.title}</h3>
        <div className="flex items-center gap-1">
          <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-sm text-header">{property.rating}</span>
          <span className="text-sm text-header">({property.reviewCount})</span>
        </div>
      </div>

      {/* Location */}
      <p className="text-sm text-[#00CC99] font-medium mb-2 truncate">
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
        {/* Show Area only if present */}
        {hasArea && (
          <div className="flex items-center gap-1">
            <RectangleGroupIcon className="w-4 h-4" />
            <span>{(property as PropertyCardProps | AppartmentsCardProps).area}</span>
          </div>
        )}

        {/* Show WIFI only for rooms */}
        {isRoom && (
          <div className="flex items-center gap-1">
            <Wifi className="w-4 h-4" />
            <span className="pb-1">{(property as RoomCardProps).wifi ? "WIFI" : "NO"}</span>
          </div>
        )}

        <div className="flex items-center gap-1">
          <BedSingle className="w-4 h-4" />
          <span>{property.beds}</span>
        </div>
        <div className="flex items-center gap-1">
          <Bath className="w-4 h-4" />
          <span>{property.baths}</span>
        </div>
        <div className="flex items-center gap-1">
          <AirVent className="w-4 h-4" />
          <span>{property.guests}</span>
        </div>
      </div>
    </CardContent>
  );
};

export default CardBody;
