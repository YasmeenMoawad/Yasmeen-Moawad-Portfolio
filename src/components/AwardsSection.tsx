import { Trophy, Medal, Award, Sparkles } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const awards = [
  {
    icon: Trophy,
    title: '1st Place (Twice)',
    event: 'Smart Environment Hackathon',
    gradient: 'from-amber via-primary to-amber',
    bgGradient: 'from-amber/20 to-primary/20',
  },
  {
    icon: Medal,
    title: 'Final Stage',
    event: 'Made In Egypt (MIE) Competition',
    gradient: 'from-primary via-sage to-primary',
    bgGradient: 'from-primary/20 to-sage/20',
  },
  {
    icon: Award,
    title: '6th Placement',
    event: 'IEEE VICTORIES 2.0 Competition',
    gradient: 'from-terracotta via-amber to-terracotta',
    bgGradient: 'from-terracotta/20 to-amber/20',
  },
];

const AwardsSection = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  return (
    <section className="py-24 px-4 relative overflow-hidden" ref={containerRef}>
      {/* Floating trophy decoration */}
      <motion.div
        className="absolute top-20 left-1/4 opacity-10"
        animate={{ y: [0, -20, 0], rotate: [0, 5, -5, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      >
        <Trophy className="w-32 h-32 text-amber" />
      </motion.div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-amber/10"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles className="w-4 h-4 text-amber" />
            <span className="text-sm font-medium text-amber">Recognition</span>
          </motion.div>
          
          <h2 className="section-title">
            Awards &{' '}
            <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              className="glass-card rounded-2xl p-8 text-center relative overflow-hidden group"
              initial={{ opacity: 0, y: 50, rotateX: -10 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 50, rotateX: -10 }}
              transition={{ delay: index * 0.15, duration: 0.5, type: "spring" }}
              whileHover={{ y: -10, scale: 1.03 }}
            >
              {/* Animated gradient background */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-br ${award.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              
              {/* Trophy glow effect */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                animate={{ 
                  opacity: [0, 0.3, 0],
                  scale: [0.8, 1.2, 0.8]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${award.gradient} blur-2xl`} />
              </motion.div>
              
              <div className="relative z-10">
                <motion.div 
                  className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${award.bgGradient} flex items-center justify-center`}
                  whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div
                    animate={{ 
                      y: [0, -3, 0],
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  >
                    <award.icon className={`w-10 h-10 bg-gradient-to-r ${award.gradient} bg-clip-text`} style={{ color: index === 0 ? 'hsl(35, 90%, 60%)' : index === 1 ? 'hsl(var(--primary))' : 'hsl(15, 60%, 60%)' }} />
                  </motion.div>
                </motion.div>
                
                <h3 className="text-xl font-display font-bold mb-2">{award.title}</h3>
                <p className="text-sm text-muted-foreground">{award.event}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;