import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { EXPERIENCES_DATA, PROJECTS_DATA, SKILLS_DATA } from '../constants/constants';

export default function Home() {
  return (
   <LanguageProvider>
      <div className="min-h-screen flex flex-col bg-blue-900"> 
        <Header />
        <main className="flex-grow">
          <HeroSection />
          <AboutSection />
          <ExperienceSection experiences={EXPERIENCES_DATA} />
          <ProjectsSection projects={PROJECTS_DATA} />
          <SkillsSection skills={SKILLS_DATA} />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
