export default function HeroImage() {
    return (
      <div className="relative h-[75vh] sm:h-[85vh] md:h-[90vh]">
        <img 
          src="/site_images/coffee_primary_image[placeholder].jpg" 
          alt="Coffee Landing Image" 
          className="w-full h-full object-cover" 
        />
  
        <div className="absolute top-[-0.5rem] sm:top-[-1.5rem] md:top-[-2rem] left-1/2 -translate-x-1/2">
          <img 
            src="/site_images/motto_remastered.png" 
            alt="Motto" 
            className="w-[180vw] sm:w-[140vw] md:w-[110vw] lg:w-[90vw] max-h-[90vh] object-contain pointer-events-none" 
          />
        </div>
      </div>
    );
  }
  