import type { ConsumerFeed } from './consumer.types';

export const ConsumerAPI = {
  getHomeFeed: async (): Promise<ConsumerFeed> => {
    // Simulated network delay
    await new Promise(r => setTimeout(r, 600));
    
    return {
      promotedRestaurants: [
        {
          id: 'rest_1',
          name: 'Burger Palace',
          description: 'Premium smash burgers and fries',
          imageUrl: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?auto=format&fit=crop&q=80&w=400',
          rating: 4.8,
          deliveryTimeRange: '15-25 min',
          minimumOrder: 15,
          tags: ['Burgers', 'American', 'Fast Food'],
          isPromoted: true,
        },
      ],
      recommendations: [
        {
          id: 'item_1',
          restaurantId: 'rest_2',
          name: 'Margherita Pizza',
          price: 18,
          imageUrl: 'https://images.unsplash.com/photo-1604068549290-dea0e4a30536?auto=format&fit=crop&q=80&w=200',
          description: 'Fresh basil, mozzarella, tomato sauce',
        }
      ],
      allRestaurants: [
        {
          id: 'rest_2',
          name: 'Pizza Express',
          description: 'Authentic Italian wood-fired pizzas',
          imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=400',
          rating: 4.5,
          deliveryTimeRange: '25-40 min',
          minimumOrder: 20,
          tags: ['Pizza', 'Italian'],
        },
        {
          id: 'rest_3',
          name: 'Sushi Zen',
          description: 'Fresh sushi and Japanese cuisine',
          imageUrl: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&q=80&w=400',
          rating: 4.9,
          deliveryTimeRange: '30-45 min',
          minimumOrder: 30,
          tags: ['Sushi', 'Japanese', 'Asian'],
        }
      ]
    };
  }
};
