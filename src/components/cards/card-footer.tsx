import { CardFooter } from '../ui/card'
import { Button } from '../ui/button'
import Link from 'next/link';

const CardBottom = ({ property }: DataProps) => {
  return (
    <CardFooter className="px-3 pb-2 pt-0 flex justify-between items-center mt-2">
      <div className="flex flex-col">
        <span className="text-sm sm:text-lg font-bold text-gray-900">${property.price}.00/</span>
        <span className="text-sm text-gray-custom -mt-1 font-medium">day</span>
      </div>

      <Link href={`/listing/${property.category}/${property.id}`}>
        <Button
          variant="outline"
          className="px-2 min:[500px]:px-4
              text-xs bg-transparent'>"
        >
          View Details
        </Button>
      </Link>
    </CardFooter>
  )
}

export default CardBottom
