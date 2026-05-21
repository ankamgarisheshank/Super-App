import { Clock, Star } from 'lucide-react';
import type { Restaurant } from '@services/consumer-service';

interface RestaurantCardProps {
  restaurant: Restaurant;
  onClick?: (id: string) => void;
}

export function RestaurantCard({ restaurant, onClick }: RestaurantCardProps) {
  return (
    <div 
      className="group cursor-pointer rounded-2xl border border-gray-800 bg-gray-900/50 overflow-hidden hover:border-gray-700 hover:bg-gray-800/50 transition-all duration-300"
      onClick={() => onClick?.(restaurant.id)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={restaurant.imageUrl} 
          alt={restaurant.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {restaurant.isPromoted && (
          <div className="absolute top-3 left-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-md shadow-lg">
            Promoted
          </div>
        )}
        <div className="absolute bottom-3 right-3 bg-gray-900/90 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded-lg flex items-center shadow-lg">
          <Clock className="w-3 h-3 mr-1" />
          {restaurant.deliveryTimeRange}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
            {restaurant.name}
          </h3>
          <div className="flex items-center bg-gray-800 px-1.5 py-0.5 rounded text-sm font-medium text-white">
            <Star className="w-3 h-3 text-amber-400 mr-1 fill-amber-400" />
            {restaurant.rating}
          </div>
        </div>
        
        <p className="text-sm text-gray-400 line-clamp-1 mb-3">
          {restaurant.description}
        </p>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-xs text-gray-500 font-medium">
            Min. ${restaurant.minimumOrder}
          </span>
          <span className="text-gray-700">•</span>
          {restaurant.tags.slice(0, 2).map((tag, idx) => (
            <span key={idx} className="text-xs text-gray-400 bg-gray-800/50 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
