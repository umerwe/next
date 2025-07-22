// app/login/page.tsx
"use client"
import AuthLayout from "@/components/auth/auth-layout"
import LoginForm from "@/components/auth/login-form"

export default function LoginPage() {
  return <AuthLayout FormComponent={<LoginForm />} />
}
