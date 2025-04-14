import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 }
};

export default function About() {
  return (
    <div className="flex flex-col gap-y-16 max-w-6xl mx-auto px-4 py-16">

      {/* Row 1: Text | Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold font-lemon mb-4">Our Roots</h2>
          <p className="font-kopik">
            Miracle Cafe opened in Kew East, Melbourne in September 2024, but its story began years ago in the Philippines.
            Our parents started a jeepney business—jeepneys being a popular mode of transport for Filipinos. They named their first jeepney “Miracle.”
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-300 w-full h-64 rounded-xl shadow"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
      </div>

      {/* Row 2: Text | Image (flipped back to match Row 1 and 3) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
            className="flex flex-col justify-center md:order-1"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <h2 className="text-2xl font-bold font-lemon mb-4">The Turning Point</h2>
            <p className="font-kopik">
            In 2024, after years of working in HR and administration, I felt a strong pull to try something new.
            While cafe hopping in June, I stumbled upon a café for sale—and I was the only one there on inspection day.
            </p>
        </motion.div>

        <motion.div
            className="bg-gray-300 w-full h-64 rounded-xl shadow"
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
        </div>


      {/* Row 3: Text | Image */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          className="flex flex-col justify-center"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-2xl font-bold font-lemon mb-4">Why "Miracle"?</h2>
          <p className="font-kopik">
            Not just because our jeeps were called Miracle, but because my life has been full of unexpected blessings—
            miracles that always seemed to show up when I needed them most.
          </p>
        </motion.div>

        <motion.div
          className="bg-gray-300 w-full h-64 rounded-xl shadow"
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        />
      </div>

    </div>
  );
}