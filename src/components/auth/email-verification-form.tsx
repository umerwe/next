import { useState } from "react"
import { EnvelopeOpenIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

const EmailVerificationForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log("Login data:", formData)
    }
    return (
        <div className="bg-white rounded-md shadow-2xl px-4 py-8 sm:py-10 sm:px-6 w-full lg:w-[330px]">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Email Verification</h1>
                <p className="text-gray-custom text-sm">Enter Otp to get your account verified</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Enter OTP
                    </label>
                    <div className="relative">
                        <EnvelopeOpenIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="6345"
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-aqua focus:border-transparent text-sm placeholder-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* Sign In Button */}
                <Button
                    variant="destructive"
                    className="w-full text-white py-5.5 px-4 rounded-full font-semibold hover:from-teal-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 text-sm shadow-lg"
                >
                    Verify Account
                </Button>
            </form>
        </div>
    )
}

export default EmailVerificationForm
