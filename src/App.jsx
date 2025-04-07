import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingImage from "./components/LandingImage";
import Carousel from "./components/Carousel";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans" >
      <Header />
      <LandingImage />
      <Carousel />
      <h1 className="text-center mt-10 mb-10" >Check Out Our Instagram!</h1>
      <Footer />
    </div>
  );
}