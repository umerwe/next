import { CardFooter } from './ui/card'
import { Button } from './ui/button'
import Link from 'next/link';
import { useLocale } from 'next-intl';

interface CardBottomProps {
  property: PropertyCardProps | VehicleCardProps | RoomCardProps | AppartmentsCardProps;
}

const CardBottom = ({ property }: CardBottomProps) => {
  const locale = useLocale();
  return (
    <CardFooter className="px-3 pb-2 pt-0 flex justify-between items-center -mt-1.5">
      {/* Price */}
      <div className="flex flex-col">
        <span className="text-lg font-bold text-gray-900">${property.price}.00/</span>
        <span className="text-sm text-gray-custom -mt-1 font-medium">day</span>
      </div>

      {/* View Details Button */}
      <Link locale={locale} href={`${property.category}/${property.id}`}>
        <Button
          variant="outline"
          className="px-4 
              text-xs bg-transparent'>"
        >
          View Details
        </Button>
      </Link>
    </CardFooter>
  )
}

export default CardBottom
