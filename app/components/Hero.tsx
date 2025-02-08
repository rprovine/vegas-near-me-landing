import { Button } from "@/components/ui/button";
import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={`${styles.heroSection} h-[70vh] flex items-center`}>
      <div className="container mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 shadow-text">
          Experience the{" "}
          <span className="text-red-500 font-extrabold italic">Best</span> of
          Las Vegas
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8 shadow-text">
          Discover and book the hottest shows and events this February
        </p>
        <p className="text-2xl md:text-3xl text-white font-bold mb-8 shadow-text">
          These are our{" "}
          <span className="text-red-500 font-extrabold italic">TOP 5</span> Show
          Suggestions
          <br />
          For February
        </p>
        <div className="mt-4">
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
        <p className="text-lg md:text-xl text-white/90 mt-16 italic shadow-text max-w-2xl mx-auto font-medium leading-relaxed">
          Our selections are curated by our expert team of Las Vegas Data
          Specialists utilizing a combination of personal experiences, data
          analysis, and sales data.
        </p>
      </div>
    </section>
  );
}
