import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactBanner = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass-card rounded-3xl p-8 md:p-12 text-center relative overflow-hidden">
          {/* Decorative gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber/5 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Let's Build Something <span className="gradient-text">Amazing</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Whether you have a project in mind or just want to connect, I'd love to hear from you. 
              Let's turn your ideas into reality.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-5 h-5 text-primary" />
                <span>+20 1099794847</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="w-5 h-5 text-primary" />
                <span>yasmeenmwd@gmail.com</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Egypt</span>
              </div>
            </div>
            
            <a
              href="mailto:yasmeenmwd@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              style={{ boxShadow: '0 10px 40px hsl(35 80% 55% / 0.3)' }}
            >
              <Send className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </div>
        
        <footer className="mt-12 text-center text-sm text-muted-foreground">
          <p>© 2025 Yasmeen Moawad. Crafted with passion and Flutter 💛</p>
        </footer>
      </div>
    </section>
  );
};

export default ContactBanner;