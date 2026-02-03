import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Code, Palette, Users, Lightbulb } from 'lucide-react';

const technicalSkills = [
  { name: 'Dart & Flutter', level: 95 },
  { name: 'Clean Architecture', level: 90 },
  { name: 'State Management (BLoC, Cubit)', level: 90 },
  { name: 'REST APIs', level: 88 },
  { name: 'Firebase', level: 85 },
  { name: 'Responsive UI', level: 92 },
  { name: 'Animations', level: 88 },
  { name: 'Version Control (Git)', level: 85 },
  { name: 'Python', level: 75 },
  { name: 'C++', level: 70 },
  { name: 'Data Structures & Algorithms', level: 82 },
  { name: 'SDLC & Agile', level: 80 },
  { name: 'Testing & Debugging', level: 85 },
  { name: 'Figma', level: 75 },
];

const softSkills = [
  { name: 'Team Leadership', icon: Users },
  { name: 'Presentation Skills', icon: Lightbulb },
  { name: 'Strategic Planning', icon: Code },
  { name: 'Cross-cultural Communication', icon: Users },
  { name: 'Problem Solving', icon: Lightbulb },
  { name: 'Mentoring & Teaching', icon: Palette },
];

const SkillBar = ({ skill, index }: { skill: { name: string; level: number }; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -30 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group"
    >
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-primary via-amber to-terracotta rounded-full relative"
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ delay: index * 0.05 + 0.3, duration: 0.8, ease: "easeOut" }}
        >
          {/* Shimmer effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
            animate={{ x: ["-100%", "200%"] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              delay: index * 0.1
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

const SkillsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-transparent via-muted/30 to-transparent relative overflow-hidden">
      {/* Floating decorations */}
      <motion.div
        className="absolute top-20 right-20 w-20 h-20 border-2 border-primary/20 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.1, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-40 left-10 w-32 h-32 border border-amber/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="max-w-6xl mx-auto" ref={containerRef}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Technical{' '}
            <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Skills honed through years of practice, continuous learning, and real-world applications.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-primary to-amber">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold">Technical Skills</h3>
            </div>
            
            <div className="glass-card rounded-2xl p-6 space-y-4">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} index={index} />
              ))}
            </div>
          </motion.div>
          
          {/* Soft Skills */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-2xl bg-gradient-to-br from-sage to-secondary">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold">Soft Skills</h3>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="glass-card rounded-2xl p-5 text-center group cursor-pointer"
                >
                  <motion.div 
                    className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-terracotta/20 to-amber/20 flex items-center justify-center group-hover:from-terracotta group-hover:to-amber transition-all duration-300"
                  >
                    <skill.icon className="w-6 h-6 text-terracotta group-hover:text-white transition-colors" />
                  </motion.div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </motion.div>
              ))}
            </div>
            
            {/* Decorative quote */}
            <motion.div
              className="mt-8 glass-card rounded-2xl p-6 relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary/5 to-amber/5"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              <div className="relative z-10">
                <p className="text-lg italic text-muted-foreground">
                  "I carry a mind full of extraordinary ideas; I am excited to bring them to life."
                </p>
                <p className="mt-3 text-sm font-medium text-primary">— Yasmeen Moawad</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;