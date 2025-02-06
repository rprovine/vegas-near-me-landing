import Image from "next/image"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/placeholder.svg?height=50&width=50"
            alt="VegasNearMe Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-xl font-bold text-gray-800">VegasNearMe</span>
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Home
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Shows
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                About
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

