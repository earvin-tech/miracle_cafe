export default function Footer() {
    return (
      <footer className="bg-[#FAEADD] flex flex-col items-center py-4 mt-10">
        
        {/* Upper Section */}
        <div className="upperColumn w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-6 px-6">
          
          {/* Opening Hours */}
          <div className="openingHours text-center sm:text-left">
            <p className="font-semibold font-lemon">Opening Hours:</p>
            <p className="font-kopik">Mon: Closed</p>
            <p className="font-kopik">Tue-Fri: 7am-3pm</p>
            <p className="font-kopik">Sat: 8am-2pm</p>
            <p className="font-kopik">Sun: Closed</p>
          </div>
  
          {/* Logo & Social Icons Center Column */}
          <div className="centerContent flex flex-col items-center gap-y-4">
            <img
              src="/icons/footer_jeep.png"
              alt="Miracle Cafe logo"
              className="w-20 h-20 object-contain"
            />
            <div className="footerIcons flex flex-row justify-center items-center space-x-4">
              <a href="https://www.instagram.com/_miraclecafe/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img
                  src="/icons/instagram_icon.png"
                  alt="Instagram"
                  className="h-12 w-12 object-contain"
                />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61565462261992" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img
                  src="/icons/facebook_icon.png"
                  alt="Facebook"
                  className="h-12 w-12 object-contain"
                />
              </a>
              <a href="https://www.tiktok.com/@_miraclecafe" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img
                  src="/icons/tiktok_icon.png"
                  alt="TikTok"
                  className="h-12 w-12 object-contain"
                />
              </a>
            </div>
          </div>
  
          {/* Contact Info */}
          <div className="contactUs text-center sm:text-right">
            <p className="font-semibold font-lemon">Contact Us!</p>
            <p className="font-kopik">Mobile: 0494 349 894</p>
            <p className="font-kopik">
              Address: 6/54-58 Kilby Rd
              <br/>
              Kew East
              <br/> 
              VIC 3102
            </p>
          </div>
  
        </div>
      </footer>
    );
  }
  