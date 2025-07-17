import { ChevronRight } from "lucide-react"
import { propertiesData } from "@/data/properties-data"
import UpperTabs from "./upper-tabs"
import LowerTabs from "./lower-tabs"
import GuestReview from "./guest-review"
import MostMentionedTabs from "./most-mentioned-tabs"
import GuestImpressions from "./guest-impressions"
import ImageGalleryLayout from "./image-gallery-layout"
import Header from "./header"
import HostInfo from "./host-info"
import ExploreArea from "./explore-area"
import PricingActions from "./pricing-actions"
import AboutProperty from "./about-property"
import CoreDetails from "./core-details"
import Features from "@/components/features"
import Rating from "./rating"
import GuestLikedPost from "./guest-liked."

interface DetailsProps {
    id: string
}

const Details = ({ id }: DetailsProps) => {

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
        <div className="mx-3 sm:mx-7">

            <Header
                property={property}
            />

            <ImageGalleryLayout
                property={property}
            />

            <UpperTabs id={id} />

            <div className="flex flex-col md:flex-row gap-6 md:gap-8 lg:gap-10 px-3 md:px-6">

                {/* LEFT COLUMN */}
                <div className="w-full md:w-3/5 lg:w-2/3 flex flex-col gap-4">
                    <CoreDetails
                        property={property}
                    />

                    <Features
                        freeCancellation={property.freeCancellation}
                        noPrepayment={property.noPrepayment}
                        layout="inline"
                    />

                    <Rating
                        property={property}
                    />

                    <GuestLikedPost
                        property={property}
                    />

                    <AboutProperty
                        property={property}
                    />
                </div>

                {/* RIGHT COLUMN */}
                <div className="w-full md:w-2/5 lg:w-1/3 space-y-3 md:space-y-4">
                    <PricingActions
                        property={property}
                    />
                    <ExploreArea
                        property={property}
                    />
                </div>

            </div>

            <div className="sm:px-3">
                <HostInfo
                    property={property}
                />

                <LowerTabs id={id} />

                <div className="mt-8">
                    <GuestReview
                        property={property} />

                    <MostMentionedTabs
                        property={property} />

                    <GuestImpressions
                        property={property} />
                </div>
            </div>


        </div>
    )
}

export default Details
