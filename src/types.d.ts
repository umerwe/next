interface PropertyCardProps {
    image: string;
    title: string;
    location: string;
    isGuestFavorite?: boolean;
    freeCancellation: boolean;
    noPrepayment: boolean;
    area: string;
    beds: number;
    baths: number;
    guests: number;
    price: number;
    rating: number;
    reviewCount: number;
}

interface VehicleCardProps {
  id: string;
  image: string;
  title: string;
  rating: number;
  reviewCount: number;
  category: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  isGuestFavorite?: boolean;
}

interface RoomCardProps {
  image: string
  title: string
  location: string
  freeCancellation: boolean
  noPrepayment: boolean
  wifi: boolean
  beds: number
  baths: number
  guests: number
  price: number
  rating: number
  reviewCount: number
  isGuestFavorite: boolean
}

interface AppartmentsCardProps {
    image: string;
    title: string;
    location: string;
    isGuestFavorite?: boolean;
    freeCancellation: boolean;
    noPrepayment: boolean;
    area: string;
    beds: number;
    baths: number;
    guests: number;
    price: number;
    rating: number;
    reviewCount: number;
}