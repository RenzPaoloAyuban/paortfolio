import ProfileHero from "./components/ProfileHero"
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import GallerySection from "./components/GallerySection";

export default function Home() {
  return (
    <div className="mx-40">
      <div className="flex flex-row">
        <ProfileHero />
      </div>

      <div className="mt-8 flex flex-row gap-16">
        <div className="w-3/4">
          <AboutSection />
          <ProjectsSection />
          <CertificationsSection />
          
        </div>
        <div className="w-1/4">
          <ExperienceTimeline />
        </div>
      </div>
      <div>
        <GallerySection />
      </div>

    </div>
  );
}
