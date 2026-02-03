import { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
}

const FloatingParticles = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const colors = [
      'hsl(35, 90%, 60%)',    // amber
      'hsl(140, 25%, 75%)',   // sage
      'hsl(15, 60%, 60%)',    // terracotta
      'hsl(45, 40%, 85%)',    // cream
      'hsl(35, 80%, 70%)',    // light amber
    ];

    const newParticles: Particle[] = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 12 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      delay: Math.random() * 10,
      duration: Math.random() * 10 + 15,
    }));

    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="floating-particle"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            backgroundColor: particle.color,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            opacity: 0.4,
            filter: 'blur(1px)',
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;