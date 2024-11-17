"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// Define types for Counter component props
type CounterProps = {
  end: number;
  duration: number;
};

function Counter({ end, duration }: CounterProps) {
  const [count, setCount] = useState(0);
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, 1000 / 60);

      return () => clearInterval(timer); // Cleanup interval when component unmounts or props change
    }
  }, [end, duration, isInView]);

  return <span ref={nodeRef}>{count}</span>;
}

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Why Culture Flipper?
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Global Reach</h3>
            <p className="text-gray-600">
              Collaborating with experts across continents for unmatched
              cultural insight.
            </p>
            <div className="mt-4 text-4xl font-bold text-primary">
              <Counter end={50} duration={2} />+
            </div>
            <p className="text-sm text-gray-500">Countries Served</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">Proven Expertise</h3>
            <p className="text-gray-600">
              Years of experience delivering world-class transcreation and
              localization.
            </p>
            <div className="mt-4 text-4xl font-bold text-primary">
              <Counter end={15} duration={2} />+
            </div>
            <p className="text-sm text-gray-500">Years of Experience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-lg shadow-lg text-center"
          >
            <h3 className="text-xl font-semibold mb-2">
              Comprehensive Approach
            </h3>
            <p className="text-gray-600">
              From research to design, we handle every step of the localization
              process.
            </p>
            <div className="mt-4 text-4xl font-bold text-primary">
              <Counter end={1000} duration={2} />+
            </div>
            <p className="text-sm text-gray-500">Projects Completed</p>
          </motion.div>
        </div>
        <div className="mt-16">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl font-semibold text-center mb-8"
          >
            What Our Clients Say
          </motion.h3>
          <div className="grid md:grid-cols-2 gap-8">
            <motion.blockquote
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="mb-4 text-gray-600 italic">
                &ldquo;Culture Flipper transformed our global marketing
                strategy. Their insights were invaluable.&#34;
              </p>
              <footer className="font-semibold text-gray-900">
                - Jane Doe, CEO of Global Corp
              </footer>
            </motion.blockquote>
            <motion.blockquote
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <p className="mb-4 text-gray-600 italic">
                &ldquo;The team&lsquo;s attention to cultural nuances
                significantly boosted our engagement rates.&ldquo;
              </p>
              <footer className="font-semibold text-gray-900">
                - John Smith, Marketing Director at Tech Innovators
              </footer>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
