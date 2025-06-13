import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-white w-full">
      <nav className="flex p-6 mx-auto max-w-7xl justify-between font-mono">
        <Link href="/">
          <span className="font-mono">
            R I W A Y A
          </span>
        </Link>

        <ul className="flex items-center gap-9">
          <li>
            <Link
              href="/products"
              className="text-gray-600 hover:text-gray-900">
              products
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-gray-600 hover:text-gray-900">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
