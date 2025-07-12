import { House, User } from "lucide-react";
import { Button } from "../ui/button";
import { DropdownBtn } from "../drop-down";
import StartEndDates from "./start-end-dates";

const Header = () => {
    return (
        <div className="bg-blue-500 text-white px-20 py-16 flex gap-8">
            <div className="bg-white text-gray-700 rounded-lg pl-3 pr-5 font-normal text-xs flex gap-13">
                {/* Location */}
                <div className="flex items-center gap-5">
                    <House className="text-gray-400" />
                    <div>
                        <p>Location</p>
                        <p className="font-bold text-[14px]">6730 Luna Land North</p>
                    </div>
                </div>

                {/* Start/End Dates */}
                <div className="flex gap-17 border-l border-gray-400 pl-17 ml-9">
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
                <div className="flex items-center gap-2 border-l border-gray-400 pl-9 ml-6">
                    <User className="text-gray-400" />
                    <div>
                        <p>Passengers</p>
                        <p className="font-bold mr-14">4 adults</p>
                    </div>
                    <div className="pt-2">
                        <DropdownBtn />
                    </div>
                </div>
            </div>

            <div>
                <Button
                    asChild
                    variant="secondary"
                    className="font-bold text-md rounded-full h-15 w-36"
                >
                    <p>Search</p>
                </Button>
            </div>
        </div>
    );
};

export default Header;
