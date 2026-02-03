import { GraduationCap, Star } from 'lucide-react';

const EducationSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Education</h2>
        
        <div className="glass-card rounded-3xl p-8 md:p-10">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-primary/10">
              <GraduationCap className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-sm font-medium text-muted-foreground">2021 — 2024</span>
                <span className="px-2 py-0.5 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">
                  Mansoura University, Egypt
                </span>
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-3">
                Bachelor of Computer Science
              </h3>
              
              <p className="text-muted-foreground mb-4">
                Faculty of Computer and Information Sciences
              </p>
              
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-amber/10">
                  <Star className="w-4 h-4 text-amber" />
                  <span className="font-semibold">GPA: 3.54</span>
                  <span className="text-muted-foreground">(82.48%)</span>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-terracotta/10 animate-pulse-glow">
                  <Star className="w-4 h-4 text-terracotta" />
                  <span className="font-semibold">Graduation Project:</span>
                  <span className="text-muted-foreground">Excellent with Honors (196/200)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;