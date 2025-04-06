import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
  
    return (
      <>
        <header className="flex items-center justify-between px-6 py-4 bg-[#FAEADD] shadow-md">
          <h1 className="text-xl font-lemon text-black-800">Miracle Cafe</h1>
  
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
  
          <nav className="hidden md:flex gap-6 text-gray-700">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Location</a>
            <a href="#">Thrift Shop</a>
          </nav>
        </header>
  
        {menuOpen && (
          <nav className="flex flex-col md:hidden items-center text-center gap-4 px-6 py-4 bg-lightgray/30 shadow-md">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Location</a>
            <a href="#">Thrift Shop</a>
          </nav>
        )}
      </>
    );
  }