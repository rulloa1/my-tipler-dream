import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/home/HeroSection";
import AboutSection from "@/components/home/AboutSection";
import FeaturedProjects from "@/components/home/FeaturedProjects";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <AboutSection />
      <FeaturedProjects />
    </Layout>
  );
};

export default Index;
