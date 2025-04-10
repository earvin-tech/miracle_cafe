export default function LandingImage() {
    return (
        <div className="relative h-[90vh]">
            <img src="/site_images/coffee_primary_image[placeholder].jpg" alt="Coffee Landing Image" className="w-full h-full object-cover" />

            <img src="/site_images/motto_transparent.png" alt="Motto" className="absolute top-4 sm:top-6 md:top-2 lg:top-0 left-1/2 -translate-x-1/2 h-[35rem] object-contain" />
        </div>
        
    )
}