import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Skip rendering if we are at root
  if (pathnames.length === 0) return null;

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400" aria-label="Breadcrumb">
      <Link to="/" className="hover:text-white transition-colors">
        <Home className="h-4 w-4" />
        <span className="sr-only">Home</span>
      </Link>
      
      {pathnames.map((value, index) => {
        const isLast = index === pathnames.length - 1;
        const to = `/${pathnames.slice(0, index + 1).join('/')}`;

        // Format label (e.g., "dashboard" -> "Dashboard", "user-management" -> "User Management")
        const label = value
          .split('-')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');

        return (
          <div key={to} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 flex-shrink-0 text-gray-600" aria-hidden="true" />
            {isLast ? (
              <span className="font-medium text-white truncate max-w-[150px] sm:max-w-[300px]">
                {label}
              </span>
            ) : (
              <Link to={to} className="hover:text-white transition-colors truncate max-w-[150px] sm:max-w-[300px]">
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}
