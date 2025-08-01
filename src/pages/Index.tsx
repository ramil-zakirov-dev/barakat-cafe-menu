import { useState } from "react";
import Navigation from "@/components/Navigation";
import DishCard from "@/components/DishCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { dishes, categories } from "@/data/dishes";
import heroImage from "@/assets/hero-restaurant.jpg";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("Первые блюда");

  const filteredDishes = selectedCategory === "Все" 
    ? dishes 
    : dishes.filter(dish => dish.category === selectedCategory);

  const specialOffers = dishes.filter(dish => dish.isSpecial);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Интерьер ресторана Баракат-кафе"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-background/40"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-emerald bg-clip-text text-transparent">
            Баракат-кафе
          </h1>
          <p className="text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto">
            Аутентичная халяльная кухня в современной атмосфере. Откройте для себя вкусы Востока.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
            Посмотреть меню
          </Button>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-20 bg-warm-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Спецпредложения
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Попробуйте наши фирменные блюда по специальным ценам
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {specialOffers.map((dish) => (
              <div key={dish.id} className="relative">
                <Badge className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground">
                  Спецпредложение
                </Badge>
                <DishCard dish={dish} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              Наше меню
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Широкий выбор традиционных блюд восточной кухни, приготовленных по классическим рецептам
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {/* <Button
              variant={selectedCategory === "Все" ? "default" : "outline"}
              onClick={() => setSelectedCategory("Все")}
              className="mb-2"
            >
              Все
            </Button> */}
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className="mb-2"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Dishes Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                О ресторане
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Баракат-кафе — это место, где традиции восточной кухни встречаются с современным сервисом. 
                Мы гордимся тем, что предлагаем только халяльные продукты высочайшего качества.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Наши повара используют только свежие ингредиенты и традиционные рецепты, 
                передаваемые из поколения в поколение. Каждое блюдо готовится с душой и любовью.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">100%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Халяльные продукты</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">5+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">Лет опыта</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="relative">
              <img
                src={heroImage}
                alt="О ресторане"
                className="w-full h-96 object-cover rounded-lg shadow-[var(--shadow-elegant)]"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Index;
