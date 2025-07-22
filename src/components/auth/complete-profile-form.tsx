import React, { useState } from "react";
import {
    UserIcon,
    CalendarDaysIcon,
    GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const CompleteProfileForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        dateOfBirth: "",
        nationality: "",
    });

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ): void => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log("Profile data:", formData);
    };

    return (
        <div className="bg-white rounded-md shadow-2xl px-4 py-8 sm:py-6 sm:px-7 w-full lg:w-[110%]">
            {/* Header */}
            <div className="mb-4 flex flex-col items-center text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Complete your Profile
                </h1>
                <p className="text-gray-custom text-sm max-w-[300px]">
                    Enter the Following details to complete your profile
                </p>
            </div>

            {/* Profile Avatar */}
            <div className="flex justify-center mb-2">
                <div className="relative cursor-pointer">
                    <Image
                        src="/profile-frame.png"
                        width={100}
                        height={100}
                        alt="profile-frame"
                    />
                </div>
            </div>

            {/* Form */}
            <div className="space-y-2">
                {/* Name */}
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                        Name
                    </label>
                    <div className="relative">
                        <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500" />
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            placeholder="Enter your Name"
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Date of Birth */}
                <div>
                    <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-900 mb-2">
                        Date of Birth
                    </label>
                    <div className="relative">
                        <CalendarDaysIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500" />
                        <input
                            type="date"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            onChange={handleInputChange}
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Nationality */}
                <div className="mb-4">
                    <label htmlFor="nationality" className="block text-sm font-medium text-gray-900 mb-2">
                        Nationality
                    </label>
                    <div className="relative">
                        <GlobeAltIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500" />
                        <input
                            type="text"
                            id="nationality"
                            name="nationality"
                            value={formData.nationality}
                            onChange={handleInputChange}
                            placeholder="Pakistani"
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent text-sm placeholder-gray-400"
                        />
                    </div>
                </div>

                {/* Submit */}
                <Button
                    variant="destructive"
                    onClick={handleSubmit}
                    className="w-full shadow-lg py-5.5"
                >
                    Next
                </Button>
            </div>
        </div>
    );
};

export default CompleteProfileForm;
