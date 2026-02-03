import { Briefcase, ChevronRight, MapPin, Clock } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const experiences = [
  {
    title: 'Mobile Application Developer (Flutter)',
    company: 'Jadara, Egypt',
    period: 'Sep 2025 — Present',
    type: 'Full-time, On-site',
    gradient: 'from-primary to-amber',
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
    gradient: 'from-sage to-secondary',
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
    gradient: 'from-terracotta to-primary',
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
    gradient: 'from-amber to-sage',
    accomplishments: [
      'Educated about full mobile app development cycle, from planning to deployment',
      'Documented project workflows, code structure, and feature descriptions for future reference',
    ],
  },
];

interface ExperienceCardProps {
  experience: typeof experiences[0];
  index: number;
  isInView: boolean;
}

const ExperienceCard = ({ experience, index, isInView }: ExperienceCardProps) => (
  <motion.div
    className="glass-card rounded-2xl p-6 md:p-8 relative overflow-hidden group"
    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
    transition={{ duration: 0.5, delay: index * 0.15 }}
    whileHover={{ y: -5 }}
  >
    {/* Gradient accent line */}
    <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${experience.gradient} rounded-l-2xl`} />
    
    {/* Hover glow */}
    <motion.div 
      className={`absolute inset-0 bg-gradient-to-br ${experience.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
    />
    
    <div className="relative z-10 flex items-start gap-4 pl-4">
      <motion.div 
        className={`p-3 rounded-xl bg-gradient-to-br ${experience.gradient} flex-shrink-0`}
        whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
        transition={{ duration: 0.4 }}
      >
        <Briefcase className="w-6 h-6 text-white" />
      </motion.div>
      
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-2 mb-2">
          <span className="flex items-center gap-1 text-sm font-medium text-primary">
            <Clock className="w-3 h-3" />
            {experience.period}
          </span>
          <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-muted text-muted-foreground">
            {experience.type}
          </span>
        </div>
        
        <h3 className="text-xl font-display font-bold mb-1">{experience.title}</h3>
        <p className="flex items-center gap-1 text-muted-foreground mb-4 text-sm">
          <MapPin className="w-3 h-3" />
          {experience.company}
        </p>
        
        <ul className="space-y-2">
          {experience.accomplishments.map((item, i) => (
            <motion.li 
              key={i} 
              className="flex items-start gap-2 text-sm text-foreground/80"
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ delay: index * 0.15 + i * 0.1 + 0.3 }}
            >
              <ChevronRight className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
              <span>{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const ExperienceSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-sage-light/30 to-transparent relative overflow-hidden" ref={containerRef}>
      {/* Floating decoration */}
      <motion.div
        className="absolute top-40 right-10 w-40 h-40 border border-primary/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Professional{' '}
            <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>
        
        <div className="space-y-6 mb-20">
          {experiences.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index} isInView={isInView} />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            <span className="gradient-text">Internships</span>
          </h2>
        </motion.div>
        
        <div className="space-y-6">
          {internships.map((exp, index) => (
            <ExperienceCard key={exp.title} experience={exp} index={index + 2} isInView={isInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;