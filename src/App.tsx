import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ResponsibilitiesSection } from "./components/ResponsibilitiesSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <SkillsSection />
      <ProjectsSection />
      <ResponsibilitiesSection />
      <EducationSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
