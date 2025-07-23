"use client"

import Input from "@/components/input"
import { ChevronDown } from "lucide-react"
import { useState } from "react"

const CheckOutForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [countryCode, setCountryCode] = useState("+1")
    const [phoneNumber, setPhoneNumber] = useState("")

    return (
        <div className="space-y-4">
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <p className="text-sm text-gray-600 mb-3">Tell us the name of the person checking in.</p>
                <div className="space-y-3">
                    <Input
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="First name *"
                    />
                    <Input
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        placeholder="Last name *"
                    />
                </div>
            </div>

            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Contact Information</label>
                <p className="text-sm text-gray-600 mb-3">
                    We&rsquo;ll send your confirmation to this email address.
                </p>
                <div className="space-y-3">
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email Address *"
                        type="email"
                    />
                    <div className="flex flex-col sm:flex-row gap-3">
                        <div className="bg-gray-100 pt-1 rounded-md w-full sm:w-[30%]">
                            <label className="block text-xs pl-3 font-medium text-black mb-1">
                                Country/region <span className="text-red-500 font-bold">*</span>
                            </label>
                            <div className="relative -mt-2">
                                <select
                                    value={countryCode}
                                    onChange={(e) => setCountryCode(e.target.value)}
                                    className="w-full appearance-none font-semibold text-black bg-transparent px-3 text-xs border border-transparent focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-md"
                                >
                                    <option value="+1">+1</option>
                                    <option value="+92">+92</option>
                                    <option value="+44">+44</option>
                                </select>

                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <ChevronDown className="w-4 h-4 text-black" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full sm:w-[70%]">
                            <Input
                                value={phoneNumber}
                                onChange={(e) => setPhoneNumber(e.target.value)}
                                placeholder="Phone number *"
                                type="number"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CheckOutForm
