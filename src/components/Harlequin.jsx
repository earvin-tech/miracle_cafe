
export default function Harlequin() {
    return(
        <section className="max-w-6xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                
                {/* Placeholder Image */}
                {/* <div className="bg-gray-300 w-full h-72 rounded-xl shadow-md" /> */}
                <img src="/site_images/Harlequin01.jpg" alt="Harlequin" className="rounded-2xl" />

                {/* Coffee Info */}
                <div>
                    <h2 className="font-lemon text-3xl font-semibold mb-4">Our Coffee Beans - The Harlequin Blend</h2>
                    <p className="font-kopik text-gray-700 mb-4 leading-relaxed">
                        Crafted by Contraband Coffee Traders, this versatile blend brings together two distinct origins:
                        <br />
                        <strong>Brazil – Bela Vista</strong> (Anaerobic Natural) & <strong>Honduras – La Laguna</strong> (Fully Washed).
                    </p>
                    <p className="font-kopik text-gray-700 mb-4">
                        With mellow acidity and notes of stewed apricots, milk chocolate, and toffee, Harlequin is designed to shine in milk-based coffees while retaining sweetness and balance when served black.
                    </p>
                    <p className="font-kopik text-gray-700 mb-6">
                        Each origin is roasted individually and post-blended to enhance cooked sugar and chocolate notes, allowing it to cut beautifully through milk and milk alternatives.
                    </p>
                    <a 
                        href="https://contrabandcoffeetraders.com/product/the-harlequin/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block bg-[#6B4F4F] font-kopik text-white px-6 py-3 rounded-full hover:bg-[#4b3636] transition"
                    >
                        Learn More at Contraband
                    </a>
                </div>

            </div>
        </section>
    )
}