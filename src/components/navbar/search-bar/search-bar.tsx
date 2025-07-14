import { House } from "lucide-react";
import { Button } from "@/components/ui/button";
import StartEndDates from "./start-end-dates";
import PassengerDropdown from "./passenger-dropdown";

const SearchBar = () => {
    return (
        <div className="text-white px-10 sm:px-24 lg:px-23 xl:px-16 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 flex items-center justify-center flex-col lg:flex-row gap-6 lg:gap-8 max-w-7xl mx-auto">
            <div className="bg-white text-gray-700 rounded-lg w-full lg:flex-1 overflow-hidden">
                <div className="flex flex-col lg:flex-row pl-4 pr-6 lg:pr-0 sm:pl-8 lg:pl-0 pt-4 pb-6 lg:py-0 lg:items-stretch gap-4 lg:gap-15 xl:gap-14 lg:divide-x lg:divide-gray-300">
                    {/* Location */}
                    <div className="flex items-center gap-3 lg:pl-6 lg:pr-6 xl:pr-8 min-w-0 py-0 lg:py-3">
                        <House className="text-gray-400 flex-shrink-0 w-5 h-5" />
                        <div className="min-w-0 flex-1 mr-2 xl:mr-9">
                            <p className="text-xs lg:text-sm text-gray-500">Location</p>
                            <p className="font-bold text-xs lg:text-sm text-gray-900 truncate">6730 Luna Land North</p>
                        </div>
                    </div>

                    {/* Start/End Dates */}
                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-18 xl:gap-17 pl-0 pr-12 xl:pr-15 pt-3.5 lg:pt-0 border-t lg:border-t-0 border-gray-200">
                        <StartEndDates
                            title="Start Date"
                            description="24.06.2019"
                        />

                        <StartEndDates
                            title="End Date"
                            description="13.08.2019"
                        />
                    </div>

                    {/* Passengers */}
                    <PassengerDropdown />
                </div>
            </div>

            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center lg:justify-start">
                <Button
                    asChild
                    variant="secondary"
                    className="font-semibold text-[17px] rounded-full h-12 sm:h-14 lg:h-16 w-full sm:w-36 lg:w-39 xl:w-44"
                >
                    <p>Search</p>
                </Button>
            </div>
        </div>
    );
};

export default SearchBar;