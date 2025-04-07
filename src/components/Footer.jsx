export default function Footer() {
    return (
        <footer className="flex flex-col items-center bg-[#FAEADD]">
            <div>
                Upper column
            </div>

            <div className="flex flex-row">
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/instagram_icon.png" alt="Instagram" className="h-12 w-12" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/facebook_icon.png" alt="Facebook" className="h-12 w-12" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <img src="/icons/tiktok_icon.png" alt="TikTok" className="h-12 w-12" />
                </a>
            </div>
        </footer>
    )
}