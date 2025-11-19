import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface CarouselItem {
  id: string;
  title: string;
  coverUrl: string;
}

interface ContentCarouselProps {
  title: string;
  items: CarouselItem[];
}

export const ContentCarousel = ({ title, items }: ContentCarouselProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById(`carousel-${title}`);
    if (container) {
      const scrollAmount = direction === "left" ? -300 : 300;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="w-full py-8">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gold">{title}</h2>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("left")}
              className="text-foreground hover:text-gold"
              aria-label="Scroll left"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => scroll("right")}
              className="text-foreground hover:text-gold"
              aria-label="Scroll right"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div
          id={`carousel-${title}`}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
          role="list"
        >
          {items.map((item) => (
            <div
              key={item.id}
              className="flex-shrink-0 w-40 snap-start group cursor-pointer"
              role="listitem"
            >
              <div className="aspect-[2/3] overflow-hidden rounded-lg bg-card shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-gold">
                <img
                  src={item.coverUrl}
                  alt={item.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-2 text-sm text-center text-foreground line-clamp-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
