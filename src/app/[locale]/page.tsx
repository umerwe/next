import MainCard from "@/components/cards/main-card";
import { Button } from "@/components/ui/button";
import { appartmentsData } from "@/data/appartments-data";
import { propertiesData } from "@/data/properties-data";
import { roomsData } from "@/data/rooms-data";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="mb-20">
      <MainCard
        isHome={true}
        properties={propertiesData}
        apartments={appartmentsData}
        rooms={roomsData}
      />
      <Link href={'/listing'} className="flex justify-center mt-3">
        <Button variant="destructive">Show more</Button>
      </Link>
    </div>
  );
}
