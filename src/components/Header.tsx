import { useState } from "react";
import { Heart, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import otakuLogo from "@/assets/otaku-library-logo.jpg";

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between gap-4 px-4">
        {/* Left section: Login, Signup, Heart */}
        <div className="flex items-center gap-4">
          <Button 
            variant="ghost" 
            className="text-foreground hover:text-gold"
            onClick={() => navigate("/auth")}
          >
            Login
          </Button>
          <Button 
            variant="outline" 
            className="border-gold text-gold hover:bg-gold hover:text-primary-foreground"
            onClick={() => navigate("/auth")}
          >
            Signup
          </Button>
          <Button 
            variant="ghost" 
            size="icon"
            className="text-foreground hover:text-gold"
            aria-label="Favorites"
          >
            <Heart className="h-5 w-5" />
          </Button>
        </div>

        {/* Center section: Search */}
        <div className="flex-1 max-w-md">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search manga, author, genre..."
              className="w-full pl-10 bg-muted/50 border-border focus:border-gold"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search site"
            />
          </div>
        </div>

        {/* Right section: Logo badge */}
        <div className="flex items-center">
          <div className="rounded-full bg-card p-2 shadow-gold border-2 border-gold/30 hover:border-gold/60 transition-all cursor-pointer">
            <img 
              src={otakuLogo} 
              alt="Otaku Library" 
              className="h-12 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
