import {
  AirVent,
  Bath,
  BedSingle,
  Star,
  Wifi,
  Fuel,
  Settings,
  Users,
} from "lucide-react";
import { RectangleGroupIcon } from "@heroicons/react/24/outline";
import { CardContent } from "@/components/ui/card";
import Features from "../features";
import SpecItem from "./spec-item";

const CardBody = ({ property }: DataProps) => {
  const isVehicle = "fuelCapacity" in property;
  const isRoom = "wifi" in property;
  const hasArea = "area" in property;
  const hasLocation = "location" in property;
  const hasBeds = "beds" in property;
  const hasGuests = "guests" in property;
  const hasBaths = "baths" in property;
  const hasFeatures = "freeCancellation" in property;

  return (
    <CardContent className="px-2 -mt-1">
      {/* Title + Rating */}
      <div className="flex items-center justify-between">
        <h3 className="font-semibold text-gray-900 text-md min-[500px]:text-lg sm:text-xl truncate">{property.title}</h3>
        <div className="flex items-center gap-1 text-xs sm:text-sm">
          <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
          <span className="text-header">{property.rating}</span>
          <span className="text-header">({property.reviewCount})</span>
        </div>
      </div>

      {/* Location */}
      {hasLocation && property.category !== "veh341" && (
        <p className="text-xs min-[500px]:text-sm text-[#00CC99] font-medium mb-2 truncate pl-1">
          Location: {property.location}
        </p>
      )}

      {/* Features */}
      {hasFeatures && !isVehicle && (
        <Features
          freeCancellation={property.freeCancellation}
          noPrepayment={property.noPrepayment}
          layout="list"
        />
      )}

      {/* Specs */}
      <div className="flex justify-between text-xs font-medium text-gray-custom mt-2">
        {hasArea && (
          <SpecItem
            icon={<RectangleGroupIcon className="w-3 h-3 sm:w-4 sm:h-4" />}
            text={property.area}
          />
        )}

        {isRoom && (
          <SpecItem
            icon={<Wifi className="w-3 h-3 sm:w-4 sm:h-4" />}
            text={property.wifi ? "WIFI" : "NO"}
          />
        )}

        {hasBeds && (
          <SpecItem
            icon={<BedSingle className="w-3 h-3 sm:w-4 sm:h-4" />}
            text={property.beds}
          />
        )}

        {hasBaths && (
          <SpecItem
            icon={<Bath className="w-3 h-3 sm:w-4 sm:h-4" />}
            text={property.baths}
          />
        )}

        {hasGuests && (
          <SpecItem
            icon={<AirVent className="w-3 h-3 sm:w-4 sm:h-4" />}
            text={property.guests}
          />
        )}

        {/* Vehicle Only */}
        {isVehicle && (
          <div className="w-full -mt-2">
            <p className="text-xs text-gray-custom mb-2">{property.description}</p>

            <div className="flex justify-between text-xs font-medium text-gray-custom">
              <SpecItem
                icon={<Fuel className="w-3 h-3 sm:w-4 sm:h-4" />}
                text={property.fuelCapacity}
              />
              <SpecItem
                icon={<Settings className="w-3 h-3 sm:w-4 sm:h-4" />}
                text={property.transmission}
              />
              <SpecItem
                icon={<Users className="w-3 h-3 sm:w-4 sm:h-4" />}
                text={property.capacity}
              />
            </div>
          </div>
        )}
      </div>
    </CardContent>
  );
};

export default CardBody;
