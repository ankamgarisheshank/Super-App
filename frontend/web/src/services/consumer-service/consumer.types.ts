export interface Restaurant {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  rating: number;
  deliveryTimeRange: string;
  minimumOrder: number;
  tags: string[];
  isPromoted?: boolean;
}

export interface RecommendedItem {
  id: string;
  restaurantId: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface ConsumerFeed {
  promotedRestaurants: Restaurant[];
  recommendations: RecommendedItem[];
  allRestaurants: Restaurant[];
}
