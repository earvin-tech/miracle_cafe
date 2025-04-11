import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Location from "./pages/Location";

// import Header from "./components/Header";
// import Footer from "./components/Footer";
// import HeroImage from "./components/HeroImage";
// import Carousel from "./components/Carousel";
// import SiteIntro from "./components/Intro";

// export default function App() {
//   return (
//     <div className="min-h-screen bg-gray-100 font-sans" >
//       <Header />
//       <HeroImage />
//       <SiteIntro />
//       <Carousel />
//       <Footer />
//     </div>
//   );
// }



export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/location" element={<Location />} />

    </Routes>
  );
}