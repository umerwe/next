// app/register/page.tsx
"use client"
import AuthLayout from "@/components/auth/auth-layout"
import RegisterForm from "@/components/auth/register-form"

export default function RegisterPage() {
  return <AuthLayout FormComponent={<RegisterForm />} />
}
