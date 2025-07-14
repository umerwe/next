import React from 'react'
import { ThemeProvider } from './theme-provider'
import Navbar from '../navbar/navbar'
import Categories from '../categories'

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />
            <Categories />
            <main className="flex-1">{children}</main>
        </ThemeProvider>
    )
}

export default Providers
