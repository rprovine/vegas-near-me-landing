import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-8 py-6 flex justify-between items-center">
        <Link href="/" className="flex items-center mr-4">
          <Image
            src="/VNM_Dark.png"
            alt="VegasNearMe Logo"
            width={140}
            height={140}
            priority
            className="p-2"
          />
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link
                href="https://vegasnearme.com"
                className="text-gray-600 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="https://www.vegasnearme.com/shows/in/February-2025"
                className="text-gray-600 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shows
              </Link>
            </li>
            <li>
              <Link
                href="https://www.vegasnearme.com/blog"
                className="text-gray-600 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="https://site.vegasnearme.com/contact"
                className="text-gray-600 hover:text-gray-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
