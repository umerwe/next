interface DataProps {
  property: PropertyCardProps | RoomCardProps | AppartmentsCardProps | VehicleCardProps
}

interface ListingProps {
  params: Promise<{
    id: string
    category: string
  }>
}

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
  images: string[];
  freeCancellation: boolean;
  noPrepayment: boolean;
  title: string;
  rating: number;
  reviewCount: number;
  description: string;
  category: string;
  status: string;
  fuelCapacity: string;
  transmission: string;
  capacity: string;
  price: number;
  isGuestFavorite: boolean;
  location: string;
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
  nearby: {
    place: string;
    walkTime?: string;
    driveTime?: string;
  }[];
  guestImpressions: string[];
  reviews: {
    id: number;
    user: string;
    date: string;
    review: string;
    image: string;
  }[];
  carFeatures: {
    label: string;
    count: number;
  }[];
  mostMentioned: {
    label: string;
    count: number;
  }[];
}

interface RoomCardProps {
  id: string;
  status: string;
  category: string;
  images: string[];
  title: string;
  location: string;
  freeCancellation: boolean;
  noPrepayment: boolean;
  wifi: boolean;
  beds: number;
  baths: number;
  guests: number;
  price: number;
  rating: number;
  reviewCount: number;
  isGuestFavorite: boolean;
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
  nearby: {
    place: string;
    walkTime?: string;
    driveTime?: string;
  }[];
  guestImpressions: string[];
  reviews: {
    id: number;
    user: string;
    date: string;
    review: string;
    image: string;
  }[];
  roomFeatures: {
    label: string;
    count: number;
  }[];
  mostMentioned: {
    label: string;
    count: number;
  }[];
}

interface AppartmentsCardProps {
  id: string;
  images: string[];
  category: string;
  status: string;
  title: string;
  location: string;
  isGuestFavorite: boolean;
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
  nearby: {
    place: string;
    walkTime?: string;
    driveTime?: string;
  }[];
  guestImpressions: string[];
  reviews: {
    id: number;
    user: string;
    date: string;
    review: string;
    image: string;
  }[];
  roomFeatures: {
    label: string;
    count: number;
  }[];
  mostMentioned: {
    label: string;
    count: number;
  }[];
}