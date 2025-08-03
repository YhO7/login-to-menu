import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import restaurantHero from "@/assets/restaurant-hero.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen relative flex items-center justify-center">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${restaurantHero})` }}
      />
      <div className="absolute inset-0 bg-foreground/40" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
          Bella Vista
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
          Experience culinary excellence in an atmosphere of refined elegance. 
          Where every dish tells a story of passion and perfection.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            variant="elegant" 
            size="lg"
            onClick={() => navigate("/login")}
            className="text-lg px-8 py-6"
          >
            Enter Restaurant
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
