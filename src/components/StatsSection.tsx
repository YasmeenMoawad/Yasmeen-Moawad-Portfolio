import { Briefcase, Building2, GraduationCap, Trophy, Award, Heart } from 'lucide-react';

const stats = [
  { icon: Briefcase, label: 'Projects Built', value: '5+', color: 'text-primary' },
  { icon: Building2, label: 'Companies Worked', value: '2', color: 'text-terracotta' },
  { icon: GraduationCap, label: 'Internships Completed', value: '2', color: 'text-sage' },
  { icon: Trophy, label: 'Competitions Competed', value: '3', color: 'text-amber' },
  { icon: Award, label: 'Awards Earned', value: '3', color: 'text-accent' },
  { icon: Heart, label: 'Organizations Volunteered', value: '5', color: 'text-secondary-foreground' },
];

const StatsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">My Journey in Numbers</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color}`} />
              <div className="text-3xl md:text-4xl font-display font-bold mb-2 gradient-text">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;