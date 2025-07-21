import { ChevronRight } from "lucide-react"

const Rating = ({ property }: DataProps) => {
    return (
        <div className="flex flex-row sm:items-center gap-2 sm:gap-2">
            <div className="flex items-center space-x-2">
                <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">{property.rating.toFixed(1)}</span>
                <span className="font-semibold text-gray-700">Excellent</span>
            </div>
            <span className="text-aqua text-sm flex items-center cursor-pointer">
                <p>See all {property.reviewCount} reviews</p>
                <ChevronRight className="w-4 h-4 ml-1" />
            </span>
        </div>
    )
}

export default Rating
