"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            About Culture Flipper
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            We specialize in cultural localization, creating global brand experiences with precision.
          </p>
        </motion.div>

        {/* Content and Image Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-600 mb-6">
              We are a global team of digital nomads specializing in cultural
              localization and brand storytelling. From North America to Asia,
              Latin America to Europe, we bridge cultures with creativity and precision.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              With Culture Flipper, the world never stands still—we move, adapt,
              and lead with the cadence of global trends.
            </p>
            <Button variant="outline" size="lg" className="transition-colors hover:bg-blue-500 hover:text-white">
              Learn More About Our Story
            </Button>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/team-collaboration.jpg"
              alt="Team collaboration"
              layout="fill"
              objectFit="cover"
              className="rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
