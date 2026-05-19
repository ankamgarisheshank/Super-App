import { useState } from 'react';
import { useCartStore } from '@store/index';
import { usePlaceOrder } from '@services/order-service';
import { Button } from '@shared/components/atoms/Button';
import { Input } from '@shared/components/atoms/Input';
import { ArrowLeft, CreditCard, Wallet, Banknote, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export function CheckoutPage() {
  const navigate = useNavigate();
  const { items, restaurantId, restaurantName, getSubtotal } = useCartStore();
  const placeOrder = usePlaceOrder();
  
  const [paymentMethod, setPaymentMethod] = useState<'razorpay' | 'cash'>('razorpay');
  const [address, setAddress] = useState('123 Main St, New York');

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto py-12 text-center">
        <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
        <Button onClick={() => navigate('/app/dashboard')}>Return to Explore</Button>
      </div>
    );
  }

  const subtotal = getSubtotal();
  const deliveryFee = 4.99;
  const taxes = subtotal * 0.08;
  const total = subtotal + deliveryFee + taxes;

  const handlePlaceOrder = () => {
    if (!restaurantId) return;

    placeOrder.mutate({
      restaurantId,
      items: items.map(i => ({ menuItemId: i.menuItemId, quantity: i.quantity })),
      deliveryAddress: { lat: 40.7128, lng: -74.006, address },
      paymentMethod,
    });
  };

  return (
    <div className="max-w-4xl mx-auto pb-12 animate-in fade-in duration-500">
      <button 
        onClick={() => navigate(-1)}
        className="flex items-center text-sm font-medium text-gray-400 hover:text-white mb-6 transition-colors"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back
      </button>

      <h1 className="text-3xl font-bold text-white tracking-tight mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Forms */}
        <div className="lg:col-span-2 space-y-6">
          
          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <MapPin className="text-blue-500 w-5 h-5" />
              Delivery Address
            </h2>
            <Input 
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="bg-gray-950 border-gray-700"
            />
          </section>

          <section className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2 mb-4">
              <CreditCard className="text-blue-500 w-5 h-5" />
              Payment Method
            </h2>
            <div className="space-y-3">
              <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === 'razorpay' ? 'border-blue-500 bg-blue-500/10' : 'border-gray-800 bg-gray-950 hover:bg-gray-900'}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="razorpay" 
                  checked={paymentMethod === 'razorpay'} 
                  onChange={() => setPaymentMethod('razorpay')}
                  className="mr-3 text-blue-500 bg-gray-800 border-gray-700 focus:ring-blue-500"
                />
                <Wallet className="w-5 h-5 mr-3 text-gray-400" />
                <span className="font-medium text-white">Razorpay / Credit Card</span>
              </label>

              <label className={`flex items-center p-4 rounded-xl border cursor-pointer transition-colors ${paymentMethod === 'cash' ? 'border-blue-500 bg-blue-500/10' : 'border-gray-800 bg-gray-950 hover:bg-gray-900'}`}>
                <input 
                  type="radio" 
                  name="payment" 
                  value="cash" 
                  checked={paymentMethod === 'cash'} 
                  onChange={() => setPaymentMethod('cash')}
                  className="mr-3 text-blue-500 bg-gray-800 border-gray-700 focus:ring-blue-500"
                />
                <Banknote className="w-5 h-5 mr-3 text-gray-400" />
                <span className="font-medium text-white">Cash on Delivery</span>
              </label>
            </div>
          </section>
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-1">
          <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 sticky top-24">
            <h2 className="text-xl font-bold text-white mb-4">Order Summary</h2>
            <p className="text-sm text-gray-400 mb-6 uppercase tracking-wider">{restaurantName}</p>
            
            <div className="space-y-4 mb-6">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="text-gray-300"><span className="text-gray-500 font-bold mr-2">{item.quantity}x</span>{item.name}</span>
                  <span className="text-white font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-4 space-y-3 mb-6 text-sm">
              <div className="flex justify-between text-gray-400">
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Delivery Fee</span>
                <span>${deliveryFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-gray-400">
                <span>Taxes</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-4 mb-6">
              <div className="flex justify-between items-center text-lg font-bold text-white">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button 
              className="w-full h-12 text-base font-bold" 
              onClick={handlePlaceOrder}
              isLoading={placeOrder.isPending}
            >
              Place Order
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
}
