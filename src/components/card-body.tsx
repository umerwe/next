import {
  AirVent,
  Bath,
  BedSingle,
  Check,
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
    <CardContent className="px-2 -mt-5">
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
        {property.freeCancellation  && (
          <li className="flex items-center gap-1">
            <Check className="w-5 h-5 pt-0.5" />
            <span >Free cancellation</span>
          </li>
        )}
        {property.noPrepayment && (
          <li className="flex items-center gap-1">
            <Check className="w-5 h-5 pt-0.5" />
            <span >No prepayment needed – pay at the property</span>
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
