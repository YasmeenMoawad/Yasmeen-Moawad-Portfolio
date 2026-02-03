import { ExternalLink, Smartphone, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

const projects = [
  {
    name: 'Adala AI App',
    description: 'Legal services application for individuals and companies, providing fast and secure legal assistance that complies with Saudi regulations.',
    technologies: ['Flutter', 'AI Chatbot', 'File Management', 'Hive', 'Firebase', 'MVC Architecture', 'Localization', 'Voice Recorder'],
    gradient: 'from-primary via-amber to-terracotta',
    playStore: '#',
    appStore: '#',
  },
  {
    name: 'LOCUS',
    subtitle: 'Graduation Project',
    description: 'Space information and VR simulator application for educational satellites control and space navigation. Led the team as Flutter Developer and Team Leader.',
    technologies: ['Flutter', 'BLoC/Cubit', 'AI Chatbot', 'AI Image Generator', 'Object Detection', 'MVVM Architecture', 'Video Player'],
    gradient: 'from-sage via-secondary to-primary',
    playStore: '#',
    appStore: null,
  },
  {
    name: 'EGem Application',
    description: 'Workouts application for online training, providing AI-powered video guidelines and access to professional coaches.',
    technologies: ['Flutter', 'AI Videos', 'Go Router', 'Video Player', 'Shared Preferences', 'MVVM Architecture', 'Localization'],
    gradient: 'from-terracotta via-primary to-amber',
    playStore: '#',
    appStore: null,
  },
];

const ProjectsSection = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 420;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Background decoration */}
      <motion.div 
        className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity }}
      />
      
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-amber/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Portfolio</span>
          </motion.div>
          
          <h2 className="section-title mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of mobile applications I've crafted, each representing my commitment to quality and innovation.
          </p>
        </motion.div>
        
        {/* Navigation arrows */}
        <div className="flex justify-end gap-2 mb-6 px-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('left')}
            className={`p-3 rounded-full glass-card ${canScrollLeft ? 'text-foreground' : 'text-muted-foreground/30'}`}
            disabled={!canScrollLeft}
          >
            <ChevronLeft className="w-5 h-5" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scroll('right')}
            className={`p-3 rounded-full glass-card ${canScrollRight ? 'text-foreground' : 'text-muted-foreground/30'}`}
            disabled={!canScrollRight}
          >
            <ChevronRight className="w-5 h-5" />
          </motion.button>
        </div>

        <div 
          ref={scrollRef}
          onScroll={checkScroll}
          className="horizontal-scroll px-4"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="project-card relative group"
            >
              {/* Gradient top border */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} rounded-t-2xl`} />
              
              {/* Floating glow on hover */}
              <motion.div 
                className={`absolute -inset-1 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500 rounded-2xl`}
              />
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <motion.div 
                    className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient}`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Smartphone className="w-5 h-5 text-white" />
                  </motion.div>
                  <div>
                    <h3 className="text-xl font-display font-bold">{project.name}</h3>
                    {project.subtitle && (
                      <span className="text-xs text-muted-foreground">{project.subtitle}</span>
                    )}
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed min-h-[60px]">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.slice(0, 5).map((tech, i) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                      transition={{ delay: index * 0.2 + i * 0.05 + 0.3 }}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-secondary/50 text-secondary-foreground"
                    >
                      {tech}
                    </motion.span>
                  ))}
                  {project.technologies.length > 5 && (
                    <span className="px-3 py-1 text-xs font-medium rounded-full bg-muted text-muted-foreground">
                      +{project.technologies.length - 5} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-3">
                  {project.playStore && (
                    <motion.a
                      href={project.playStore}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium"
                      whileHover={{ 
                        scale: 1.05, 
                        backgroundColor: "hsl(var(--primary) / 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      Play Store
                    </motion.a>
                  )}
                  {project.appStore && (
                    <motion.a
                      href={project.appStore}
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium"
                      whileHover={{ 
                        scale: 1.05,
                        backgroundColor: "hsl(var(--accent) / 0.2)"
                      }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                      App Store
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.p 
          className="text-center text-muted-foreground mt-8 text-sm"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          ← Swipe or use arrows to explore more projects →
        </motion.p>
      </div>
    </section>
  );
};

export default ProjectsSection;