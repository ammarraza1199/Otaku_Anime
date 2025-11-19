import { BookCard } from "./BookCard";

const featuredBooks = [
  {
    title: "ONE PIECE",
    coverUrl: "https://images.unsplash.com/photo-1618519764620-7403abdbdfe9?w=400&h=600&fit=crop",
    status: "New" as const,
  },
  {
    title: "JUJUTSU KAISEN",
    coverUrl: "https://images.unsplash.com/photo-1612036782180-6f0b6cd846fe?w=400&h=600&fit=crop",
    status: "Updated" as const,
  },
  {
    title: "NARUTO SHIPPUDEN",
    coverUrl: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    status: "Premium" as const,
  },
];

export const FeaturedShelf = () => {
  return (
    <section className="w-full py-12 bg-gradient-to-b from-background to-muted/20">
      <div className="container px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-gold">
          Featured This Month
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {featuredBooks.map((book) => (
            <BookCard
              key={book.title}
              title={book.title}
              coverUrl={book.coverUrl}
              status={book.status}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
