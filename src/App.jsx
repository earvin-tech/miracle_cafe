import { useState } from "react";
import Header from "./components/Header";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      <Header />

      <main className="p-6">
        <h2 className="text-2xl font-semibold">Miracle Cafe</h2>
        <p className="mt-2 text-gray-600">Site for Miracle Cafe.</p>
      </main>
    </div>
  );
}