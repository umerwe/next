import { Button } from "@/components/ui/button";
import { propertiesData } from "@/data/properties-data";
import { Check, ChevronRight, MapPin, Star } from "lucide-react";
import Image from "next/image";

interface ParamsProps {
  name: string;
}

const Property = async ({ params }: { params: ParamsProps }) => {
  const { name } = params;

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
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Top Bar: Navigation Tabs */}
      <div className="border-b mb-6">
        <ul className="flex space-x-8 text-gray-700 text-sm font-semibold">
          <li className="border-b-2 border-green-500 text-green-600 pb-2">
            Overview
          </li>
          <li className="hover:text-green-600 cursor-pointer">About</li>
          <li className="hover:text-green-600 cursor-pointer">Rooms</li>
          <li className="hover:text-green-600 cursor-pointer">
            Accessibility
          </li>
          <li className="hover:text-green-600 cursor-pointer">Policies</li>
        </ul>
      </div>

      {/* Title & Price Row */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div>
          <h1 className="text-2xl flex items-center gap-2 md:text-3xl font-semibold text-gray-800 mb-2">
            {property.title}
            <div className="flex pt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
          </h1>
          <div className="text-sm text-gray-600 flex items-center gap-15">
            <div className="flex gap-1.5 items-center">
              <MapPin color="black" className="w-4 h-4" />
              {property.location}
            </div>
            <Button variant="link" className="p-0 h-auto text-aqua font-semibold">
              Show on Map
            </Button>
          </div>
        </div>
        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <span className="line-through text-gray-400 text-sm">
            Rs 34,254
          </span>
          <span className="text-2xl font-semibold text-green-600">
            Rs {property.price * 1000}
          </span>
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm">
            Cancel Request
          </button>
        </div>
      </div>

      {/* Refundable, Reserve Info */}
      <div className="flex flex-wrap mt-4 space-x-4 text-green-700 text-sm font-medium">
        {property.freeCancellation && (
          <div className="flex items-center gap-2">
            <Check className="w-6 h-6 pt-0.5" />
            <span> Fully refundable</span>
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
      <div className="flex items-center mt-4 space-x-2">
        <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">
          {property.rating.toFixed(1)}
        </span>
        <span className="font-semibold text-gray-700 mr-4">
          Excellent
        </span>
        <span className="text-aqua text-sm flex items-center">
          <p>See all {property.reviewCount} reviews</p>
          <ChevronRight className="pt-0.5" />
        </span>
      </div>

      {/* Guests Liked */}
      <p className="text-gray-600 mt-2 text-sm">
        <b>Guests liked: </b>
        {property.guestImpressions.slice(0, 2).join(", ")}
      </p>

      {/* About Section */}
      <div className="mt-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">
          About this property
        </h2>
        <p className="text-gray-600 text-sm mb-4">
          Beautiful apartment in Geneva offering {property.area} space,
          with {property.beds} beds and {property.baths} baths. Perfect
          for {property.guests} guests.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-gray-700 text-sm">
          {property.features.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Check className="w-5 h-5 text-green-700" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <button className="mt-4 text-green-600 font-semibold text-sm hover:underline">
          See all about this property
        </button>
      </div>

      {/* Nearby Section */}
      <div className="mt-8 flex flex-col md:flex-row md:space-x-8">
        {/* Map */}
        <div className="w-full md:w-1/2 h-60 bg-gray-200 rounded overflow-hidden relative">
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            className="object-cover"
          />
        </div>

        {/* Nearby list */}
        <div className="w-full md:w-1/2 mt-4 md:mt-0">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Explore the area
          </h2>
          {property.nearby.map((item) => (
            <div
              key={item.place}
              className="flex justify-between text-sm text-gray-700 mb-2"
            >
              <span className="flex items-center space-x-2">
                <span>📍</span>
                <span>{item.place}</span>
              </span>
              <span>{item.walkTime}</span>
            </div>
          ))}
          <button className="mt-2 text-green-600 font-semibold text-sm hover:underline">
            See all about this area
          </button>
        </div>
      </div>

      {/* Host Info */}
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
              ⭐ {property.host.rating} ({property.host.totalReviews} reviews)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
