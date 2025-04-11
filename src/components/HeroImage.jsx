export default function HeroImage() {
    return (
        <div className="relative h-[90vh]">
            <img 
                src="/site_images/coffee_primary_image[placeholder].jpg" 
                alt="Coffee Landing Image" 
                className="w-full h-full object-cover" 
            />

            <div className="absolute top-[0] left-1/2 -translate-x-1/2">
                <img 
                    src="/site_images/miracle_motto_img_transparent_stricter.png" 
                    alt="Motto" 
                    className="w-[180vw] max-h-[100vh] object-contain" 
                />
            </div>
        </div>
    )
}
