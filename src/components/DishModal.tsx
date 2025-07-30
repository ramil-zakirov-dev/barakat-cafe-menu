import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Dish {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  longDescription?: string;
}

interface DishModalProps {
  dish: Dish | null;
  isOpen: boolean;
  onClose: () => void;
}

const DishModal = ({ dish, isOpen, onClose }: DishModalProps) => {
  if (!dish) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-2xl font-bold text-foreground pr-8">
              {dish.name}
            </DialogTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="h-8 w-8 p-0"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>
        
        <div className="space-y-6">
          <div className="aspect-video overflow-hidden rounded-lg">
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-3xl font-bold text-primary">
                {dish.price} ₽
              </span>
              <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
                {dish.category}
              </span>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-2">Описание</h4>
              <p className="text-muted-foreground leading-relaxed">
                {dish.longDescription || dish.description}
              </p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default DishModal;