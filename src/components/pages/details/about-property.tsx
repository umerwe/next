import React from 'react'
import FeaturesData from './features'
import { Button } from '@/components/ui/button'

const AboutProperty = ({ property }: DataProps) => {
    return (
        <div>
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-2">About this property</h2>
            <p className="text-gray-600 text-sm mb-4 max-w-full lg:max-w-130">
                <span>
                    {property.title} located in {property.location}
                </span>
            </p>
            <FeaturesData property={property} />
            <Button variant="outline" className="mt-4 md:mt-6 bg-transparent w-full sm:w-auto">
                See all about this property
            </Button>
        </div>
    )
}

export default AboutProperty
