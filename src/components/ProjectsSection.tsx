import { ExternalLink, Smartphone } from 'lucide-react';

const projects = [
  {
    name: 'Adala AI App',
    description: 'Legal services application for individuals and companies, providing fast and secure legal assistance that complies with Saudi regulations.',
    technologies: ['Flutter', 'AI Chatbot', 'File Management', 'Hive', 'Firebase', 'MVC Architecture', 'Localization', 'Voice Recorder'],
    playStore: '#',
    appStore: '#',
  },
  {
    name: 'LOCUS (Graduation Project)',
    description: 'Space information and VR simulator application for educational satellites control and space navigation. Led the team as Flutter Developer and Team Leader.',
    technologies: ['Flutter', 'BLoC/Cubit', 'AI Chatbot', 'AI Image Generator', 'Object Detection', 'MVVM Architecture', 'Video Player'],
    playStore: '#',
    appStore: null,
  },
  {
    name: 'EGem Application',
    description: 'Workouts application for online training, providing AI-powered video guidelines and access to professional coaches.',
    technologies: ['Flutter', 'AI Videos', 'Go Router', 'Video Player', 'Shared Preferences', 'MVVM Architecture', 'Localization'],
    playStore: '#',
    appStore: null,
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="section-title text-center mb-4">Featured Projects</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          A showcase of mobile applications I've crafted, each representing my commitment to quality and innovation.
        </p>
        
        <div className="horizontal-scroll">
          {projects.map((project, index) => (
            <div
              key={project.name}
              className="project-card opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-xl bg-primary/10">
                  <Smartphone className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold">{project.name}</h3>
              </div>
              
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 5).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-secondary/50 text-secondary-foreground"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-muted text-muted-foreground">
                    +{project.technologies.length - 5} more
                  </span>
                )}
              </div>
              
              <div className="flex gap-3">
                {project.playStore && (
                  <a
                    href={project.playStore}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary text-sm font-medium hover:bg-primary/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Play Store
                  </a>
                )}
                {project.appStore && (
                  <a
                    href={project.appStore}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 text-accent text-sm font-medium hover:bg-accent/20 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    App Store
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-center text-muted-foreground mt-6 text-sm">
          ← Scroll horizontally to explore more projects →
        </p>
      </div>
    </section>
  );
};

export default ProjectsSection;