"use client"
import VerificationForm from "@/components/auth/verification-form"
import Image from "next/image"

const Verification = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Side - Form */}
            <div className="w-full lg:w-[30%] flex items-center justify-center p-4 lg:p-8 max-[1024px]:bg-gradient-to-r from-aqua to-blue bg-gray-50">
                <div className="w-full sm:w-[80%] lg:w-auto lg:absolute top-34 left-[17%] xl:left-[19%] 2xl:left-[21%] z-10">
                    <VerificationForm />
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
            </div>
        </div>
    )
}

export default Verification
