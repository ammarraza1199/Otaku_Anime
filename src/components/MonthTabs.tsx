import { useState } from "react";
import { Button } from "@/components/ui/button";

const months = ["OCT2025", "NOV2025", "DEC2025"];

export const MonthTabs = () => {
  const [activeMonth, setActiveMonth] = useState("OCT2025");

  return (
    <div className="w-full border-b border-border/40 bg-muted/30">
      <div className="container px-4 py-3">
        <div 
          className="flex gap-2 justify-center" 
          role="tablist"
          aria-label="Month selection"
        >
          {months.map((month) => (
            <Button
              key={month}
              variant="ghost"
              className={`relative px-6 py-2 font-semibold transition-all ${
                activeMonth === month
                  ? "text-gold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-gold after:shadow-gold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
              onClick={() => setActiveMonth(month)}
              role="tab"
              aria-selected={activeMonth === month}
            >
              {month}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};
