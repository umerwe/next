import { Card } from "@/components/ui/card";
import CardHeader from "./card-header";
import CardFooter from "./card-footer";
import CardBody from "./card-body";
import { Button } from "../ui/button";

interface MainCardProps {
  properties?: PropertyCardProps[];
  vehicles?: VehicleCardProps[];
  rooms?: RoomCardProps[];
  apartments?: AppartmentsCardProps[];
  isHome?: boolean;
  isAll?: boolean;
}

const MainCard = ({ properties, vehicles, rooms, apartments, isHome, isAll }: MainCardProps) => {
  let data: (
    PropertyCardProps | VehicleCardProps | RoomCardProps | AppartmentsCardProps
  )[] = [];

  if (isHome || isAll) {
    if (properties) data.push(...properties.slice(0, 2));
    if (rooms) data.push(...rooms.slice(0, 4));
    if (apartments) data.push(...apartments.slice(0, 2));
  } else {
    data = properties || vehicles || rooms || apartments || [];
  }

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 p-4 w-full">
        {data.map((property, index) => (
          <Card
            key={index}
            className="w-full sm:max-w-[320px] mx-auto  border-0 bg-white 
            shadow-sm hover:shadow-md transition-shadow duration-200 pb-0"
          >
            <div className={`flex sm:block items-center min-[500px]:gap-2`}>
              <div className="w-[40%] min:[500px]:w-[35%] sm:w-full">
                <CardHeader property={property} />
              </div>
              <div className="flex flex-col sm:mt-0 gap-2 w-[60%] min:[500px]:w-[65%] sm:w-full">
                <CardBody property={property} />
                <CardFooter property={property} />
              </div>
            </div>


          </Card>
        ))}
      </div>
      {!isHome && (
        <div className="flex justify-center mt-4 mb-10">
          <Button variant="destructive">Show more</Button>
        </div>
      )}
    </div>
  );
};

export default MainCard;