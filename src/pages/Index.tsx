import { Header } from "@/components/Header";
import { MonthTabs } from "@/components/MonthTabs";
import { FeaturedShelf } from "@/components/FeaturedShelf";
import { ContentCarousel } from "@/components/ContentCarousel";
import { Footer } from "@/components/Footer";

// Sample carousel data
const newReleases = [
  { id: "1", title: "New Series #1", coverUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop" },
  { id: "2", title: "New Series #2", coverUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
  { id: "3", title: "New Series #3", coverUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop" },
  { id: "4", title: "New Series #4", coverUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop" },
  { id: "5", title: "New Series #5", coverUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop" },
];

const popularSeries = [
  { id: "6", title: "Popular #1", coverUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
  { id: "7", title: "Popular #2", coverUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop" },
  { id: "8", title: "Popular #3", coverUrl: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=400&h=600&fit=crop" },
  { id: "9", title: "Popular #4", coverUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop" },
  { id: "10", title: "Popular #5", coverUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop" },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <MonthTabs />
      
      <main>
        <FeaturedShelf />
        
        <div className="space-y-8 pb-12">
          <ContentCarousel title="New Releases" items={newReleases} />
          <ContentCarousel title="Popular Series" items={popularSeries} />
          <ContentCarousel title="Staff Picks" items={newReleases} />
          <ContentCarousel title="Free for Limited Time" items={popularSeries} />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
