"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Check, ChevronRight, MapPin, Star, MessageCircleMore, ArrowLeft, Heart } from "lucide-react"
import { propertiesData } from "@/data/properties-data"
import { useParams } from "next/navigation"
import Image from "next/image"
import FeaturesData from "@/components/pages/details/features"
import UpperTabs from "./upper-tabs"
import LowerTabs from "./lower-tabs"
import GuestReview from "./guest-review"
import MostMentionedTabs from "./most-mentioned-tabs"
import GuestImpressions from "./guest-impressions"
import { PhotoGallery } from "./photo-gallery"
import { useRouter } from "next/navigation"

const Details = () => {
    const { id } = useParams<{ id: string }>()
    const [isGalleryOpen, setIsGalleryOpen] = useState(false)
    const [isFavorite, setIsFavorite] = useState(false)
    const router = useRouter();

    const filteredData = propertiesData.filter((item) => item.id === id)

    if (filteredData.length === 0) {
        return (
            <div className="p-10 text-center text-gray-600">
                No property found with name: <b>{id}</b>
            </div>
        )
    }

    const property = filteredData[0]

    return (
        <div className="max-w-7xl mx-7">
            {/* Header */}
            <div className="flex items-center justify-between py-6 bg-white">
                <div className="flex items-center gap-4">
                    <Button variant="ghost" className="p-0 bg-gray-200" onClick={() => router.back()}>
                        <ArrowLeft style={{ width: '20px', height: '20px' }} />
                    </Button>
                    <h1 className="text-xl font-semibold text-gray-900">Rental Details</h1>
                </div>
                <div className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium">
                    {property.status || "Pending"}
                </div>
            </div>

            {/* Image Gallery Layout */}
            <div className="pb-4">
                <div className="flex flex-col lg:flex-row gap-2 h-auto lg:h-70">
                    {/* Big Left Image */}
                    <div className="lg:w-1/2 h-72 lg:h-full relative rounded-xs overflow-hidden">
                        <Image
                            src={property.images[0] || "/placeholder.svg"}
                            alt="Main image"
                            fill
                            className="object-cover cursor-pointer"
                            onClick={() => setIsGalleryOpen(true)}
                        />
                    </div>

                    {/* 3 Top + 3 Bottom Small Images */}
                    <div className="lg:w-1/1 h-full grid grid-cols-3 grid-rows-2 gap-2">
                        {property.images.slice(1, 7).map((img, index) => (
                            <div
                                key={index}
                                className={`relative h-34 w-full rounded-xs overflow-hidden group aspect-[4/3] ${index === 5 ? "col-span-1 row-span-1" : ""
                                    }`}
                            >
                                <Image
                                    src={img || "/placeholder.svg"}
                                    alt={`Gallery image ${index + 1}`}
                                    fill
                                    className="object-cover cursor-pointer"
                                    onClick={() => setIsGalleryOpen(true)}
                                />

                                {/* Heart icon on 3rd image */}
                                {index === 2 && (
                                    <button
                                        className="absolute top-2 right-2 p-2 bg-white/80 rounded-full hover:bg-white transition"
                                        onClick={() => setIsFavorite(!isFavorite)}
                                    >
                                        <Heart className={`w-5 h-5 ${isFavorite ? "fill-red-500 text-red-500" : "text-gray-600"}`} />
                                    </button>
                                )}

                                {/* Overlay on last image */}
                                {index === 5 && (
                                    <div
                                        className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-white cursor-pointer"
                                        onClick={() => setIsGalleryOpen(true)}
                                    >
                                        <div className="w-8 h-8 mb-2 grid grid-cols-2 gap-0.5">
                                            <div className="bg-white/80 rounded-sm" />
                                            <div className="bg-white/80 rounded-sm" />
                                            <div className="bg-white/80 rounded-sm" />
                                            <div className="bg-white/80 rounded-sm" />
                                        </div>
                                        <span className="text-sm font-medium">See All {property.images.length} Photos</span>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <UpperTabs id={id} />

            {/* Rest of the content */}
            <div className="flex flex-col lg:flex-row gap-10 px-6">
                {/* LEFT COLUMN */}
                <div className="w-full lg:w-1/1 flex flex-col gap-4">
                    {/* Title + rating + location */}
                    <div>
                        <h1 className="text-2xl flex items-center gap-2 md:text-3xl font-semibold text-gray-800 mb-1">
                            {property.title}
                            <div className="flex pt-1.5 gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4.5 h-4.5 fill-yellow-400 text-yellow-400" />
                                ))}
                            </div>
                        </h1>
                        <div className="text-xs text-gray-600 flex items-center gap-20">
                            <div className="flex gap-1 items-center">
                                <MapPin color="black" className="w-4 h-4" />
                                {property.location}
                            </div>
                            <Button variant="link" className="p-0 h-auto text-aqua font-semibold cursor-pointer">
                                Show on Map
                            </Button>
                        </div>
                    </div>

                    {/* Refundable + pay later */}
                    <div className="flex flex-wrap space-x-4 text-green-700 text-sm font-medium">
                        {property.freeCancellation && (
                            <div className="flex items-center gap-2">
                                <Check className="w-6 h-6 pt-0.5" />
                                <span>Fully refundable</span>
                            </div>
                        )}
                        {property.noPrepayment && (
                            <div className="flex items-center gap-2">
                                <Check className="w-6 h-6 pt-0.5" />
                                <span>Reserve now, pay later</span>
                            </div>
                        )}
                    </div>

                    {/* Rating */}
                    <div className="flex items-center space-x-2">
                        <span className="bg-green-700 text-white px-2 py-1 rounded text-xs">{property.rating.toFixed(1)}</span>
                        <span className="font-semibold text-gray-700 mr-4">Excellent</span>
                        <span className="text-aqua text-sm flex items-center cursor-pointer">
                            <p>See all {property.reviewCount} reviews</p>
                            <ChevronRight className="pt-1" />
                        </span>
                    </div>

                    {/* Guests liked */}
                    <p className="text-gray-600 text-sm -mt-1.5">
                        <b>Guests liked:</b> {property.guestImpressions.slice(0, 2).join(", ")}
                    </p>

                    {/* About this property */}
                    <div>
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">About this property</h2>
                        <p className="text-gray-600 text-sm mb-4 max-w-130">
                            <span>
                                {property.title} located in {property.location}
                            </span>
                        </p>
                        <FeaturesData property={property} />
                        <Button variant="outline" className="mt-6 bg-transparent">
                            See all about this property
                        </Button>
                    </div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="w-full lg:w-1/2 space-y-3">
                    {/* Pricing + actions */}
                    <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
                        <div className="flex items-center gap-2">
                            <span className="line-through text-gray-500 text-sm">
                                Rs {(property.price * 1000 * 1.2).toLocaleString()}
                            </span>
                            <span className="text-2xl font-semibold border-b border-dotted border-gray-400 pb-1 mt-2">
                                Rs {(property.price * 1000).toLocaleString()}
                            </span>
                        </div>
                        <Button variant="destructive">Cancel Request</Button>
                    </div>

                    <h2 className="text-lg font-semibold text-gray-800">Explore the area</h2>

                    <div className="border-2 border-gray-300 rounded-xl">
                        {/* Image / map */}
                        <div className="w-full h-48 bg-gray-200 rounded-t-xl overflow-hidden relative">
                            <Image src={property.images[2] || "/placeholder.svg"} fill alt="property-img" />
                        </div>
                        <div className="p-3">
                            <p className="text-sm font-medium text-gray-800">{property.location}</p>
                            <span className="text-aqua text-sm flex items-center cursor-pointer">
                                <p>View in the map</p>
                                <ChevronRight className="pt-1" />
                            </span>
                        </div>
                    </div>

                    {/* Explore the area */}
                    <div className="p-4 pt-0 rounded-lg space-y-3">
                        {property.nearby.map((item) => (
                            <div key={item.place} className="flex items-center justify-between text-sm">
                                <div className="flex items-center space-x-2">
                                    <MapPin className="w-4 h-4 text-gray-500" />
                                    <span className="text-gray-700 font-medium">{item.place}</span>
                                </div>
                                <span className="text-gray-600">{item.walkTime}</span>
                            </div>
                        ))}
                        <Button variant="outline">See all about this area</Button>
                    </div>
                </div>
            </div>

            <div className="px-3">
                {/* Host info */}
                <div className="mt-8">
                    <div className="flex items-center mb-4">
                        <h3 className="text-lg font-bold text-gray-800">Hosted by</h3>
                    </div>
                    <div className="flex items-center justify-between max-w-100 space-x-3">
                        <div className="flex gap-3">
                            <div className="w-12 h-12 rounded-full overflow-hidden">
                                <Image
                                    src="/host-img.png"
                                    alt={property.host.name}
                                    width={100}
                                    height={100}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-bold text-gray-800 text-base">{property.host.name}</p>
                                <p className="text-gray-500 text-sm flex items-center">
                                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                                    {property.host.rating} ({property.host.totalReviews.toLocaleString()} reviews)
                                </p>
                            </div>
                        </div>
                        <div className="border-2 border-t-aqua border-r-aqua border-b-blue border-l-blue flex items-center justify-center mb-2 w-10 h-10 rounded-md cursor-pointer">
                            <MessageCircleMore className="w-5.5 h-5.5 text-aqua" />
                        </div>
                    </div>
                </div>

                <LowerTabs id={id} />

                <div className="mt-8">
                    <GuestReview property={property} />
                    <MostMentionedTabs property={property} />
                    <GuestImpressions property={property} />
                </div>
            </div>

            {/* Photo Gallery Modal */}
            <PhotoGallery images={property.images} open={isGalleryOpen} onClose={() => setIsGalleryOpen(false)} />
        </div>
    )
}

export default Details
