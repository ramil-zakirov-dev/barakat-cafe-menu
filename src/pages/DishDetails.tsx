import React, { useState, useCallback, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { dishes } from "@/data/dishes";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize, X } from "lucide-react";
import Navigation from "@/components/Navigation";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselApi,
} from "@/components/ui/carousel";

const DishDetails = () => {
  const { index } = useParams();
  const navigate = useNavigate();
  const dish = dishes[index];
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [fullscreenApi, setFullscreenApi] = useState<CarouselApi>();
  const [fullscreenCurrent, setFullscreenCurrent] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleDotClick = useCallback((index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  }, [api]);

  const handleFullscreenDotClick = useCallback((index: number) => {
    if (fullscreenApi) {
      fullscreenApi.scrollTo(index);
    }
  }, [fullscreenApi]);

  const openFullscreen = useCallback(() => {
    setFullscreenCurrent(current);
    setIsFullscreen(true);
  }, [current]);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!fullscreenApi) {
      return;
    }

    setFullscreenCurrent(fullscreenApi.selectedScrollSnap());

    fullscreenApi.on("select", () => {
      setFullscreenCurrent(fullscreenApi.selectedScrollSnap());
    });
  }, [fullscreenApi]);

  useEffect(() => {
    if (isFullscreen && fullscreenApi) {
      fullscreenApi.scrollTo(current);
    }
  }, [isFullscreen, fullscreenApi, current]);

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
              <Carousel className="w-full" setApi={setApi}>
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
              
              {/* Кнопка полноэкранного режима */}
              <Button
                variant="outline"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                onClick={openFullscreen}
                aria-label="Открыть в полноэкранном режиме"
              >
                <Maximize className="h-4 w-4" />
              </Button>
              
              {/* Индикаторы точек */}
              <div className="flex justify-center gap-2 mt-4">
                {dish.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleDotClick(index)}
                    className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                      index === current 
                        ? "bg-primary" 
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Перейти к фото ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <h1 className="text-3xl font-bold text-foreground">
                    {dish.name}
                  </h1>
                  {dish.isSpecial && (
                    <span className="px-3 py-1 bg-gradient-primary text-primary rounded-full text-sm font-medium">
                      Блюдо дня
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

        {/* Полноэкранная галерея */}
        <Dialog open={isFullscreen} onOpenChange={setIsFullscreen}>
          <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 border-none bg-black/95">
            <div className="relative w-full h-[90vh]">
              <Carousel className="w-full h-full" setApi={setFullscreenApi}>
                <CarouselContent className="h-full">
                  {dish.images.map((image, index) => (
                    <CarouselItem key={index} className="h-full">
                      <div className="h-full flex items-center justify-center">
                        <img
                          src={image}
                          alt={`${dish.name} - фото ${index + 1}`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
                <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20" />
              </Carousel>
              
              {/* Кнопка закрытия */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 text-white hover:bg-white/20"
                onClick={() => setIsFullscreen(false)}
                aria-label="Закрыть полноэкранный режим"
              >
                <X className="h-6 w-6" />
              </Button>
              
              {/* Индикаторы точек для полноэкранного режима */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {dish.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleFullscreenDotClick(index)}
                    className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                      index === fullscreenCurrent 
                        ? "bg-white" 
                        : "bg-white/40 hover:bg-white/60"
                    }`}
                    aria-label={`Перейти к фото ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default DishDetails;