import { Phone, Mail, Github, Linkedin } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 relative">
      <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
        <div className="mb-6">
          <span className="text-sm font-medium tracking-widest uppercase text-muted-foreground">
            Mobile Application Developer
          </span>
        </div>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6">
          <span className="gradient-text">Yasmeen Moawad</span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed font-body">
          A passionate Flutter Developer dedicated to crafting exceptional mobile experiences. 
          I transform innovative ideas into polished applications, blending clean architecture 
          with intuitive design. With experience in team leadership and technical mentoring, 
          I thrive in collaborative environments where creativity meets code.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="tel:+201099794847"
            className="contact-btn flex items-center gap-2 glass-card"
          >
            <Phone className="w-4 h-4" />
            <span>Call Me</span>
          </a>
          
          <a
            href="mailto:yasmeenmwd@gmail.com"
            className="contact-btn flex items-center gap-2 glass-card"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
          
          <a
            href="https://github.com/YasmeenMoawad"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn flex items-center gap-2 glass-card"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          
          <a
            href="https://linkedin.com/in/yasmeenmoawad"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-btn flex items-center gap-2 glass-card"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;