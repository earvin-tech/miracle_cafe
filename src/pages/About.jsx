import Header from "../components/Header";
import Footer from "../components/Footer";
import MiracleStory from "../components/MiracleStory";

export default function About() {
    return(
        <div className="min-h-screen bg-gray-100 font-sans pt-20">
            <Header />
            <MiracleStory />
            <Footer />
        </div>
    );
}