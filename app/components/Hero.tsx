import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="bg-cover bg-center h-[70vh] flex items-center"
      style={{
        backgroundImage: "url('/placeholder.jpg?height=1080&width=1920')",
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-text">
          Experience the Best of Las Vegas
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 shadow-text">
          Discover and book the hottest shows and events this February
        </p>
        <Link
          href="https://www.vegasnearme.com/shows/in/February-2025"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-300 transform hover:scale-105"
          >
            Explore Top Shows
          </Button>
        </Link>
      </div>
    </section>
  );
}
