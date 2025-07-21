import { Button } from "@/components/ui/button"
import Link from "next/link"
import { getActionDetails } from "@/lib/actions/getAction"

const PricingActions = ({
  property,
}: {
  property: PropertyCardProps | RoomCardProps | AppartmentsCardProps | VehicleCardProps
}) => {
  const { label, link } = getActionDetails(property?.status);

  const originalPrice = (property.price * 1000 * 1.2).toLocaleString();
  const discountedPrice = (property.price * 1000).toLocaleString();

  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-start sm:items-center md:items-start lg:items-center gap-3 md:gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <span className="line-through text-gray-500 text-sm">Rs {originalPrice}</span>
        <span className="text-xl sm:text-2xl font-semibold border-b border-dotted border-gray-400 pb-1">
          Rs {discountedPrice}
        </span>
      </div>
      <Link href={link}>
        <Button variant="destructive" className="w-full sm:w-auto md:w-full lg:w-auto px-7">
          {label}
        </Button>
      </Link>
    </div>
  )
}

export default PricingActions
