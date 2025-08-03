import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { LogOut, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import grilledSalmon from "@/assets/grilled-salmon.jpg";
import pastaCarbonara from "@/assets/pasta-carbonara.jpg";
import truffleBurger from "@/assets/truffle-burger.jpg";
import chocolateLavaCake from "@/assets/chocolate-lava-cake.jpg";

interface Dish {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  isPopular?: boolean;
}

const menuItems: Dish[] = [
  {
    id: 1,
    name: "Grilled Atlantic Salmon",
    description: "Fresh Atlantic salmon grilled to perfection, served with roasted asparagus and lemon butter sauce",
    price: 28.95,
    image: grilledSalmon,
    category: "Main Course",
    rating: 4.8,
    isPopular: true,
  },
  {
    id: 2,
    name: "Pasta Carbonara",
    description: "Traditional Italian carbonara with crispy pancetta, fresh eggs, and aged Parmesan cheese",
    price: 22.50,
    image: pastaCarbonara,
    category: "Main Course",
    rating: 4.7,
  },
  {
    id: 3,
    name: "Truffle Burger",
    description: "Premium beef patty with truffle aioli, wild mushrooms, and artisanal cheese, served with truffle fries",
    price: 26.00,
    image: truffleBurger,
    category: "Main Course",
    rating: 4.9,
    isPopular: true,
  },
  {
    id: 4,
    name: "Chocolate Lava Cake",
    description: "Decadent warm chocolate cake with molten center, served with vanilla bean ice cream",
    price: 12.95,
    image: chocolateLavaCake,
    category: "Dessert",
    rating: 4.6,
  },
];

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const navigate = useNavigate();
  const { toast } = useToast();

  const categories = ["All", "Main Course", "Dessert"];
  
  const filteredItems = selectedCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory);

  const handleLogout = () => {
    toast({
      title: "Logged out successfully",
      description: "Thank you for visiting Bella Vista!",
    });
    navigate("/");
  };

  const handleAddToOrder = (dish: Dish) => {
    toast({
      title: "Added to order",
      description: `${dish.name} has been added to your order.`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-card/95 backdrop-blur-sm border-b shadow-card">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Bella Vista Menu
          </h1>
          <Button variant="outline" onClick={handleLogout} className="gap-2">
            <LogOut className="h-4 w-4" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="transition-smooth"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((dish) => (
            <Card key={dish.id} className="overflow-hidden shadow-card hover:shadow-elegant transition-smooth group">
              <div className="relative overflow-hidden">
                <img
                  src={dish.image}
                  alt={dish.name}
                  className="w-full h-48 object-cover transition-smooth group-hover:scale-105"
                />
                {dish.isPopular && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">
                    Popular
                  </Badge>
                )}
                <div className="absolute top-3 right-3 bg-card/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
                  <Star className="h-3 w-3 fill-primary text-primary" />
                  <span className="text-xs font-medium">{dish.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-2">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {dish.name}
                  </h3>
                  <Badge variant="secondary" className="text-xs">
                    {dish.category}
                  </Badge>
                </div>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-primary">
                    ${dish.price}
                  </span>
                  <Button
                    variant="elegant"
                    onClick={() => handleAddToOrder(dish)}
                    className="transition-smooth"
                  >
                    Add to Order
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;