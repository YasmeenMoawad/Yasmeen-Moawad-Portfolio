import { Heart, Users, Globe } from 'lucide-react';

const volunteering = [
  {
    title: 'Global Circles Participant',
    organization: 'Soliya',
    period: 'Mar 2025',
    description: 'Collaborated with global groups on sustainability and technology discussions. Sponsored by J. Christopher Stevens Virtual Exchange Initiative.',
  },
  {
    title: 'Mobile App (Flutter) Instructor',
    organization: 'BIOCODE Team',
    period: 'Oct 2024 — Jan 2025',
    description: 'Taught Dart language and Flutter framework foundations, guiding students in problem-solving practices.',
  },
  {
    title: 'Mobile App Developer',
    organization: 'IEEE ManCSC',
    period: 'Apr 2023 — Nov 2023',
    description: 'Nurtured a community dedicated to exchanging technical insights in computer science.',
  },
  {
    title: 'Mobile App Developer & Supervisor Technical HR',
    organization: 'CAT Reloaded Organization',
    period: 'Dec 2021 — Feb 2023',
    description: 'Directed Technical HR team in recruitment and streamlined onboarding processes for volunteers.',
  },
  {
    title: 'Mobile App Developer & Head HR',
    organization: 'MEGA Team',
    period: 'Oct 2020 — Sep 2023',
    description: 'Organized the MEGAverse event with international tech experts. Managed professional development workshops.',
  },
];

const VolunteeringSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-sage-light/30 to-transparent">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-center">Volunteering & Community</h2>
        
        <div className="space-y-4">
          {volunteering.map((item, index) => (
            <div
              key={item.organization}
              className="glass-card rounded-2xl p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-xl bg-secondary/50 flex-shrink-0">
                  <Heart className="w-5 h-5 text-terracotta" />
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <span className="text-sm font-medium text-primary">{item.period}</span>
                  </div>
                  <h3 className="text-lg font-display font-bold">{item.title}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.organization}</p>
                  <p className="text-sm text-foreground/80">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VolunteeringSection;