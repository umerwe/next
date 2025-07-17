interface PropertyCardProps {
  id: string;
  category: string,
  status: string;
  images: string[];
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
  host: {
    name: string;
    rating: number;
    totalReviews: number;
  };
  highlights: {
    cleanliness: number;
    location: number;
    amenities: number;
    service: number;
  };
  features: string[];
  nearby: { place: string; walkTime: string }[];
  guestImpressions: string[];
  reviews: { id: number; user: string; date: string; review: string; image: string }[];
  roomFeatures: { label: string; count: number }[];
  mostMentioned: { label: string; count: number }[];
}


interface VehicleCardProps {
  id: string;
  status : string,
  description : string
  images: string[];
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
  id: string,
  status : string,
  category : string,
  images: string[]
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
  id: string,
  images: string[];
  category:string
  status : string,
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