"use client"

import Link from "next/link";
import { useState } from "react";

const LowerTabs = ({id} : {id:string}) => {
    const lowerTabs = ['Rooms', 'Guest Reviews', 'Services & Amenities', 'Policies'];
    const [activesTab, setActivesTab] = useState('Rooms');

    return (
        <div className="mt-8 border-b" >
            <ul className="flex space-x-8 text-gray-700 text-sm font-medium">
                {lowerTabs.map((tab) => (
                    <li
                        key={tab}
                        onClick={() => setActivesTab(tab)}
                        className={`cursor-pointer pb-3 ${activesTab === tab
                            ? 'border-b-2 border-black text-black font-semibold'
                            : 'hover:text-black'
                            }`}
                    >
                        <Link href={`/properties/${id}#${tab.toLowerCase()}`}>
                            {tab}
                        </Link>
                    </li>
                ))}
            </ul>
        </div >
    )
}

export default LowerTabs
