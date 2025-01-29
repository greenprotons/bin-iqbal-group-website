import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

const CtaSection = () => {
  return (
    <section className="py-24 bg-blue-600">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Construction Project?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let&apos;s bring your vision to life. Contact us today for a free
            consultation and project estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-blue-600"
            >
              Get Free Estimate
            </Button>
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50"
            >
              Contact Us
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
