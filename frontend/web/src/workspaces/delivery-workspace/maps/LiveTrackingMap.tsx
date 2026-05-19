import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import type { Delivery, Driver } from '@services/delivery-service';

// Fix Leaflet's default icon paths in React
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

// Custom Icons
const DriverIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div class="h-6 w-6 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center"><div class="h-2 w-2 bg-white rounded-full"></div></div>`,
  iconSize: [24, 24],
  iconAnchor: [12, 12],
});

const PickupIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div class="h-5 w-5 bg-amber-500 rounded-full border-2 border-white shadow-lg"></div>`,
  iconSize: [20, 20],
});

const DropoffIcon = L.divIcon({
  className: 'custom-div-icon',
  html: `<div class="h-5 w-5 bg-green-500 rounded-full border-2 border-white shadow-lg"></div>`,
  iconSize: [20, 20],
});

interface MapProps {
  deliveries: Delivery[];
  drivers: Driver[];
}



export function LiveTrackingMap({ deliveries, drivers }: MapProps) {
  const defaultCenter: [number, number] = [40.7128, -74.0060]; // NY

  return (
    <div className="h-full w-full rounded-2xl overflow-hidden border border-gray-800 relative z-0">
      <MapContainer 
        center={defaultCenter} 
        zoom={13} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', background: '#111827' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        {/* Render Drivers */}
        {drivers.map(driver => driver.currentLocation && (
          <Marker 
            key={driver.id} 
            position={[driver.currentLocation.lat, driver.currentLocation.lng]}
            icon={DriverIcon}
          >
            <Popup className="bg-gray-900 border-gray-800 text-white">
              <div className="text-gray-900 font-medium p-1">
                <p className="font-bold">{driver.name}</p>
                <p className="text-xs text-gray-500 capitalize">{driver.status.replace('_', ' ')}</p>
              </div>
            </Popup>
          </Marker>
        ))}

        {/* Render Deliveries */}
        {deliveries.map(delivery => {
          if (delivery.status === 'pending') {
            return (
              <Marker 
                key={delivery.id} 
                position={[delivery.pickupLocation.lat, delivery.pickupLocation.lng]}
                icon={PickupIcon}
              >
                <Popup>
                  <div className="text-gray-900">
                    <p className="font-bold text-sm">Pickup Pending</p>
                    <p className="text-xs">{delivery.pickupLocation.address}</p>
                  </div>
                </Popup>
              </Marker>
            );
          }
          if (delivery.status === 'in_transit') {
            return (
              <Marker 
                key={delivery.id} 
                position={[delivery.dropoffLocation.lat, delivery.dropoffLocation.lng]}
                icon={DropoffIcon}
              >
                <Popup>
                  <div className="text-gray-900">
                    <p className="font-bold text-sm">Dropoff Target</p>
                    <p className="text-xs">{delivery.dropoffLocation.address}</p>
                    <p className="text-xs font-medium text-blue-600 mt-1">ETA: {new Date(delivery.estimatedTimeOfArrival!).toLocaleTimeString()}</p>
                  </div>
                </Popup>
              </Marker>
            );
          }
          return null;
        })}
      </MapContainer>
    </div>
  );
}
