import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 py-4 transition-colors duration-300 ${
          isScrolled ? "bg-[#FAEADD85] shadow-md" : "bg-[#FAEADD]"
        }`}
      >
        {/* <h1 className="text-xl font-lemon text-black-800">Miracle Cafe</h1> */}

        <img src="/site_images/miracle_name2.png" alt="Miracle Name" className="max-h-8" />

        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex gap-6 font-kopik text-black-700">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/aboutUs" className="hover:underline">About Us</Link>
          <Link to="/location" className="hover:underline">Location</Link>
          <Link to="/thriftShop" className="hover:underline">Thrift Shop</Link>
        </nav>
      </header>

      {menuOpen && (
        <nav
        className={`fixed top-[72px] left-0 w-full flex flex-col md:hidden items-center font-kopik text-center gap-4 px-6 py-4 shadow-md z-40 transition-colors duration-300 ${
          isScrolled ? "bg-[#FAEADD]" : "bg-[#FAEADD]"
        }`}
      >
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/aboutUs" className="hover:underline">About Us</Link>
        <Link to="/location" className="hover:underline">Location</Link>
        <Link to="/thriftShop" className="hover:underline">Thrift Shop</Link>
        </nav>      
      
      )}
    </>
  );
}
