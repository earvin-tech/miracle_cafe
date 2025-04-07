export default function Footer() {
    return (
      <footer className="bg-[#FAEADD] flex flex-col items-center py-4">
        
        {/* Upper Section */}
        <div className="upperColumn w-full max-w-5xl flex flex-col sm:flex-row justify-between items-center gap-6 px-6">
          
          {/* Opening Hours */}
          <div className="openingHours text-center sm:text-left">
            <p className="font-semibold">Opening Hours:</p>
            <p>Mon: Closed</p>
            <p>Tue-Fri: 7am-3pm</p>
            <p>Sat: 8am-2pm</p>
            <p>Sun: Closed</p>
          </div>
  
          {/* Logo & Social Icons Center Column */}
          <div className="centerContent flex flex-col items-center gap-y-4">
            <img
              src="/favicon_miracle2.png"
              alt="Miracle Cafe logo"
              className="w-20 h-20 object-contain"
            />
            <div className="footerIcons flex flex-row justify-center items-center space-x-4">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <img
                  src="/icons/instagram_icon.png"
                  alt="Instagram"
                  className="h-10 w-10 object-contain"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <img
                  src="/icons/facebook_icon.png"
                  alt="Facebook"
                  className="h-10 w-10 object-contain"
                />
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                <img
                  src="/icons/tiktok_icon.png"
                  alt="TikTok"
                  className="h-10 w-10 object-contain"
                />
              </a>
            </div>
          </div>
  
          {/* Contact Info */}
          <div className="contactUs text-center sm:text-right">
            <p className="font-semibold">Contact Us!</p>
            <p>Mobile: 0494 349 894</p>
            <p>
              Address: 6/54-58 Kilby Rd
              <br />
              Kew East VIC 3102
            </p>
          </div>
  
        </div>
      </footer>
    );
  }
  