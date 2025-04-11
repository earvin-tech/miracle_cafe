export default function Location() {
    return (
    <div className="w-full h-[90vh] flex flex-col items-center justify-center px-4 py-12">
      <h2 className="text-3xl font-bold mb-6 text-center">Find Us</h2>

      <div className="w-full max-w-5xl aspect-[16/9] rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1700000000000!6m8!1m7!1sCAoSLEFGMVFpcE5YVmZqTG56RkZNdXJya2NkZUJQVWhrYjl2S2owUVZXYmFRWUp6!2m2!1d-37.8023651!2d145.0533745!3f0!4f0!5f1.1924812503605782"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full border-0"
        />
      </div>
    </div>
    );
}