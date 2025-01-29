import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold">Building Dreams Since 1995</h2>
            <p className="text-lg text-gray-600">
              With over 25 years of experience in the construction industry,
              we&apos;ve built a reputation for excellence, reliability, and
              innovation.
            </p>
            <ul className="space-y-4 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                Over 500 successful projects completed
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                Award-winning design and construction team
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3" />
                Sustainable building practices
              </li>
            </ul>
            <Button size="lg" className="mt-6">
              Learn More About Us
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <img
                src="https://images.unsplash.com/photo-1541976590-713941681591"
                alt="Construction site"
                className="rounded-lg object-cover h-48 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
                alt="Architecture"
                className="rounded-lg object-cover h-64 w-full"
              />
            </div>
            <div className="space-y-4 pt-8">
              <img
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e"
                alt="Building detail"
                className="rounded-lg object-cover h-64 w-full"
              />
              <img
                src="https://images.unsplash.com/photo-1531834685032-c34bf0d84c77"
                alt="Construction team"
                className="rounded-lg object-cover h-48 w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
