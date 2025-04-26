import FadeInSection from "./FadeInSection";

export default function SiteIntro() {
    return (
        <>
        <FadeInSection>

            <section className="bg-[#FAEADD50] text-center py-6 shadow-sm">
                <h3 className=" font-lemon text-xl font-semibold mb-1">Opening Hours</h3>
                <p className="font-kopik">Tue–Fri: 7am–3pm &nbsp;•&nbsp; Sat: 8am–2pm &nbsp;•&nbsp; Sun & Mon: Closed</p>
                <p className="mt-2 font-kopik">📍 6/54–58 Kilby Rd, Kew East VIC 3102</p>
                <p className="font-kopik">📞 0494 349 894</p>
            </section>
        </FadeInSection>
        
        <FadeInSection>

            <section className="max-w-3xl mx-auto mt-10 px-4 py-10 text-center">
                <p className="text-lg font-kopik text-black-700 font-light leading-relaxed">
                    A Filipino-inspired café & pre-loved thrift pieces — a place of miracles.
                </p>
            </section>
        </FadeInSection>
        </>
    );
}

