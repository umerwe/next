import { Button } from "@/components/ui/button"

const PricingActions = ({ property }: { property: PropertyCardProps }) => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row justify-between items-start sm:items-center md:items-start lg:items-center gap-3 md:gap-4">
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
        <span className="line-through text-gray-500 text-sm">
          Rs {(property.price * 1000 * 1.2).toLocaleString()}
        </span>
        <span className="text-xl sm:text-2xl font-semibold border-b border-dotted border-gray-400 pb-1">
          Rs {(property.price * 1000).toLocaleString()}
        </span>
      </div>
      <Button variant="destructive" className="w-full sm:w-auto md:w-full lg:w-auto">
        Cancel Request
      </Button>
    </div>
  )
}

export default PricingActions
