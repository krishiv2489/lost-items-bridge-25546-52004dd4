import { Package } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Package className="h-5 w-5" />
            <span className="text-sm">Campus Lost & Found</span>
          </div>
          <p className="text-sm text-muted-foreground text-center">
            Helping students reunite with their lost belongings
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
