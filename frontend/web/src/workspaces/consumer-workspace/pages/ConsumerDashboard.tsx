import { useConsumerFeed } from '@services/consumer-service';
import { RestaurantCard } from '../restaurant/RestaurantCard';
import { Skeleton } from '@shared/components/atoms/Skeleton';
import { Search, Compass, Flame } from 'lucide-react';
import { Input } from '@shared/components/atoms/Input';

export function ConsumerDashboard() {
  const { data: feed, isLoading } = useConsumerFeed();
  const handleRestaurantClick = (id: string) => {
    // In a full implementation this would navigate to /app/restaurant/:id
    console.log('Navigate to restaurant', id);
  };

  return (
    <div className="max-w-5xl mx-auto pb-12 animate-in fade-in duration-500">
      
      {/* Header & Search */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">What are you craving?</h1>
        <p className="text-gray-400 mb-6">Discover the best food and drinks in your area.</p>
        
        <div className="relative max-w-2xl">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <Input 
            type="text" 
            placeholder="Search for restaurants, cuisines, or dishes..." 
            className="pl-12 h-14 bg-gray-900 border-gray-800 text-lg rounded-2xl shadow-xl"
          />
        </div>
      </div>

      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900/50">
              <Skeleton className="h-48 w-full rounded-none" />
              <div className="p-4 space-y-3">
                <Skeleton className="h-6 w-2/3" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-12">
          
          {/* Promoted Section */}
          {feed?.promotedRestaurants && feed.promotedRestaurants.length > 0 && (
            <section>
              <div className="flex items-center gap-2 mb-4">
                <Flame className="w-5 h-5 text-amber-500" />
                <h2 className="text-xl font-bold text-white">Featured Near You</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {feed.promotedRestaurants.map(restaurant => (
                  <RestaurantCard 
                    key={restaurant.id} 
                    restaurant={restaurant} 
                    onClick={handleRestaurantClick}
                  />
                ))}
              </div>
            </section>
          )}

          {/* All Restaurants */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Compass className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-bold text-white">Explore All</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {feed?.allRestaurants.map(restaurant => (
                <RestaurantCard 
                  key={restaurant.id} 
                  restaurant={restaurant} 
                  onClick={handleRestaurantClick}
                />
              ))}
            </div>
          </section>

        </div>
      )}
    </div>
  );
}
