import { appartmentsData } from "@/data/appartments-data";
import { propertiesData } from "@/data/properties-data";
import { roomsData } from "@/data/rooms-data";
import { vehiclesData } from "@/data/vehicles-data";
import MainCard from '@/components/cards/main-card';
import { Metadata } from "next";

const categoryTitles: Record<string, string> = {
  veh341: "Vehicle",
  aprt987: "Apartment",
  prp567: "Property",
  room567: "Room",
};

export async function generateMetadata({ params }: ListingProps): Promise<Metadata> {
  const { category } = await params;
  const title = categoryTitles[category] || "Listing";
  return {
    title: `${title} | AJAR`,
    description: `Details about ${title}`,
  };
}

const CategoryPage = async ({ params }: ListingProps) => {
  const { category } = await params;

  switch (category) {
    case "prp567":
      return (
        <div className="mb-20">
          <MainCard properties={propertiesData} />
        </div>
      );

    case "veh341":
      return (
        <div className="mb-20">
          <MainCard vehicles={vehiclesData} />
        </div>
      );

    case "room567":
      return (
        <div className="mb-20">
          <MainCard rooms={roomsData} />
        </div>
      );

    case "aprt987":
      return (
        <div className="mb-20">
          <MainCard apartments={appartmentsData} />
        </div>
      );

    default:
      return (
        <div className="mb-20 text-center text-gray-600">No data found</div>
      );
  }
};

export default CategoryPage