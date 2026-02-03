import { Briefcase, ChevronRight } from 'lucide-react';

const experiences = [
  {
    title: 'Mobile Application Developer (Flutter)',
    company: 'Jadara, Egypt',
    period: 'Sep 2025 — Present',
    type: 'Full-time, On-site',
    accomplishments: [
      'Developing advanced Flutter projects tailored for clients in Gulf countries',
      'Refactoring and optimizing legacy code into clean, reusable, and maintainable solutions',
      'Continuously expanding expertise by learning and applying new tools, methods, and technologies daily',
    ],
  },
  {
    title: 'Mobile Application Development (Flutter) Instructor',
    company: 'Information Technology Institute (ITI), Egypt',
    period: 'Mar 2025 — Jul 2025',
    type: 'Part-time, Hybrid',
    accomplishments: [
      'Guided and coached college students through the complete lifecycle of mobile application development using Flutter',
      'Authored and structured a curriculum that integrated theory, practical exercises, and demo applications',
      'Presented lectures and disseminated reference materials to consolidate skills beyond classroom sessions',
    ],
  },
];

const internships = [
  {
    title: 'Mobile App Development Summer Internship',
    company: 'Information Technology Institute (ITI), Egypt',
    period: 'Jul 2023 — Sep 2023',
    type: 'Full-time, Hybrid',
    accomplishments: [
      'Delivered assigned tasks ahead of deadlines throughout the training period',
      'Developed mobile application project, earning positive evaluation from the instructor',
      'Showcased the final project through a detailed presentation',
    ],
  },
  {
    title: 'Mobile App Development Winter Internship',
    company: 'Information Technology Institute (ITI), Egypt',
    period: 'Jan 2023 — Feb 2023',
    type: 'Full-time, Online',
    accomplishments: [
      'Educated about full mobile app development cycle, from planning to deployment',
      'Documented project workflows, code structure, and feature descriptions for future reference',
    ],
  },
];

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
}

const ExperienceCard = ({ experience, index }: ExperienceCardProps) => (
  <div
    className="glass-card rounded-2xl p-6 md:p-8 opacity-0 animate-fade-in-up"
    style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
  >
    <div className="flex items-start gap-4">
      <div className="p-3 rounded-xl bg-primary/10 flex-shrink-0">
        <Briefcase className="w-6 h-6 text-primary" />
      </div>
      
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="text-sm font-medium text-primary">{experience.period}</span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {experience.type}
          </span>
        </div>
        
        <h3 className="text-xl font-display font-bold mb-1">{experience.title}</h3>
        <p className="text-muted-foreground mb-4">{experience.company}</p>
        
        <ul className="space-y-2">
          {experience.accomplishments.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-foreground/80">
              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

const ExperienceSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-sage-light/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Professional Experience</h2>
        
        <div className="space-y-6 mb-16">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index} />
          ))}
        </div>
        
        <h2 className="section-title text-center">Internships</h2>
        
        <div className="space-y-6">
          {internships.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index + 2} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;