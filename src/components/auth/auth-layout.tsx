// components/auth/AuthLayout.tsx
"use client"
import Image from "next/image"
import type { ReactNode } from "react"

export default function AuthLayout({ FormComponent }: { FormComponent: ReactNode }) {
    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-[30%] flex items-center justify-center p-4 lg:p-8 max-[1024px]:bg-gradient-to-r from-aqua to-blue bg-gray-50">
                <div className="w-full sm:w-[80%] lg:w-auto lg:absolute top-14 left-[14%] xl:left-[17%] 2xl:left-[19%] z-10">
                    {FormComponent}
                </div>
            </div>

            {/* Right Side - Illustration */}
            <div className="hidden lg:w-[70%] lg:flex flex-1 relative bg-auth overflow-hidden z-1">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative lg:pl-50">
                        <Image
                            src="/auth-img.png"
                            alt="Auth Illustration"
                            width={470}
                            height={470}
                            className="object-contain w-[470px] xl:w-[570px] h-[470px] xl:h-[570px]"
                            priority
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
