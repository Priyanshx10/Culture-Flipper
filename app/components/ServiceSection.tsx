"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  GlobeAltIcon,
  PencilIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    title: "Decode",
    description:
      "Unveiling cultural contexts through in-depth market research.",
    icon: MagnifyingGlassIcon,
  },
  {
    title: "Transcreate",
    description:
      "Recreating content with expertise in copywriting, journalism, and marketing.",
    icon: PencilIcon,
  },
  {
    title: "Localize",
    description:
      "Adapting content to resonate emotionally while preserving creative intent.",
    icon: GlobeAltIcon,
  },
  {
    title: "Design",
    description:
      "Crafting compelling visuals and typography for impactful communication.",
    icon: PaintBrushIcon,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Our Expertise
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg text-center"
            >
              <service.icon className="h-12 w-12 mx-auto text-primary" />
              <h3 className="mt-4 text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button size="lg">Explore Our Services</Button>
        </motion.div>
      </div>
    </section>
  );
}
