"use client"

import Link from 'next/link';
import React, { useState } from 'react'

const UpperTabs = ({id} : {id : string}) => {
    const upperTabs = ['Overview', 'About', 'Rooms', 'Accessibility', 'Policies'];
    const [activeTab, setActiveTab] = useState('Overview');
    return (
        <div className="border-b mb-6">
            <ul className="flex space-x-8 text-gray-700 text-sm font-semibold">
                {upperTabs.map((tab) => (
                    <li
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`cursor-pointer pb-2 ${activeTab === tab
                            ? 'border-b-2 border-green-500 text-green-600'
                            : 'hover:text-green-600'
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
