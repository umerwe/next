import { Card, CardHeader, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Heart, Users, BedDouble, Bath, Ruler, Star } from "lucide-react";

export function PropertyCard({
    image,
    title,
    location,
    isGuestFavorite = true,
    freeCancellation,
    noPrepayment,
    area,
    beds,
    baths,
    guests,
    price,
    rating,
    reviewCount,
}: PropertyCardProps) {
    return (
        <Card className="w-[280px] min-[490px]:w-[230px] min-[610px]:w-[280px]\
         min-[767px]:w-[240px] min-[800px]:w-[250px] min-[950px]:w-[300px]
          min-[1020px]:w-[240px] min-[1150px]:w-[270px] border-0 bg-white 
          shadow-sm hover:shadow-md transition-shadow duration-200">
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

                {/* Property Image */}
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
                <div className="flex items-center justify-between mb-1">
                    <h3 className="font-semibold text-gray-900 text-xl">{title}</h3>
                    <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm text-header">{rating}</span>
                        <span className="text-sm text-header">({reviewCount})</span>
                    </div>
                </div>

                {/* Location */}
                <p className="text-sm text-[#00CC99] font-medium mb-2">
                    Location: {location}
                </p>

                {/* Features */}
                <ul className="text-xs text-[#0E8800] mb-2 space-y-1">
                    {freeCancellation && (
                        <li className="flex items-center gap-1">
                            <span className="font-bold text-black">✔</span> Free cancellation
                        </li>
                    )}
                    {noPrepayment && (
                        <li className="flex items-center gap-1">
                            <span className="font-bold">✔</span> No prepayment needed – pay at the property
                        </li>
                    )}
                </ul>

                {/* Specifications */}
                <div className="flex justify-between text-xs font-medium text-gray-custom">
                    <div className="flex items-center gap-1">
                        <Ruler className="w-4 h-4" />
                        <span>{area}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BedDouble className="w-4 h-4" />
                        <span>{beds}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Bath className="w-4 h-4" />
                        <span>{baths}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        <span>{guests}</span>
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
                    className="border-2 border-header text-header rounded-full hover:bg-cyan-50 hover:border-cyan-500 px-6 bg-transparent"
                >
                    View Details
                </Button>
            </CardFooter>
        </Card>
    );
}
