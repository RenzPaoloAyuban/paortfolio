import ProfileHero from "./components/ProfileHero"
import AboutSection from "./components/AboutSection";
import TechStack from "./components/TechStack";
import ExperienceTimeline from "./components/ExperienceTimeline";
import SocialSection from "./components/SocialSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import GallerySection from "./components/GallerySection";
import SocialLinks from "./components/SocialLinks";

export default function Home() {
  return (
    <div className="px-6 sm:px-12 md:px-20 lg:mx-40 lg:px-0">
      {/* Hero */}
      <div className="flex flex-col sm:flex-row items-center sm:items-center gap-4">
        <ProfileHero />
        <SocialLinks />
      </div>

      {/* Main content — stacks on mobile, side-by-side on lg+ */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-3/4">
          <AboutSection />
          <TechStack />
          <ProjectsSection />
          <CertificationsSection />
        </div>
        <div className="w-full lg:w-1/4">
          <ExperienceTimeline />
          <SocialSection />
        </div>
      </div>

      <GallerySection />
    </div>
  );
}
