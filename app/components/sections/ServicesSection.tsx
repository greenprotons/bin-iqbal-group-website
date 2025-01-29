import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  Building2,
  PaintBucket,
  Wrench,
  HomeIcon,
  Factory,
  HardHat,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: <Building2 className="w-10 h-10 text-blue-600" />,
    title: "Commercial Construction",
    description:
      "Full-service commercial construction for businesses of all sizes.",
  },
  {
    icon: <HomeIcon className="w-10 h-10 text-blue-600" />,
    title: "Residential Projects",
    description: "Custom home building and major residential renovations.",
  },
  {
    icon: <PaintBucket className="w-10 h-10 text-blue-600" />,
    title: "Interior Finishing",
    description: "High-quality interior finishing and renovation services.",
  },
  {
    icon: <Wrench className="w-10 h-10 text-blue-600" />,
    title: "Maintenance",
    description: "Ongoing maintenance and repair services for all properties.",
  },
  {
    icon: <Factory className="w-10 h-10 text-blue-600" />,
    title: "Industrial Projects",
    description:
      "Specialized construction for industrial and manufacturing facilities.",
  },
  // {
  //   icon: <HardHat className="w-10 h-10 text-blue-600" />,
  //   title: "Project Management",
  //   description: "Expert project management and construction consulting.",
  // },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive construction and building services tailored to your
            needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mb-4">{service.icon}</div>
                <CardTitle>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
