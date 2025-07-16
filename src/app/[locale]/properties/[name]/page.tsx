import { Button } from "@/components/ui/button";
import { propertiesData } from "@/data/properties-data";
import {
  Check,
  ChevronRight,
  MapPin,
  Star,
  AirVent,
  Martini,
  ParkingSquare,
  Utensils,
  Wifi,
} from "lucide-react";
import Image from "next/image";

interface ParamsProps {
  name: string;
}

const Property = async ({ params }: { params: Promise<ParamsProps> }) => {
  const { name } = await params;

  const filteredData = propertiesData.filter(
    (item) => item.title === name
  );

  if (filteredData.length === 0) {
    return (
      <div className="p-10 text-center text-gray-600">
        No property found with name: <b>{name}</b>
      </div>
    );
  }

  const property = filteredData[0];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Tabs */}
      <div className="border-b mb-6">
        <ul className="flex space-x-8 text-gray-700 text-sm font-semibold">
          <li className="border-b-2 border-green-500 text-green-600 pb-2">
            Overview
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            About
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            Rooms
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            Accessibility
          </li>
          <li className="hover:text-green-600 cursor-pointer">
            Policies
          </li>
        </ul>
      </div>

      {/* 2-column layout */}
      <div className="flex flex-col lg:flex-row gap-10 px-6">
        {/* LEFT COLUMN */}
        <div className="w-full lg:w-1/1 flex flex-col gap-4">
          {/* Title + rating + location */}
          <div>
            <h1 className="text-2xl flex items-center gap-2 md:text-3xl font-semibold text-gray-800 mb-1">
              {property.title}
              <div className="flex pt-1.5 gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4.5 h-4.5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
            </h1>
            <div className="text-xs text-gray-600 flex items-center gap-20">
              <div className="flex gap-1 items-center">
                <MapPin
                  color="black"
                  className="w-4 h-4"
                />
                {property.location}
              </div>
              <Button
                variant="link"
                className="p-0 h-auto text-aqua font-semibold cursor-pointer"
              >
                Show on Map
              </Button>
            </div>
          </div>

          {/* Refundable + pay later */}
          <div className="flex flex-wrap space-x-4 text-green-700 text-sm font-medium">
            {property.freeCancellation && (
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 pt-0.5" />
                <span>Fully refundable</span>
              </div>
            )}
            {property.noPrepayment && (
              <div className="flex items-center gap-2">
                <Check className="w-6 h-6 pt-0.5" />
                <span>Reserve now, pay later</span>
              </div>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center space-x-2">
            <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">
              {property.rating.toFixed(1)}
            </span>
            <span className="font-semibold text-gray-700 mr-4">
              Excellent
            </span>
            <span className="text-aqua text-sm flex items-center cursor-pointer">
              <p>
                See all {property.reviewCount} reviews
              </p>
              <ChevronRight className="pt-0.5" />
            </span>
          </div>

          {/* Guests liked */}
          <p className="text-gray-600 text-sm -mt-1.5">
            <b>Guests liked:</b>{" "}
            {property.guestImpressions
              .slice(0, 2)
              .join(", ")}
          </p>

          {/* About this property */}
          <div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">
              About this property
            </h2>
            <p className="text-gray-600 text-sm mb-4 max-w-130">
              <span>{property.title} located in {property.location}</span>
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-sm max-w-140">
              {property.features.map((feature) => {
                let IconComponent;
                switch (feature.toLowerCase()) {
                  case "breakfast available":
                    IconComponent = (
                      <Utensils className="w-5 h-5" />
                    );
                    break;
                  case "parking available":
                    IconComponent = (
                      <ParkingSquare className="w-5 h-5" />
                    );
                    break;
                  case "air conditioning":
                    IconComponent = (
                      <AirVent className="w-5 h-5" />
                    );
                    break;
                  case "bar":
                    IconComponent = (
                      <Martini className="w-5 h-5" />
                    );
                    break;
                  case "free wifi":
                    IconComponent = (
                      <Wifi className="w-5 h-5" />
                    );
                    break;
                  case "housekeeping":
                    IconComponent = (
                      <Check className="w-5 h-5" />
                    );
                    break;
                  default:
                    IconComponent = (
                      <Check className="w-5 h-5" />
                    );
                }
                return (
                  <div
                    key={feature}
                    className="flex items-center space-x-3 max-w-50"
                  >
                    {IconComponent}
                    <span>{feature}</span>
                  </div>
                );
              })}
            </div>
            <Button
              variant="outline"
              className="mt-6 bg-transparent"
            >
              See all about this property
            </Button>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="w-full lg:w-1/2 space-y-8">
          {/* Pricing + actions */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="line-through text-gray-500 text-sm">
                Rs 34,254
              </span>
              <span className="text-2xl font-semibold border-b border-dotted border-gray-400 pb-1 mt-2">
                Rs {property.price * 1000}
              </span>
            </div>
            <Button variant="destructive">
              Cancel Request
            </Button>
          </div>

          {/* Image / map */}
          <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden relative">
            <Image
              src={
                property.images[0] ||
                "/placeholder.svg?height=200&width=400"
              }
              alt={`Map of ${property.location}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Explore the area */}
          <div className="bg-gray-50 p-4 rounded-lg space-y-3">
            <h2 className="text-lg font-semibold text-gray-800">
              Explore the area
            </h2>
            <p className="text-sm font-medium text-gray-800">
              {property.location}
            </p>
            <Button
              variant="link"
              className="p-0 h-auto text-teal-600 text-sm"
            >
              View in a map →
            </Button>

            {property.nearby.map((item) => (
              <div
                key={item.place}
                className="flex items-center justify-between text-sm"
              >
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-gray-700">
                    {item.place}
                  </span>
                </div>
                <span className="text-gray-600">
                  {item.walkTime}
                </span>
              </div>
            ))}
            <Button
              variant="outline"
              className="mt-4 w-full text-teal-600 border-teal-600 hover:bg-teal-50 bg-transparent"
            >
              See all about this area
            </Button>
          </div>
        </div>
      </div>

      {/* Host info */}
      <div className="mt-8 border-t pt-4">
        <h3 className="text-sm text-gray-700 font-medium mb-2">
          Hosted by
        </h3>
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center text-white font-bold">
            {property.host.name[0]}
          </div>
          <div>
            <p className="font-semibold text-gray-800 text-sm">
              {property.host.name}
            </p>
            <p className="text-gray-500 text-xs">
              ⭐ {property.host.rating} (
              {property.host.totalReviews} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
