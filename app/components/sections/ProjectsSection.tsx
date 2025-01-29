import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

interface Project {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00",
  },
  {
    id: 3,
    title: "Shopping Mall Renovation",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1519999482648-25049ddd37b1",
  },
  {
    id: 4,
    title: "Industrial Warehouse",
    category: "Industrial",
    imageUrl: "https://images.unsplash.com/photo-1553855994-ef3569962e51",
  },
  {
    id: 5,
    title: "Eco-Friendly Apartments",
    category: "Residential",
    imageUrl: "https://images.unsplash.com/photo-1486325212027-8081e485255e",
  },
  {
    id: 6,
    title: "Corporate Headquarters",
    category: "Commercial",
    imageUrl: "https://images.unsplash.com/photo-1577495508048-b635879837f1",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful construction projects
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-lg"
            >
              <div className="aspect-w-16 aspect-h-12">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4">{project.category}</p>
                  <Button
                    variant="outline"
                    className="text-white border-white hover:bg-white hover:text-black"
                  >
                    View Project
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="mx-auto">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
