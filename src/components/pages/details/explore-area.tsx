import { Button } from '@/components/ui/button'
import { ChevronRight, MapPin } from 'lucide-react'
import Image from 'next/image'

const ExploreArea = ({ property }: { property: PropertyCardProps }) => {
    return (
        <div className='space-y-3'>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800">Explore the area</h2>

            <div className="border-2 border-gray-300 rounded-xl">
                {/* Image / map */}
                <div className="w-full h-40 sm:h-54 md:h-44 lg:h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                    <Image src={property.images[2] || "/placeholder.svg"} fill alt="property-img" className="object-cover" />
                </div>
                <div className="p-3 md:p-4">
                    <p className="text-sm md:text-base font-medium text-gray-800">{property.location}</p>
                    <span className="text-aqua text-sm flex items-center cursor-pointer">
                        <p>View in the map</p>
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                </div>
            </div>
            <div className="p-3 md:p-4 pt-0 rounded-lg space-y-3">
                {property.nearby.map((item) => (
                    <div key={item.place} className="flex items-center justify-between text-sm">
                        <div className="flex items-center space-x-2">
                            <MapPin className="w-4 h-4 text-gray-500 flex-shrink-0" />
                            <span className="text-gray-700 font-medium">{item.place}</span>
                        </div>
                        <span className="text-gray-600 text-xs sm:text-sm whitespace-nowrap">{item.walkTime}</span>
                    </div>
                ))}
                <Button variant="outline" className="w-full md:w-auto">
                    See all about this area
                </Button>
            </div>
        </div>
    )
}

export default ExploreArea
