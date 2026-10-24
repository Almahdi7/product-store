import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-800 text-white">
      <div className="flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">AlmahdiStore</h1>

        <nav className="hidden md:flex gap-6">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
        </nav>

        <button
          type="button"
          className="md:hidden border border-white rounded px-3 py-1 text-2xl leading-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? "×" : "☰"}
        </button>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden flex flex-col gap-2 p-4 pt-0">
          <a href="#" className="hover:underline">
            Home
          </a>
          <a href="#products" className="hover:underline">
            Products
          </a>
        </nav>
      )}
    </header>
  );
}

export default Header;