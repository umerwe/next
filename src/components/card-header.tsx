import Image from 'next/image'
import { CardHeader } from "@/components/ui/card";
import { Heart } from 'lucide-react';

interface CardTopProps {
    property: PropertyCardProps | VehicleCardProps | RoomCardProps | AppartmentsCardProps;
}

const CardTop = ({ property }: CardTopProps) => {
    return (
        <CardHeader className="p-0 relative">
            {/* Guest Favorite Badge and Heart Icon */}
            <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <div>
                    {property.isGuestFavorite && (
                        <div className="bg-white/90 backdrop-blur-sm px-3 rounded-full pb-1">
                            <span className="text-xs font-semibold">Guest favorite</span>
                        </div>
                    )}
                </div>
                <button className="bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors" />
                </button>
            </div>

            {/* Property Image */}
            <div className="bg-gray-50 rounded-t-lg p-1.5 h-64 flex items-center justify-center overflow-hidden">
                <Image
                    src={property.image || "/placeholder.svg"}
                    width={200}
                    height={190}
                    alt={property.title}
                    className="object-cover w-full h-full rounded-xl"
                />
            </div>
        </CardHeader>
    )
}

export default CardTop
