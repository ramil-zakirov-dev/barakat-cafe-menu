import { Card, CardContent } from "@/components/ui/card";
import { Dish } from "@/data/dishes";
import { useNavigate } from "react-router-dom";

interface DishCardProps {
  index: number;
  dish: Dish;
}

const DishCard = ({ index, dish }: DishCardProps) => {
  const navigate = useNavigate();

  return (
    <Card 
      className="group cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-warm)] hover:-translate-y-1"
      onClick={() => navigate(`/dish/${index}`)}
    >
      <CardContent className="p-0">
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
            {dish.name}
          </h3>
          <div className="flex justify-between items-center">
            <span className="text-xl font-bold text-primary">
              {dish.price} ₽
            </span>
            <div className="w-2 h-2 rounded-full bg-emerald opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DishCard;