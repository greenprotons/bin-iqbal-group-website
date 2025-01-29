import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/Card";

interface BlogPost {
  title: string;
  excerpt: string;
  imageUrl: string;
  date: string;
  author: {
    name: string;
    imageUrl: string;
  };
}

const posts: BlogPost[] = [
  {
    title: "The Future of Sustainable Construction",
    excerpt:
      "Exploring eco-friendly building materials and practices that are shaping the future of construction.",
    imageUrl: "https://images.unsplash.com/photo-1518005068251-37900150dfca",
    date: "March 15, 2024",
    author: {
      name: "Alex Thompson",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex",
    },
  },
  {
    title: "Innovation in Commercial Building Design",
    excerpt:
      "New trends and technologies revolutionizing commercial architecture and construction.",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
    date: "March 10, 2024",
    author: {
      name: "Maria Rodriguez",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=maria",
    },
  },
  {
    title: "Residential Construction Trends 2024",
    excerpt:
      "The latest trends in home building and renovation that homeowners need to know.",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750",
    date: "March 5, 2024",
    author: {
      name: "Chris Parker",
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=chris",
    },
  },
];

const BlogSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Latest News & Insights</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay updated with our latest construction industry insights
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <CardHeader>
                  <div className="text-sm text-gray-600 mb-2">{post.date}</div>
                  <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{post.excerpt}</p>
                </CardContent>
                <CardFooter className="mt-auto">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center">
                      <img
                        src={post.author.imageUrl}
                        alt={post.author.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <span className="text-sm text-gray-600">
                        {post.author.name}
                      </span>
                    </div>
                    <Button variant="ghost">Read More</Button>
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg">View All Posts</Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
