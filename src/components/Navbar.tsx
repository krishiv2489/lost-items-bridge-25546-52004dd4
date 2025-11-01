import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Package } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <Package className="h-6 w-6" />
            <span>Campus Lost & Found</span>
          </Link>
          
          <div className="hidden md:flex items-center gap-6">
            <Link 
              to="/browse" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/browse') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Browse Items
            </Link>
            <Link 
              to="/report-lost" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/report-lost') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Report Lost
            </Link>
            <Link 
              to="/report-found" 
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/report-found') ? 'text-primary' : 'text-muted-foreground'
              }`}
            >
              Report Found
            </Link>
          </div>
          
          <Button asChild size="sm">
            <Link to="/browse">
              <Search className="h-4 w-4 mr-2" />
              Search Items
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
