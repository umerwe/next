import { CardFooter } from './ui/card'
import { Button } from './ui/button'

interface CardBottomProps {
  property: PropertyCardProps | VehicleCardProps | RoomCardProps | AppartmentsCardProps;
}

const CardBottom = ({ property }: CardBottomProps) => {
  return (
    <CardFooter className="px-3 pb-6 pt-0 flex justify-between items-center -mt-1.5">
      {/* Price */}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900">${property.price}.00/</span>
        <span className="text-sm text-gray-custom -mt-1 font-medium">day</span>
      </div>

      {/* View Details Button */}
      <Button
        variant="outline"
        className="border-2 text-header rounded-full hover:bg-cyan-50 px-4 
              text-xs bg-transparent border-t-[#01c89b] border-r-[#01c89b] border-b-[#059afc]
           border-l-[#059afc]"
      >
        View Details
      </Button>
    </CardFooter>
  )
}

export default CardBottom
