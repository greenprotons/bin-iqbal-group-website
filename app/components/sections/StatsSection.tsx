import { motion } from "framer-motion";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    value: "25",
    label: "Years of Experience",
    suffix: "+",
  },
  {
    value: "500",
    label: "Projects Completed",
    suffix: "+",
  },
  {
    value: "100",
    label: "Professional Team Members",
    suffix: "+",
  },
  {
    value: "98",
    label: "Client Satisfaction",
    suffix: "%",
  },
];

const StatsSection = () => {
  return (
    <section className="py-24 bg-blue-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
