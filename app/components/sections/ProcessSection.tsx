import { motion } from "framer-motion";
import { ClipboardList, Hammer, PenTool, Users } from "lucide-react";

interface Step {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    icon: <ClipboardList className="w-12 h-12 text-blue-600" />,
    title: "Planning & Design",
    description: "Detailed project planning and architectural design phase",
  },
  {
    icon: <Users className="w-12 h-12 text-blue-600" />,
    title: "Team Assembly",
    description: "Assembling the perfect team for your specific project needs",
  },
  {
    icon: <Hammer className="w-12 h-12 text-blue-600" />,
    title: "Construction",
    description: "Expert construction with attention to every detail",
  },
  {
    icon: <PenTool className="w-12 h-12 text-blue-600" />,
    title: "Final Touches",
    description: "Quality assurance and final detail refinement",
  },
];

const ProcessSection = () => {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A systematic approach to bringing your construction projects to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative text-center"
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-full shadow-lg">
                  {step.icon}
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>

              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/4 right-0 transform translate-x-1/2">
                  <div className="w-16 h-0.5 bg-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
