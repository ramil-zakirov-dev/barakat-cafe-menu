import { useParams, useNavigate } from "react-router-dom";
import { dishes } from "@/data/dishes";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Navigation from "@/components/Navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const DishDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dish = dishes.find(d => d.id === id);

  if (!dish) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Блюдо не найдено</h1>
            <Button onClick={() => navigate("/")}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Вернуться к меню
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container mx-auto px-4 py-16">
        <Button 
          variant="outline" 
          onClick={() => navigate("/")}
          className="mb-6"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Вернуться к меню
        </Button>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative">
              <Carousel className="w-full">
                <CarouselContent>
                  {dish.images.map((image, index) => (
                    <CarouselItem key={index}>
                      <div className="aspect-square overflow-hidden rounded-lg">
                        <img
                          src={image}
                          alt={`${dish.name} - фото ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
              </Carousel>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-foreground">
                    {dish.name}
                  </h1>
                  {dish.isSpecial && (
                    <span className="px-3 py-1 bg-gradient-primary text-white rounded-full text-sm font-medium">
                      Спецпредложение
                    </span>
                  )}
                </div>
                <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                  {dish.category}
                </span>
              </div>
              
              <div className="text-4xl font-bold text-primary">
                {dish.price} ₽
              </div>
              
              <div>
                <h3 className="font-semibold text-xl mb-3">Описание</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {dish.longDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DishDetails;