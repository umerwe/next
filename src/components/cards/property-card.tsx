import { Card } from "@/components/ui/card";
import { propertiesData } from "@/data/properties-data";
import CardHeader from "../card-header";
import CardFooter from "../card-footer";
import CardBody from "../card-body";

export default function PropertyCard() {
  return (
    <div className="grid grid-cols-1 place-items-center min-[490px]:grid-cols-2 md:place-items-start md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-6 p-6">
      {propertiesData.map((property: PropertyCardProps, index) => (
        <Card
          key={index}
          className="w-[290px] min-[490px]:w-[230px] min-[610px]:w-[280px]
          min-[767px]:w-[240px] min-[800px]:w-[250px] min-[950px]:w-[300px]
          min-[1020px]:w-[240px] min-[1150px]:w-[290px] border-0 bg-white 
          shadow-sm hover:shadow-md transition-shadow duration-200"
        >

          <CardHeader
            property={property}
          />

          <CardBody
            property={property}
          />

          <CardFooter
            property={property}
          />
          
        </Card>
      ))}
    </div>
  );
}
