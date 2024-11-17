"use client";

import { useState } from "react";
import { motion, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // Correct import for internal links

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  // Sticky Header Logic: More reliable scroll logic
  const stickyHeader = scrollYProgress.get() > 0.05;

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        stickyHeader ? "bg-gradient-to-r from-purple-500 to-pink-500" : "bg-transparent"
      }`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/" className="text-3xl font-bold text-yellow-500">
              <span className="text-yellow-500">Culture </span> Flipper
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-10">
            <Link href="#home" className="text-lg text-yellow-500 hover:text-yellow-600">
              <i className="fas fa-home"></i> Home
            </Link>
            <Link href="#about" className="text-lg text-yellow-500 hover:text-yellow-600">
              <i className="fas fa-user"></i> About Us
            </Link>
            <Link href="#services" className="text-lg text-yellow-500 hover:text-yellow-600">
              <i className="fas fa-cog"></i> Services
            </Link>
            <Link href="#contact" className="text-lg text-yellow-500 hover:text-yellow-600">
              <i className="fas fa-phone"></i> Contact
            </Link>
            <Button className="text-yellow-500 bg-yellow-500 hover:bg-yellow-600 rounded-lg py-2 px-6">
              Get Started
            </Button>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-yellow-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          onClick={() => setIsMenuOpen(false)}
        >
          <div
            className="fixed top-0 right-0 w-3/4 bg-white h-full p-6"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the menu
          >
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-yellow-500">
                Culture Flipper
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="text-2xl text-yellow-500">
                &times;
              </button>
            </div>
            <div className="mt-10 space-y-6">
              <Link
                href="#home"
                className="block text-xl text-yellow-500 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-home"></i> Home
              </Link>
              <Link
                href="#about"
                className="block text-xl text-yellow-500 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-user"></i> About Us
              </Link>
              <Link
                href="#services"
                className="block text-xl text-yellow-500 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-cog"></i> Services
              </Link>
              <Link
                href="#contact"
                className="block text-xl text-yellow-500 hover:text-yellow-600"
                onClick={() => setIsMenuOpen(false)}
              >
                <i className="fas fa-phone"></i> Contact
              </Link>
              <Button className="w-full text-yellow-500 bg-yellow-500 hover:bg-yellow-600 rounded-lg py-3">
                Get Started
              </Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
