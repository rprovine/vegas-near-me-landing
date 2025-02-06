import Header from "./components/Header"
import Hero from "./components/Hero"
import ShowCard from "./components/ShowCard"

const topShows = [
  {
    id: 1,
    name: "Cirque du Soleil - O",
    description: "An aquatic tapestry of artistry, surrealism and theatrical romance.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/cirque-du-soleil-o",
  },
  {
    id: 2,
    name: "Penn & Teller",
    description: "World-famous magicians Penn & Teller present their one-of-a-kind magic and comedy show.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/penn-and-teller",
  },
  {
    id: 3,
    name: "Absinthe",
    description: "A fantastical blend of carnival and spectacle, featuring wild and outlandish acts.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/absinthe",
  },
  {
    id: 4,
    name: "Lady Gaga - Enigma",
    description: "A dazzling and multi-award winning show celebrating the hits of Lady Gaga.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/lady-gaga-enigma",
  },
  {
    id: 5,
    name: "David Copperfield",
    description: "The legendary magician David Copperfield presents an evening of grand illusions.",
    image: "/placeholder.svg?height=400&width=600",
    link: "https://example.com/david-copperfield",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      <Header />
      <Hero />
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Top 5 Shows in Las Vegas This February</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {topShows.map((show) => (
            <ShowCard key={show.id} show={show} />
          ))}
        </div>
      </section>
    </main>
  )
}

