import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BookCardProps {
  title: string;
  coverUrl: string;
  status?: "New" | "Updated" | "Premium";
  onClick?: () => void;
}

export const BookCard = ({ title, coverUrl, status, onClick }: BookCardProps) => {
  return (
    <div 
      className="group relative w-full max-w-[300px] cursor-pointer"
      onClick={onClick}
    >
      {/* Book card with stacked page effect */}
      <div className="relative overflow-hidden rounded-lg bg-card shadow-book transition-all duration-300 hover:-translate-y-2 hover:shadow-gold">
        {/* Cover image area */}
        <div className="aspect-[2/3] relative overflow-hidden">
          <img 
            src={coverUrl} 
            alt={`${title} cover`}
            className="h-full w-full object-cover"
          />
          
          {/* Stacked pages effect on the right edge */}
          <div className="absolute right-0 top-0 bottom-0 w-3 bg-gradient-to-r from-transparent to-muted/30">
            <div className="absolute right-1 top-2 bottom-2 w-px bg-border opacity-60" />
            <div className="absolute right-2 top-4 bottom-4 w-px bg-border opacity-40" />
            <div className="absolute right-3 top-6 bottom-6 w-px bg-border opacity-20" />
          </div>
        </div>
        
        {/* Title area */}
        <div className="p-4 bg-gradient-to-b from-card to-muted/50">
          <h3 className="text-center font-bold text-foreground leading-tight line-clamp-2">
            {title}
          </h3>
        </div>

        {/* Status badge */}
        {status && (
          <Badge 
            className="absolute top-3 left-3 bg-gold text-primary-foreground shadow-md"
          >
            {status}
          </Badge>
        )}

        {/* Hover actions */}
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-background/95 to-transparent p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <div className="flex gap-2 justify-center">
            <Button size="sm" variant="default" className="bg-gold hover:bg-gold-light">
              Read
            </Button>
            <Button size="sm" variant="outline">
              Add to List
            </Button>
          </div>
        </div>
      </div>

      {/* Shelf shadow */}
      <div className="absolute -bottom-2 left-1/2 h-2 w-4/5 -translate-x-1/2 rounded-full bg-background/60 blur-sm" />
    </div>
  );
};
