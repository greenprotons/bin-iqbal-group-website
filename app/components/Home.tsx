import Header from "./layout/Header";
import {
  HeroSection,
  ServicesSection,
  AboutSection,
  ProjectsSection,
  TestimonialsSection,
  TeamSection,
  ProcessSection,
  StatsSection,
  BlogSection,
  CtaSection,
  FooterSection,
} from "./sections";

const Home = () => {
  return (
    <main className="bg-slate-50">
      <Header />
      <HeroSection />
      <ServicesSection />
      {/* <ServicesSection />
      <ServicesSection /> */}
      <AboutSection />
      <ProjectsSection />
      <ProcessSection />
      <StatsSection />
      <TeamSection />
      <TestimonialsSection />
      <BlogSection />
      <CtaSection />
      <FooterSection />
    </main>
  );
};

export default Home;
