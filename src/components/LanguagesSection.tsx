import { Languages, Award } from 'lucide-react';

const LanguagesSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-terracotta-light/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Languages</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-2xl p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-primary/10">
                <Languages className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-display font-bold">Arabic</h3>
                <span className="text-sm text-muted-foreground">Native Speaker</span>
              </div>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-primary h-2 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
          
          <div className="glass-card rounded-2xl p-6 animate-pulse-glow">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-xl bg-amber/20">
                <Languages className="w-6 h-6 text-amber" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-display font-bold">English</h3>
                <span className="text-sm text-muted-foreground">Professional Proficiency</span>
              </div>
            </div>
            
            <div className="w-full bg-muted rounded-full h-2 mb-4">
              <div className="bg-amber h-2 rounded-full" style={{ width: '90%' }} />
            </div>
            
            <div className="flex items-center gap-2 p-3 rounded-xl bg-amber/10 border border-amber/20">
              <Award className="w-5 h-5 text-amber" />
              <div>
                <span className="font-semibold text-amber">IELTS Academic: Band 7</span>
                <span className="text-sm text-muted-foreground ml-2">December 2024</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LanguagesSection;