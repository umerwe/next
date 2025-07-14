import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, Star, Fuel, Settings, Users } from "lucide-react"

export function VehicleCard({
  image,
  title,
  rating,
  reviewCount,
  category,
  fuelCapacity,
  transmission,
  capacity,
  price,
  isGuestFavorite = true,
}: CarCardProps) {
  return (
    <Card className="w-[285px] border-0 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <CardHeader className="p-0 relative">
        {/* Guest Favorite Badge and Heart Icon */}
        <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
          <div>
            {isGuestFavorite && (
              <div className="bg-white/90 backdrop-blur-sm px-3 rounded-full pb-1">
                <span className="text-xs font-semibold">Guest favorite</span>
              </div>
            )}
          </div>
          <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
            <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
          </button>
        </div>


        {/* Car Image */}
        <div className="bg-gray-50 rounded-t-lg p-1.5 h-64 flex items-center justify-center overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            width={200}
            height={190}
            alt={title}
            className="object-cover w-full h-full rounded-xl"
          />
        </div>
      </CardHeader>

      <CardContent className="px-3 -mt-5">
        {/* Title and Rating */}
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900 text-xl">{title}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-header">{rating}</span>
            <span className="text-sm text-gray-500 text-header">({reviewCount})</span>
          </div>
        </div>

        {/* Category */}
        <p className="text-xs text-gray-custom mb-2">{category}</p>

        {/* Specifications */}
        <div className="flex justify-between text-xs font-medium text-gray-custom">
          <div className="flex items-center gap-1">
            <Fuel className="w-4 h-4" />
            <span className="pb-1">{fuelCapacity}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Settings className="w-4 h-4" />
            <span className="pb-1">{transmission}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Users className="w-4 h-4" />
            <span className="pb-1">{capacity}</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="px-3 pb-6 pt-0 flex justify-between items-center -mt-1.5">
        {/* Price */}
        <div className="flex flex-col">
          <span className="text-lg font-bold text-gray-900">${price}.00/</span>
          <span className="text-sm text-gray-custom -mt-1 font-medium">day</span>
        </div>

        {/* View Details Button */}
        <Button
        variant="outline"
          className="border-1 border-header text-header rounded-full hover:bg-cyan-50 hover:border-cyan-500 px-6 bg-transparent"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  )
}
