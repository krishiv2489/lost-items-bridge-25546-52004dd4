import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Search, Package, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import heroImage from "@/assets/nirma-campus-enhanced.jpg";

const Home = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <img 
            src={heroImage} 
            alt="NIRMA Campus" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          <div className="relative container mx-auto px-4 py-24 md:py-32">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
                NIRMA LOST AND FOUND PORTAL
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow">
                Quickly report, search, and reclaim lost items with our streamlined campus system
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="secondary" className="shadow-strong">
                  <Link to="/browse">
                    <Search className="mr-2 h-5 w-5" />
                    Search Items
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="bg-white/10 backdrop-blur border-white/20 text-white hover:bg-white/20">
                  <Link to="/report-lost">
                    Report Lost Item
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-hero flex items-center justify-center shadow-medium">
                  <Search className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Search Database</h3>
                <p className="text-muted-foreground">
                  Browse through reported items with filters for category, location, and date
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-gradient-hero flex items-center justify-center shadow-medium">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold">Report Items</h3>
                <p className="text-muted-foreground">
                  Quickly submit details about lost or found items with our simple forms
                </p>
              </div>
              
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-success flex items-center justify-center shadow-medium">
                  <CheckCircle className="h-8 w-8 text-success-foreground" />
                </div>
                <h3 className="text-xl font-semibold">Get Reunited</h3>
                <p className="text-muted-foreground">
                  Connect with others to securely reclaim your lost belongings
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto bg-gradient-card rounded-2xl p-8 md:p-12 shadow-strong border border-border">
              <div className="text-center space-y-6">
                <h2 className="text-3xl font-bold">Found Something?</h2>
                <p className="text-lg text-muted-foreground">
                  Help a fellow student by reporting found items. Together we can reunite everyone with their belongings.
                </p>
                <Button asChild size="lg" className="shadow-medium">
                  <Link to="/report-found">
                    Report Found Item
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
