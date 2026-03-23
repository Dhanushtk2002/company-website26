import React from 'react';

const People = () => {
  const team = [
    { name: 'Arjun Das', role: 'Founder & AI Architect', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Sarah Khan', role: 'Creative Director', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop' },
    { name: 'Leo Chen', role: 'Head of Growth', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop' }
  ];

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '160px' }}>
      <div className="grid-container" style={{ borderBottom: '1px solid var(--color-border)' }}>
        <h1 style={{ fontSize: '72px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-3px', marginBottom: '24px', fontFamily: "'Fira Sans', sans-serif" }}>Meet the Team.</h1>
        <p style={{ color: 'var(--color-text-dim)', fontSize: '20px', maxWidth: '650px', marginBottom: '80px', lineHeight: 1.5 }}>
          The Gen Z force behind the world's most viral AI movements. Optimized for culture, driven by algorithms.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: 'var(--color-border)', borderTop: '1px solid var(--color-border)', borderBottom: '1px solid var(--color-border)' }}>
          {team.map((member, i) => (
            <div key={i} style={{ backgroundColor: '#000', padding: '48px', borderRight: i === 2 ? 'none' : '1px solid var(--color-border)' }}>
              <div style={{ width: '100%', aspectRatio: '1', backgroundColor: '#111', marginBottom: '32px', filter: 'grayscale(100%) brightness(0.7)' }}>
                 <img src={member.image} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px', fontFamily: "'Fira Sans', sans-serif" }}>{member.name}</h3>
              <p style={{ color: 'var(--color-primary)', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default People;
