import FloatingParticles from '@/components/FloatingParticles';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import AwardsSection from '@/components/AwardsSection';
import VolunteeringSection from '@/components/VolunteeringSection';
import LanguagesSection from '@/components/LanguagesSection';
import ContactBanner from '@/components/ContactBanner';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <FloatingParticles />
      
      <main className="relative z-10">
        <HeroSection />
        <StatsSection />
        <SkillsSection />
        <EducationSection />
        <ExperienceSection />
        <ProjectsSection />
        <AwardsSection />
        <VolunteeringSection />
        <LanguagesSection />
        <ContactBanner />
      </main>
    </div>
  );
};

export default Index;