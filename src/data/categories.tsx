import { BedSingle, CarFront, Home } from 'lucide-react';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

export const categories = [
  {
    name: 'Property',
    icon: Home,
    link: '/',
  },
  {
    name: 'Vehicles',
    icon: CarFront,
    link: '/vehicles',
  },
  {
    name: 'Rooms',
    icon: BedSingle,
    link: '/rooms',
  },
  {
    name: 'Appartments',
    icon: BuildingOffice2Icon,
    link: '/appartments',
  },
];
