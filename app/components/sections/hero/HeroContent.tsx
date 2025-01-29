import React from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface HeroContentProps {
  headline?: string;
  subheadline?: string;
  onGetQuote?: () => void;
  onContact?: () => void;
  onScroll?: () => void;
}

const HeroContent = ({
  headline = "Building Excellence, Creating Value",
  subheadline = "Transform your vision into reality with our expert construction and renovation services",
  onGetQuote = () => console.log("Get Quote clicked"),
  onContact = () => console.log("Contact clicked"),
  onScroll = () => console.log("Scroll clicked"),
}: HeroContentProps) => {
  return (
    <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center px-4 bg-black/50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          {headline}
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-8">{subheadline}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            onClick={onGetQuote}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg"
          >
            Get a Quote
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={onContact}
            className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg"
          >
            Contact Us
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 cursor-pointer"
        onClick={onScroll}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-10 h-10 text-white" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HeroContent;
