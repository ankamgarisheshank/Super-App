import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-surface-50">
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold text-xl">S</div>
            <h1 className="text-xl font-bold text-surface-900 tracking-tight">SuperApp</h1>
          </div>
          <nav className="hidden md:flex gap-6">
            <a href="#" className="text-surface-900 font-medium hover:text-primary-500 transition-colors">Delivery</a>
            <a href="#" className="text-surface-900 font-medium hover:text-primary-500 transition-colors">Dining</a>
            <a href="#" className="text-surface-900 font-medium hover:text-primary-500 transition-colors">Instamart</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-surface-900 hover:text-primary-500 font-medium">Log in</button>
            <button className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full font-medium transition-all active:scale-95 shadow-sm">
              Sign up
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 max-w-7xl mx-auto px-4 py-8 w-full">
        <div className="bg-gradient-to-r from-primary-500 to-rose-500 rounded-3xl p-8 md:p-12 text-white shadow-xl">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Hungry? You're in the right place.</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl">
            Order food from favourite restaurants near you. Experience the best delivery service.
          </p>
          <div className="flex bg-white rounded-full p-2 max-w-xl shadow-lg focus-within:ring-4 ring-primary-500/20 transition-all">
            <input 
              type="text" 
              placeholder="Search for restaurant, cuisine or a dish" 
              className="flex-1 px-4 py-2 text-surface-900 outline-none bg-transparent"
            />
            <button className="bg-primary-500 text-white px-6 py-2 rounded-full font-medium hover:bg-primary-600 transition-colors">
              Find Food
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer border border-surface-100 group">
              <div className="bg-surface-100 aspect-video rounded-xl mb-4 overflow-hidden">
                {/* Placeholder for restaurant image */}
                <div className="w-full h-full bg-surface-100 group-hover:scale-105 transition-transform duration-500"></div>
              </div>
              <h3 className="text-lg font-bold text-surface-900">Premium Restaurant {i}</h3>
              <p className="text-sm text-surface-900/60 mt-1">North Indian, Chinese • ₹400 for two</p>
              <div className="mt-3 flex items-center gap-2">
                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-1 rounded-md">4.{i} ★</span>
                <span className="text-xs text-surface-900/60">30-40 min</span>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
