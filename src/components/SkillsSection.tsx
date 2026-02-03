const technicalSkills = [
  'Dart & Flutter',
  'Clean Architecture',
  'State Management (BLoC, Cubit)',
  'REST APIs',
  'Firebase',
  'Responsive UI',
  'Animations',
  'Version Control (Git)',
  'Python',
  'C++',
  'Data Structures & Algorithms',
  'SDLC & Agile',
  'Testing & Debugging',
  'Figma',
];

const softSkills = [
  'Team Leadership',
  'Presentation Skills',
  'Strategic Planning',
  'Cross-cultural Communication',
  'Problem Solving',
  'Mentoring & Teaching',
];

const SkillsSection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-transparent via-muted/30 to-transparent">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title text-center">Technical Expertise</h2>
        
        <div className="mb-12">
          <h3 className="text-xl font-display font-semibold mb-6 text-center text-muted-foreground">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technicalSkills.map((skill, index) => (
              <span
                key={skill}
                className="skill-badge opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s`, animationFillMode: 'forwards' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-display font-semibold mb-6 text-center text-muted-foreground">
            Soft Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={skill}
                className="skill-badge bg-secondary/50 opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05 + 0.5}s`, animationFillMode: 'forwards' }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;