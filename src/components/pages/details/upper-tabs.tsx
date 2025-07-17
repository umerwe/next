"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const UpperTabs = ({id} : {id : string}) => {
    const upperTabs = ['Overview', 'About', 'Rooms', 'Accessibility', 'Policies'];
    const [activeTab, setActiveTab] = useState('Overview');
    return (
        <div className="mb-6 px-3 mt-2 border-b-1">
            <ul className="flex space-x-8 text-gray-700 text-sm font-semibold border-b-1">
                {upperTabs.map((tab) => (
                    <li
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer pb-2 ${activeTab === tab
                            ? 'border-b-2 border-aqua text-aqua'
                            : 'hover:text-aqua'
                            }`}
                    >
                        <Link href={`/properties/${id}#${tab.toLowerCase()}`}>
                            {tab}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default UpperTabs
