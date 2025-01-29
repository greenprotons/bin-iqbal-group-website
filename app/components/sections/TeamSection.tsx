import { motion } from "framer-motion";
import { Linkedin, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  social: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

const team: TeamMember[] = [
  {
    name: "John Smith",
    role: "CEO & Founder",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:john@example.com",
    },
  },
  {
    name: "Sarah Johnson",
    role: "Lead Architect",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:sarah@example.com",
    },
  },
  {
    name: "Michael Chen",
    role: "Project Manager",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:michael@example.com",
    },
  },
  {
    name: "Emily Brown",
    role: "Interior Designer",
    imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=emily",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "mailto:emily@example.com",
    },
  },
];

const TeamSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Meet our talented team of professionals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="mb-6 relative group">
                <div className="relative rounded-full overflow-hidden w-48 h-48 mx-auto">
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="flex justify-center space-x-4">
                {member.social.linkedin && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={member.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </Button>
                )}
                {member.social.twitter && (
                  <Button variant="ghost" size="icon" asChild>
                    <a
                      href={member.social.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </Button>
                )}
                {member.social.email && (
                  <Button variant="ghost" size="icon" asChild>
                    <a href={member.social.email}>
                      <Mail className="w-5 h-5" />
                    </a>
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
