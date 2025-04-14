import Footer from "../components/Footer";
import Header from "../components/Header";

export default function Location() {
    return (
        <div>    
            <Header />  
            <div className="w-full min-h-screen flex flex-col items-center justify-center px-4 py-16">
                <h2 className="text-3xl font-bold font-lemon mb-4 text-center">Visit Us</h2>
        
                {/* Address */}
                <p className="font-kopik text-lg text-center text-gray-800 mb-8">
                📍 Miracle Café<br />
                2 Wade Lane, Kew East VIC 3102
                </p>
        
                {/* Storefront Image */}
                <div className="w-full max-w-5xl aspect-[4/3] rounded-xl overflow-hidden shadow-lg mb-8">
                <img
                    src="/site_images/cafe_outdoor2.jpg"
                    alt="Miracle Café Front"
                    className="w-full h-full object-cover object-top scale-95"
                />
                </div>
        
                {/* Google Maps Embed */}
                <div className="w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!4v1744601753778!6m8!1m7!1smXi1BiXIV28qX6eeLW_mtQ!2m2!1d-37.79200106966751!2d145.0481769800799!3f294.6433726309808!4f-4.335088226074802!5f0.7820865974627469"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full border-0"
                />
                </div>
        
                {/* Disclaimer about outdated Street View */}
                <p className="text-sm text-gray-600 italic mt-4 text-center max-w-2xl">
                *Street View below may still show the previous business — Miracle Café opened here in September 2024.*
                </p>
            </div>
            <Footer />
        </div>
    );
  }
  