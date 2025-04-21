export default function HeroImage() {
  return (
    <div className="relative h-[50vh] sm:h-[70vh] md:h-[90vh]">
      <img 
        src="/site_images/hero_image_4.jpg" 
        alt="Coffee Landing Image" 
        className="w-full h-full object-cover" 
      />

      <div className="absolute top-[2.5rem] sm:top-[-1.5rem] md:top-[-2rem] left-1/2 -translate-x-1/2">
        <img 
          src="/site_images/motto_remastered.png" 
          alt="Motto" 
          className="w-[200vw] sm:w-[160vw] md:w-[110vw] lg:w-[90vw] max-h-[90vh] object-contain pointer-events-none"
        />
      </div>
    </div>
  );
}
