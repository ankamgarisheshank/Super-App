import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@shared/components/atoms/Button';
import { CheckCircle, Package, Truck, Home } from 'lucide-react';
// In a real app, you would use useOrderDetails(orderId) and useRealtimeSync to update this.

export function TrackingPage() {
  const { orderId } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto py-12 px-4 sm:px-6 animate-in fade-in duration-500">
      
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-green-500/20 text-green-500 mb-6">
          <CheckCircle className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-bold text-white tracking-tight mb-2">Order Confirmed!</h1>
        <p className="text-gray-400">Your order #{orderId} has been successfully placed.</p>
      </div>

      <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 relative mb-8">
        <div className="absolute top-0 bottom-0 left-[39px] w-px bg-gray-800" />

        <div className="relative z-10 flex items-start gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center border-4 border-gray-900 shrink-0 shadow-[0_0_15px_rgba(59,130,246,0.5)]">
            <Package className="w-5 h-5 text-white" />
          </div>
          <div className="pt-2">
            <h3 className="text-lg font-bold text-white">Order Accepted</h3>
            <p className="text-sm text-gray-400">The restaurant has started preparing your food.</p>
          </div>
        </div>

        <div className="relative z-10 flex items-start gap-4 mb-8 opacity-50">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border-4 border-gray-900 shrink-0">
            <Truck className="w-5 h-5 text-gray-400" />
          </div>
          <div className="pt-2">
            <h3 className="text-lg font-bold text-gray-300">Out for Delivery</h3>
            <p className="text-sm text-gray-500">Waiting for driver assignment.</p>
          </div>
        </div>

        <div className="relative z-10 flex items-start gap-4 opacity-50">
          <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center border-4 border-gray-900 shrink-0">
            <Home className="w-5 h-5 text-gray-400" />
          </div>
          <div className="pt-2">
            <h3 className="text-lg font-bold text-gray-300">Delivered</h3>
            <p className="text-sm text-gray-500">Estimated delivery: 45 minutes.</p>
          </div>
        </div>
      </div>

      <Button className="w-full h-12" variant="outline" onClick={() => navigate('/app/dashboard')}>
        Back to Dashboard
      </Button>
    </div>
  );
}
