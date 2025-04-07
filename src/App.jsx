import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingImage from "./components/LandingImage";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans" >
      <Header />
      <LandingImage />

      <main className="p-6">
        <h2 className="text-2xl font-semibold">Miracle Cafe</h2>
        <p className="mt-2 text-gray-600">Site for Miracle Cafe.</p>
      </main>

      <Footer />
    </div>
  );
}