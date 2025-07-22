"use client"
import type React from "react"
import Image from "next/image"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {

    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-[30%] flex items-center justify-center p-4 lg:p-8 max-[1024px]:bg-gradient-to-r from-aqua to-blue bg-gray-50">
                <div className="w-full sm:w-[80%] lg:w-auto lg:absolute top-14 left-[14%] xl:left-[17%] 2xl:left-[19%] z-10">
                    <LoginForm />
                </div>
            </div>


            {/* Right Side - Background with Illustration */}
            <div className="hidden lg:w-[70%] lg:flex flex-1 relative bg-auth overflow-hidden z-1">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative lg:pl-50">
                        <Image
                            src="/auth-img.png"
                            alt="Person on rocket illustration"
                            width={470}
                            height={470}
                            className="object-contain w-[470px] xl:w-[570px]  h-[470px] xl:h-[570px]"
                            priority
                        />
                    </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-32 right-32 w-12 h-12 bg-white/10 rounded-full blur-lg"></div>
                <div className="absolute top-1/2 left-10 w-8 h-8 bg-white/10 rounded-full blur-md"></div>
            </div>
        </div>
    )
}
