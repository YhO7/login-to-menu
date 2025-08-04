import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHat, Utensils, Star, ArrowRight } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center space-y-12">
        {/* Logo and Title */}
        <div className="space-y-6">
          <div className="flex justify-center">
            <div className="p-6 rounded-full bg-gradient-to-r from-primary to-primary-glow shadow-elegant">
              <ChefHat className="h-16 w-16 text-primary-foreground" />
            </div>
          </div>
          <div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Bella Vista
            </h1>
            <p className="text-xl text-muted-foreground max-w-lg mx-auto">
              Experience culinary excellence in an atmosphere of refined elegance
            </p>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="border-border/50 hover:shadow-card transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-accent/20 mb-4">
                <Utensils className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Gourmet Menu</h3>
              <p className="text-sm text-muted-foreground">Carefully crafted dishes from world-class chefs</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 hover:shadow-card transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-accent/20 mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">Only the finest ingredients and exceptional service</p>
            </CardContent>
          </Card>
          
          <Card className="border-border/50 hover:shadow-card transition-smooth">
            <CardContent className="p-6 text-center">
              <div className="inline-flex p-3 rounded-full bg-accent/20 mb-4">
                <ChefHat className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Expert Chefs</h3>
              <p className="text-sm text-muted-foreground">Passionate culinary artists creating memorable experiences</p>
            </CardContent>
          </Card>
        </div>

        {/* CTA Button */}
        <div>
          <Button 
            variant="elegant" 
            size="lg"
            onClick={() => navigate("/login")}
            className="text-lg px-8 py-6 gap-2"
          >
            Enter Restaurant
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
