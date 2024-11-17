"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  useEffect(() => {
    const video = document.querySelector("video");
    if (video) {
      video.playbackRate = 0.5;
    }
  }, []);

  return (
    <section
      ref={ref}
      className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-800"
    >
      {/* Background Video and Overlay */}
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1506748686212-2db0a83164d6?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDkwfHxsaWZlc3R5bGV8ZW58MHx8fHwxNjI5NzA2OTc5&ixlib=rb-1.2.1&q=80&w=1080"
        >
          <source src="https://images.unsplash.com/photo-1506748686212-2db0a83164d6?crop=entropy&cs=tinysrgb&fit=max&ixid=MXwyMDg5OXwwfDF8c2VhcmNofDkwfHxsaWZlc3R5bGV8ZW58MHx8fHwxNjI5NzA2OTc5&ixlib=rb-1.2.1&q=80&w=1080" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl"
        >
          Breaking Barriers, Building Bridges
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-6 text-xl sm:text-2xl max-w-3xl mx-auto"
        >
          Your Gateway to Global Brand Experiences
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-10"
        >
          <Button size="lg" className="rounded-full text-lg px-8 py-3 bg-gradient-to-r from-indigo-500 to-blue-500 hover:from-indigo-600 hover:to-blue-600 transition-colors duration-300 ease-in-out">
            Get Started
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
