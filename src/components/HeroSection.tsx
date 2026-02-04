import { Phone, Mail, Github, Linkedin, Heart, Sparkles, Code, Star } from 'lucide-react';
import { motion } from 'framer-motion';
import profileImage from '@/assets/yasmeen-profile.jpg';

const FloatingIcon = ({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    className={`absolute ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5, type: "spring" }}
  >
    <motion.div
      animate={{ 
        y: [0, -10, 0],
        rotate: [0, 5, -5, 0]
      }}
      transition={{ 
        duration: 4,
        repeat: Infinity,
        delay: delay * 0.5
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
      {/* Animated background shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-primary/20 to-amber/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-sage/30 to-secondary/30 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-terracotta/10 to-cream/20 rounded-full blur-3xl"
          animate={{ 
            rotate: [0, 360]
          }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <motion.div variants={itemVariants} className="mb-4">
              <motion.span 
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium tracking-wide text-primary"
                whileHover={{ scale: 1.05 }}
              >
                <Sparkles className="w-4 h-4" />
                Mobile Application Developer
              </motion.span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              <span className="block text-foreground">Hi, I'm</span>
              <motion.span 
                className="gradient-text inline-block"
                animate={{ backgroundPosition: ["0% center", "100% center", "0% center"] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: "200% auto" }}
              >
                Yasmeen
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed font-body"
            >
              A passionate Flutter Developer dedicated to crafting exceptional mobile experiences. 
              I transform innovative ideas into polished applications, blending clean architecture 
              with intuitive design. With experience in team leadership and technical mentoring, 
              I thrive in collaborative environments where creativity meets code.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-3"
            >
              {[
                { href: "tel:+201099794847", icon: Phone, label: "Call Me", color: "bg-primary" },
                { href: "mailto:yasmeenmwd@gmail.com", icon: Mail, label: "Email", color: "bg-terracotta" },
                { href: "https://github.com/YasmeenMoawad", icon: Github, label: "GitHub", color: "bg-warm-brown" },
                { href: "https://www.linkedin.com/in/yasmeen-moawad", icon: Linkedin, label: "LinkedIn", color: "bg-sage" },
              ].map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`flex items-center gap-2 px-5 py-3 rounded-full ${item.color} text-primary-foreground font-medium shadow-lg transition-all duration-300`}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -3,
                    boxShadow: "0 20px 40px rgba(0,0,0,0.15)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Photo Section */}
          <motion.div 
            className="relative order-1 lg:order-2 flex justify-center"
            variants={itemVariants}
          >
            {/* Floating decorative icons */}
            <FloatingIcon delay={0.5} className="top-0 right-10 lg:right-0">
              <div className="p-3 rounded-2xl bg-amber/20 backdrop-blur-sm">
                <Heart className="w-6 h-6 text-amber" fill="currentColor" />
              </div>
            </FloatingIcon>
            
            <FloatingIcon delay={0.7} className="top-1/4 -left-4 lg:left-0">
              <div className="p-3 rounded-2xl bg-primary/20 backdrop-blur-sm">
                <Code className="w-6 h-6 text-primary" />
              </div>
            </FloatingIcon>
            
            <FloatingIcon delay={0.9} className="bottom-20 -right-4 lg:right-0">
              <div className="p-3 rounded-2xl bg-terracotta/20 backdrop-blur-sm">
                <Star className="w-6 h-6 text-terracotta" fill="currentColor" />
              </div>
            </FloatingIcon>

            <FloatingIcon delay={1.1} className="bottom-10 left-10">
              <div className="p-2 rounded-xl bg-sage/20 backdrop-blur-sm">
                <Sparkles className="w-5 h-5 text-sage" />
              </div>
            </FloatingIcon>

            {/* Main photo container */}
            <div className="relative">
              {/* Morphing background blob */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-br from-primary via-amber to-terracotta animate-morph"
                style={{ filter: 'blur(40px)', opacity: 0.4 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              />
              
              {/* Rotating ring */}
              <motion.div 
                className="absolute -inset-4 rounded-full border-2 border-dashed border-primary/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Second rotating ring */}
              <motion.div 
                className="absolute -inset-8 rounded-full border border-amber/20"
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />

              {/* Photo frame with glow */}
              <motion.div 
                className="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Animated border */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-amber to-terracotta p-1 animate-gradient-shift" style={{ backgroundSize: "200% 200%" }}>
                  <div className="w-full h-full rounded-full overflow-hidden bg-background">
                    <motion.img 
                      src={profileImage} 
                      alt="Yasmeen Moawad" 
                      className="w-full h-full object-cover object-center"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1 }}
                    />
                  </div>
                </div>
                
                {/* Shine effect */}
                <motion.div 
                  className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-full"
                  animate={{ 
                    x: ["-100%", "100%"],
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    repeatDelay: 5
                  }}
                />
              </motion.div>

              {/* Sparkle particles around photo */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-amber rounded-full"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.5,
                  }}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="flex flex-col items-center gap-2 text-muted-foreground">
            <span className="text-sm font-medium">Scroll to explore</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;