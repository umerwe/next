"use client"
import Input from "@/components/input"
import { Button } from "@/components/ui/button"
import { Check, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const PaymentForm = () => {
    const [isPolicyExpanded, setIsPolicyExpanded] = useState(true)
    const [isInstructionsExpanded, setIsInstructionsExpanded] = useState(false)

    const [paymentOption, setPaymentOption] = useState("full")
    const [cardName, setCardName] = useState("")
    const [expiryDate, setExpiryDate] = useState("")
    const [billingZip, setBillingZip] = useState("")

    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose how to pay</h2>

            {/* Payment Options */}
            <div className="space-y-4 mb-6">
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="pay-full"
                        name="payment-option"
                        value="full"
                        className="w-4 h-4 accent-red-500 border-white"
                        checked={paymentOption === "full"}
                        onChange={(e) => setPaymentOption(e.target.value)}
                    />
                    <label htmlFor="pay-full" className="ml-3 text-sm font-medium text-gray-900">
                        Pay in full today.
                    </label>
                </div>
                <div className="flex items-center">
                    <input
                        type="radio"
                        id="pay-affirm"
                        name="payment-option"
                        value="affirm"
                        className="w-4 h-4 accent-red-500 border-gray-300"
                        checked={paymentOption === "affirm"}
                        onChange={(e) => setPaymentOption(e.target.value)}
                    />
                    <label htmlFor="pay-affirm" className="ml-3 text-sm font-medium text-gray-900">
                        Pay over time with Affirm.
                    </label>
                </div>
            </div>

            <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Payment method</h3>
                <p className="text-sm text-gray-600 mb-4">
                    Safe, secure transactions. Your personal information is protected.
                </p>

                <div className="flex flex-wrap items-center gap-2 mb-4">
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">PayPal</span>
                    </div>
                    <div className="w-10 h-6 bg-red-500 rounded flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full -ml-1"></div>
                    </div>
                    <div className="w-10 h-6 bg-green-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">JCB</span>
                    </div>
                    <div className="w-10 h-6 bg-blue-800 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">VISA</span>
                    </div>
                    <div className="w-10 h-6 bg-orange-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">DIS</span>
                    </div>
                    <div className="w-10 h-6 bg-teal-500 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">AE</span>
                    </div>
                    <div className="w-10 h-6 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">UP</span>
                    </div>
                    <div className="w-10 h-6 bg-gray-700 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">DIN</span>
                    </div>
                </div>

                {/* Card Selection */}
                <div className="border rounded-lg p-4 mb-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <div className="w-6 h-4 border rounded flex items-center justify-center">
                                <div className="w-3 h-2 bg-gray-400 rounded-sm"></div>
                            </div>
                            <span className="text-sm font-medium text-gray-900">Card</span>
                        </div>
                        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>
                </div>

                {/* Card Details Form */}
                <div className="space-y-4">
                    <Input
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                        placeholder="Name on card *"
                    />

                    <div>
                        <div className="bg-gray-100 pl-3 py-1 rounded-md max-w-50">
                            <label className="block text-xs font-semibold text-black mb-1">
                                Expiration date <span className="text-red-500 font-bold">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="MM/YY"
                                className="max-full bg-transparent text-gray-800 placeholder:text-gray-500 placeholder:font-semibold px-0 border-0 focus:outline-none focus:ring-0 text-sm"
                                value={expiryDate}
                                onChange={(e) => setExpiryDate(e.target.value)}
                            />
                        </div>
                    </div>

                    <div>
                        <Input
                            value={billingZip}
                            onChange={(e) => setBillingZip(e.target.value)}
                            placeholder="Billing ZIP code *"
                        />
                    </div>

                    {/* Policy Section */}
                    <div className="max-w-2xl mx-auto mt-10 space-y-4">
                        <div className="bg-white border border-gray-200 rounded-2xl px-6 py-4 shadow-sm">
                            <button
                                onClick={() => setIsPolicyExpanded(!isPolicyExpanded)}
                                className="flex items-center justify-between w-full text-left"
                            >
                                <h3 className="text-md font-semibold text-gray-900">Cancellation policy</h3>
                                {isPolicyExpanded ? (
                                    <ChevronUp className="w-5 h-5 text-gray-500" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-gray-500" />
                                )}
                            </button>

                            {isPolicyExpanded && (
                                <div className="mt-4 space-y-4">
                                    <p className="text-green-600 font-medium">Fully refundable before Tue, Apr 29</p>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        Cancellations or changes made after 11:59pm (property local time) on Apr 29, 2025 or no-shows are subject to a
                                        property fee equal to 100% of the total amount paid for the reservation.
                                    </p>
                                    <div className="bg-white rounded-2xl">
                                        <button
                                            onClick={() => setIsInstructionsExpanded(!isInstructionsExpanded)}
                                            className="flex items-center justify-between w-full text-left"
                                        >
                                            <h3 className="text-md font-semibold text-gray-900">Special check-in instructions</h3>
                                            <ChevronDown className="w-5 h-5 text-gray-500" />
                                        </button>

                                        {isInstructionsExpanded && (
                                            <div className="mt-4">
                                                <p className="text-gray-700 text-sm">Check-in instructions will be provided here.</p>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex items-center gap-2 px-2">
                            <div className="flex-shrink-0">
                                <div className="w-4 h-4 bg-green-700 rounded-full flex items-center justify-center">
                                    <Check className="w-3 h-3 text-white" />
                                </div>
                            </div>
                            <p className="text-gray-700 font-medium text-sm pb-0.5">Fully refundable if plans change</p>
                        </div>

                        <Button variant="destructive" className="w-full sm:w-auto md:w-full lg:w-auto px-9">
                            Complete Booking
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentForm
