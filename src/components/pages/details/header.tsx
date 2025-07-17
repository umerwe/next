"use client"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useRouter } from "next/navigation";

const Header = ({ property }: { property: PropertyCardProps }) => {
    const router = useRouter();
    return (
        <div className="flex items-center justify-between py-6 bg-white">
            <div className="flex items-center gap-2 sm:gap-4">
                <Button variant="ghost" className="p-0 bg-gray-200" onClick={() => router.back()}>
                    <ArrowLeft style={{ width: '20px', height: '20px' }} />
                </Button>
                <h1 className="text-lg sm:text-xl font-semibold text-gray-900">Rental Details</h1>
            </div>
            <div className="bg-orange-100 text-orange-600 px-3 py-1 text-xs sm:text-sm font-medium">
                {property.status || "Pending"}
            </div>
        </div>
    )
}

export default Header
