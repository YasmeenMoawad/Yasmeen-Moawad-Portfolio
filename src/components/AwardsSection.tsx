import { Trophy, Medal, Award } from 'lucide-react';

const awards = [
  {
    icon: Trophy,
    title: '1st Place (Twice)',
    event: 'Smart Environment Hackathon',
    color: 'text-amber',
    bgColor: 'bg-amber/10',
  },
  {
    icon: Medal,
    title: 'Final Stage',
    event: 'Made In Egypt (MIE) Competition',
    color: 'text-primary',
    bgColor: 'bg-primary/10',
  },
  {
    icon: Award,
    title: '6th Placement',
    event: 'IEEE VICTORIES 2.0 Competition',
    color: 'text-terracotta',
    bgColor: 'bg-terracotta/10',
  },
];

const AwardsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Awards & Achievements</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <div
              key={award.title}
              className="glass-card rounded-2xl p-6 text-center opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.15}s`, animationFillMode: 'forwards' }}
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl ${award.bgColor} flex items-center justify-center`}>
                <award.icon className={`w-8 h-8 ${award.color}`} />
              </div>
              <h3 className="text-xl font-display font-bold mb-2">{award.title}</h3>
              <p className="text-sm text-muted-foreground">{award.event}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;