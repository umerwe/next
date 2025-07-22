"use client"
import { useState } from "react"
import Link from "next/link"
import { EyeIcon, EyeSlashIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline"
import { Button } from "@/components/ui/button"

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })
    const [showPassword, setShowPassword] = useState(false)
    const [keepSignedIn, setKeepSignedIn] = useState(false)

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
        <div className="bg-white rounded-xl shadow-2xl px-4 py-8 sm:p-8 w-full lg:w-[120%]">
            {/* Header */}
            <div className="mb-8 text-center">
                <h1 className="text-2xl font-bold text-gray-900 mb-1">Welcome Back!</h1>
                <p className="text-gray-custom text-sm">{"Let's create new account to explore more"}</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                        Email or Phone Number
                    </label>
                    <div className="relative">
                        <EnvelopeIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500" />
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            placeholder="Enter your email"
                            className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-aqua focus:border-transparent text-sm placeholder-gray-400"
                            required
                        />
                    </div>
                </div>

                {/* Password Field */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-900 mb-2">
                        Password
                    </label>
                    <div className="relative">
                        <LockClosedIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-teal-500" />
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            placeholder="Enter your password"
                            className="w-full pl-11 pr-12 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-aqua focus:border-transparent text-sm placeholder-gray-400"
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                            {showPassword ? <EyeSlashIcon className="h-5 w-5" /> : <EyeIcon className="h-5 w-5" />}
                        </button>
                    </div>
                </div>

                {/* Remember Me & Forgot Password */}
                <div className="flex items-center justify-between text-sm">
                    <label className="flex items-center">
                        <input
                            type="checkbox"
                            checked={keepSignedIn}
                            onChange={(e) => setKeepSignedIn(e.target.checked)}
                            className="h-4 w-4 text-aqua focus:ring-aqua border-gray-300 rounded"
                        />
                        <span className="ml-2 text-gray-600">Keep me signed in</span>
                    </label>
                    <Link href="/forgot-password" className="text-aqua hover:text-teal-600 font-medium">
                        Forgot password
                    </Link>
                </div>

                {/* Sign In Button */}
                <Button
                    variant="destructive"
                    className="w-full text-white py-5.5 px-4 rounded-full font-semibold hover:from-teal-500 hover:to-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2 transition-all duration-200 text-sm shadow-lg"
                >
                    Sign In
                </Button>
            </form>

            {/* Sign Up Link */}
            <div className="text-center text-sm mt-8">
                <span className="text-gray-600">{"Don't have an account? "}</span>
                <Link href="/register" className="text-teal-500 hover:text-teal-600 font-medium">
                    Sign up here
                </Link>
            </div>
        </div>
    )
}

export default LoginForm
