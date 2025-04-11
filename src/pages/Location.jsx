import Footer from "../components/Footer";
import Header from "../components/Header";


export default function Location() {
    return (
    <div className="min-h-screen bg-gray-100 font-sans pt-8">
        <Header />  

        <div className="w-full h-[90vh] flex flex-col items-center px-4 py-12">
        
            <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>

            <div className="w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
                <iframe
                src="https://www.google.com/maps/embed?pb=!4v1744367394962!6m8!1m7!1smXi1BiXIV28qX6eeLW_mtQ!2m2!1d-37.79200106966751!2d145.0481769800799!3f305.13000936401454!4f-1.2503120947058335!5f0.4000000000000002"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
                />
            </div>

        </div>

        <Footer />
    </div>
    );
}

