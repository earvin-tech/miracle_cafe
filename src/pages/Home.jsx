import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroImage from "../components/HeroImage";
import Carousel from "../components/Carousel";
import SiteIntro from "../components/Intro";
import Harlequin from "../components/Harlequin";
import TextBreak from "../components/TextBreak";

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-100 font-sans" >
          <Header />
          <HeroImage />
          <SiteIntro />
          <Carousel />
          <TextBreak />
          <Harlequin />
          <Footer />
        </div>
      );
}