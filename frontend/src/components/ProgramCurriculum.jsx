import React, { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import './ProgramCurriculum.css';

const chapters = [
  {
    id: '01',
    title: 'DECODING CULTURE',
    session: 'DAY 1 • SESSION 1 • 10 AM - 12 PM',
    desc: 'We map the digital landscape to find your brand\'s unique viral hook. Understanding the Gen Z pulse and algorithmic trends.',
    points: ['Market Sentiment Analysis', 'Gen Z Trend Mapping', 'AI-Driven Persona Building', 'Viral Hook Identification'],
    bgImage: '/decoding_culture.png'
  },
  {
    id: '02',
    title: 'NEURAL BRANDING',
    session: 'DAY 1 • SESSION 2 • 2 PM - 4 PM',
    desc: 'Architecting a visual language that resonates with algorithms and humans alike. Creating a neural-sync identity.',
    points: ['Algorithmic Visual Design', 'Sonic Branding', 'Custom LLM Personality', 'Brand Soul Convergence'],
    bgImage: '/neural_branding.png'
  },
  {
    id: '03',
    title: 'VIRAL INJECTION',
    session: 'DAY 2 • SESSION 1 • 11 AM - 1 PM',
    desc: 'Deploying high-impact content across the digital nervous system. Mastering the art of algorithmic saturation.',
    points: ['Hyper-Local Distribution', 'Engagement Optimization', 'Scale-Ready Assets', 'Network Effect Triggering'],
    bgImage: '/viral_injection.png'
  },
  {
    id: '04',
    title: 'MASTERMIND GRADUATION',
    session: 'DAY 2 • SESSION 2 • 4 PM - 6 PM',
    desc: 'Celebrate your achievement, recap your learning, and launch your AI journey beyond the workshop with confidence.',
    points: ['Achievement Celebration', 'Learning Recap', 'Community Launchpad', 'Future AI Roadmap'],
    bgImage: '/graduation.png'
  }
];

const ProgramCurriculum = () => {
  const [activeChapter, setActiveChapter] = useState('01');
  const chapterRefs = useRef({});

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -70% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveChapter(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    Object.values(chapterRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="curriculum-section" id="curriculum">
      <div className="grid-container curriculum-layout">
        {/* Sidebar */}
        <div className="curriculum-sidebar">
          <div className="sidebar-sticky">
            <p className="sidebar-label">CURRICULUM</p>
            <div className="chapter-list">
              {chapters.map((chapter) => (
                <button
                  key={chapter.id}
                  className={`chapter-link ${activeChapter === chapter.id ? 'active' : ''}`}
                  onClick={() => scrollToChapter(chapter.id)}
                >
                  <span className="chapter-id">{chapter.id}</span>
                  <span className="chapter-title">{chapter.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="curriculum-content">
          {chapters.map((chapter) => (
            <div
              key={chapter.id}
              id={chapter.id}
              className="chapter-block"
              ref={(el) => (chapterRefs.current[chapter.id] = el)}
            >
              <div className="chapter-info">
                <span className="chapter-badge">MODULE {chapter.id}</span>
                <h2 className="chapter-main-title">{chapter.title}</h2>
                <p className="chapter-desc">{chapter.desc}</p>
                <div className="chapter-checklist">
                  {chapter.points.map((point, idx) => (
                    <div key={idx} className="checklist-item">
                      <CheckCircle2 size={18} className="check-icon" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="chapter-banner-box">
                <div className="banner-image-container">
                    <img src={chapter.bgImage} alt={chapter.title} className="banner-img" />
                    <div className="banner-overlay">
                        <div className="banner-text">
                            <span className="banner-session">{chapter.session}</span>
                        </div>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramCurriculum;
