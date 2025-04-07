export default function LandingImage() {
    return (
        <div className="relative h-[90vh]">
            <img src="/site_images/coffee_primary_image[placeholder].jpg" alt="Coffee Landing Image" className="w-full h-full object-cover" />

            <img src="/site_images/motto_transparent.png" alt="Motto" className="absolute top-6 sm:top-8 md:top-4 lg:top-2 left-1/2 -translate-x-1/2 h-[32rem] object-contain" />
        </div>
        
    )
}