import React, { useState } from 'react';
import Hero from '../components/Hero';
import ContactForm from '../components/ContactForm';
import { ArrowUpRight, CheckCircle2, ChevronRight, ChevronLeft } from 'lucide-react';
import './Home.css';
import ProgramCurriculum from '../components/ProgramCurriculum';

const Home = () => {
  const [activeStep, setActiveStep] = useState(0);

  const specialists = [
    { name: 'Arjun Das', metric: '150+ Projects', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&h=200&fit=crop' },
    { name: 'Sarah Khan', metric: 'AI Strategist', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&h=200&fit=crop' },
    { name: 'Leo Chen', metric: 'Growth Lead', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&h=200&fit=crop' },
    { name: 'Maya Reddy', metric: 'Creative Dir', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&h=200&fit=crop' },
    { name: 'Vikram S.', metric: 'ML Engineer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&h=200&fit=crop' }
  ];

  const tools = [
    'Midjourney', 'ChatGPT', 'Firefly', 'Runway', 'Luma AI', 'ElevenLabs', 'Claude', 'DALL-E'
  ];

  const journeySteps = [
    {
      num: '01',
      title: 'Decoding Culture',
      session: 'PHASE 1 • STRATEGY',
      desc: 'We map the digital landscape to find your brand\'s unique viral hook.',
      points: ['Market Sentiment Analysis', 'Gen Z Trend Mapping', 'AI-Driven Persona Building']
    },
    {
      num: '02',
      title: 'Neural Branding',
      session: 'PHASE 2 • IDENTITY',
      desc: 'Architecting a visual language that resonates with algorithms and humans alike.',
      points: ['Algorithmic Visual Design', 'Sonic Branding', 'Custom LLM Personality']
    },
    {
      num: '03',
      title: 'Viral Injection',
      session: 'PHASE 3 • EXECUTION',
      desc: 'Deploying high-impact content across the digital nervous system.',
      points: ['Hyper-Local Distribution', 'Engagement Optimization', 'Scale-Ready Assets']
    }
  ];

  const testimonials = [
    { name: 'Rohan M.', role: 'Startup Founder', quote: 'GenLab didn\'t just build our brand, they gave it a soul that resonates with our audience.', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&h=600&fit=crop' },
    { name: 'Elena G.', role: 'CMO, TechFlow', quote: 'The AI Forge workflow we implemented cut our content production time by 80%. Absolute game changer.', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=600&fit=crop' },
    { name: 'Kevin J.', role: 'Creative Director', quote: 'They understand the internet better than anyone else. Pure Gen Z genius.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=400&h=600&fit=crop' }
  ];

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home-page">
      <div id="hero">
        <Hero />
      </div>

      {/* Specialists Section */}
      <section id="specialists" className="specialists-section">
        <div className="grid-container">
          <p className="section-subtitle">OUR SPECIALISTS</p>
          <div className="specialists-row">
            {specialists.map((s, i) => (
              <div key={i} className="specialist-item">
                <div className="specialist-img-box">
                  <img src={s.img} alt={s.name} className="specialist-img" />
                  <div className="specialist-bubble">
                    <p className="bubble-name">{s.name}</p>
                    <p className="bubble-metric">{s.metric}</p>
                  </div>
                  <svg className="connector-svg" width="40" height="40" viewBox="0 0 40 40">
                    <path d="M0,40 Q20,40 20,0" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="tools-section">
        <div className="grid-container">
          <div className="tools-grid">
            {tools.map(t => (
              <div key={t} className="tool-item">
                <span className="tool-name">{t}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vertical Grid (Existing Solutions) */}
      <section id="solutions" className="verticals-wrapper">
        <div className="grid-container">
          <div className="section-intro">
            <span className="badge">VERTICALS</span>
            <h2 className="display-title">Core Capabilities</h2>
          </div>
          <div className="cards-grid">
            {['Launchpad', 'AI Forge', 'Brand Studio'].map((title, i) => (
              <div key={i} className="pixel-card">
                <div className="p-card-header">
                  <span className="p-card-id">/0{i+1}</span>
                  <div className="p-card-arrow-box"><ArrowUpRight size={20} /></div>
                </div>
                <div className="p-card-body">
                  <h3 className="p-card-title">GenLab.{title}</h3>
                  <p className="p-card-desc">Advanced AI integration and strategic positioning for digital-native brands.</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Replaced Learning Journey with high-end curriculum section */}
      <ProgramCurriculum />

      {/* Growth Section */}
      <section id="growth" className="growth-section">
        <div className="grid-container">
           <div className="growth-layout">
              <div className="growth-text">
                <h2 className="giant-title">Growth Potential.</h2>
                <p className="growth-sub">Our AI-driven methodology ensures exponential brand scaling.</p>
              </div>
              <div className="growth-graph-box">
                <img src="/genlab_growth_graph.png" alt="Growth Graph" className="growth-img" />
                <div className="graph-dot dot-1"><span className="dot-label">Phase 1</span></div>
                <div className="graph-dot dot-2"><span className="dot-label">Phase 2</span></div>
                <div className="graph-dot dot-3"><span className="dot-label">Phase 3</span></div>
              </div>
           </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="testimonials-section">
        <div className="grid-container">
          <div className="test-header">
            <h2 className="test-title">Real Impact. <br />Real Stories.</h2>
            <div className="test-nav">
              <button className="nav-circ"><ChevronLeft size={24} /></button>
              <button className="nav-circ"><ChevronRight size={24} /></button>
            </div>
          </div>
          
          <div className="test-slider">
            {testimonials.map((t, i) => (
              <div key={i} className="test-card">
                <div className="test-img-wrap">
                  <img src={t.img} alt={t.name} />
                </div>
                <div className="test-body">
                  <p className="test-quote">"{t.quote}"</p>
                  <div className="test-meta">
                    <p className="test-name">{t.name}</p>
                    <p className="test-role">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sample Certificate Section */}
      <section id="sample-certificate" className="certificate-sample-section">
        <div className="grid-container">
          <div className="section-intro" style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span className="badge">VERIFICATION</span>
            <h2 className="display-title">Your Achievement. <br />Recognized Anywhere.</h2>
            <p style={{ color: 'var(--color-text-dim)', fontSize: '18px', marginTop: '16px', maxWidth: '600px', margin: '16px auto' }}>
              Every GenLab graduate receives a cryptographically verifiable AI certification, recognized by industry leaders worldwide.
            </p>
          </div>
          <div className="certificate-display" style={{ display: 'flex', justifyContent: 'center', perspective: '1000px' }}>
             <img 
               src="/sample_certificate.png" 
               alt="Sample Certificate" 
               style={{ 
                 maxWidth: '900px', 
                 width: '100%', 
                 borderRadius: '12px', 
                 boxShadow: '0 32px 64px rgba(0,0,0,0.5)', 
                 transform: 'rotateX(5deg)',
                 border: '1px solid var(--color-border)'
               }} 
             />
          </div>
        </div>
      </section>

      <div id="contact">
        <ContactForm />
      </div>

      <div className="conversion-bar">
        <div className="conversion-content">
          <p>Ready to build your viral brand?</p>
          <a href="#contact" className="bar-cta">GET STARTED NOW</a>
        </div>
      </div>
    </div>
  );
};

export default Home;
