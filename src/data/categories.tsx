import { AArrowDownIcon, BedSingle, CarFront, Home } from 'lucide-react';
import { BuildingOffice2Icon } from '@heroicons/react/24/outline';

export const categories = [
  {
    name: 'All',
    icon: AArrowDownIcon,
    link: '/listing',
  },
  {
    name: 'Property',
    icon: Home,
    link: '/listing/prp567',
  },
  {
    name: 'Vehicles',
    icon: CarFront,
    link: '/listing/veh341',
  },
  {
    name: 'Rooms',
    icon: BedSingle,
    link: '/listing/room567',
  },
  {
    name: 'Appartments',
    icon: BuildingOffice2Icon,
    link: '/listing/aprt987',
  },
];
