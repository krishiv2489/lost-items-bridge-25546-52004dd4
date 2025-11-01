import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Item } from "@/types/item";
import { Calendar, MapPin, Package } from "lucide-react";

interface ItemCardProps {
  item: Item;
}

const ItemCard = ({ item }: ItemCardProps) => {
  const getCategoryIcon = () => {
    return <Package className="h-4 w-4" />;
  };

  return (
    <Link to={`/item/${item.id}`}>
      <Card className="h-full transition-all duration-300 hover:shadow-medium cursor-pointer bg-gradient-card">
        <CardHeader className="space-y-2">
          <div className="flex items-start justify-between gap-2">
            <h3 className="font-semibold text-lg line-clamp-1">{item.title}</h3>
            <Badge variant={item.status === 'found' ? 'default' : 'secondary'}>
              {item.status === 'found' ? 'Found' : 'Lost'}
            </Badge>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-3">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {item.description}
          </p>
          
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            {getCategoryIcon()}
            <span className="capitalize">{item.category}</span>
          </div>
        </CardContent>
        
        <CardFooter className="flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <MapPin className="h-3 w-3" />
            <span>{item.location}</span>
          </div>
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Calendar className="h-3 w-3" />
            <span>{new Date(item.date).toLocaleDateString()}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default ItemCard;
