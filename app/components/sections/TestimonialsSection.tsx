import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/Card";
import { Quote } from "lucide-react";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  imageUrl: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "The team's attention to detail and commitment to quality is outstanding. They transformed our vision into reality.",
    author: "Robert Wilson",
    role: "CEO",
    company: "Tech Innovations Inc.",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
  },
  {
    content:
      "Professional, punctual, and perfect execution. Our office renovation was completed ahead of schedule.",
    author: "Lisa Anderson",
    role: "Operations Director",
    company: "Global Solutions",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=lisa",
  },
  {
    content:
      "Their expertise in sustainable building practices helped us achieve our green building certification goals.",
    author: "David Martinez",
    role: "Sustainability Manager",
    company: "EcoBuilt Corp",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=david",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            What our clients say about working with us
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-6">
                    <Quote className="w-10 h-10 text-blue-600" />
                  </div>
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="flex items-center">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-gray-600">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
