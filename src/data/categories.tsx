import { BedSingle, CarFront, Home } from 'lucide-react';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

export const categories = [
    {
        name: 'Property',
        icon: <Home className="w-5 h-5 text-gray-500" />,
    },
    {
        name: 'Vehicles',
        icon: <CarFront className="w-5 h-5 text-gray-500" />,
    },
    {
        name: 'Rooms',
        icon: <BedSingle className="w-5 h-5 text-gray-500" />,
    },
    {
        name: 'Appartments',
        icon: <BuildingOffice2Icon className="w-5 h-5 text-gray-500" />,
    },
];