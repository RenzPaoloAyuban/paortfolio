import ProfileHero from "./components/ProfileHero"
import AboutSection from "./components/AboutSection";
import ExperienceTimeline from "./components/ExperienceTimeline";
import ProjectsSection from "./components/ProjectsSection";

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
        </div>
        <div className="w-1/4">
          <ExperienceTimeline />
        </div>
      </div>

      

    </div>
  );
}
