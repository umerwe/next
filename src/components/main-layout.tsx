"use client"
import { useShouldShowSearchBar } from "@/hooks/show-search-bar"
import Categories from "./categories"
import Navbar from "./navbar/navbar"

const MainLayout = () => {
    const shouldShowSearchBar = useShouldShowSearchBar()
    return (
        <div>
            <Navbar />
            {shouldShowSearchBar && <Categories />}
        </div>
    )
}

export default MainLayout
