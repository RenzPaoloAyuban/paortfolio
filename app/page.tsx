import ProfileHero from "./components/ProfileHero"
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import GallerySection from "./components/GallerySection";

export default function Home() {
  return (
    <div className="px-6 sm:px-12 md:px-20 lg:mx-40 lg:px-0">
      {/* Hero */}
      <div className="flex flex-row">
        <ProfileHero />
      </div>

      {/* Main content — stacks on mobile, side-by-side on lg+ */}
      <div className="mt-8 flex flex-col lg:flex-row gap-8 lg:gap-16">
        <div className="w-full lg:w-3/4">
          <AboutSection />
          <ProjectsSection />
          <CertificationsSection />
        </div>
        <div className="w-full lg:w-1/4">
          <ExperienceTimeline />
        </div>
      </div>

      <GallerySection />
    </div>
  );
}
