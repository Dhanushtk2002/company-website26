import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="grid-container hero-wrapper">
        <div className="hero-content animate-fade-in">
          <h1 className="hero-title">
            The World’s First <br />
            <span className="text-secondary">AI Creative</span> <br />
            Powerhouse
          </h1>
          <p className="hero-subtitle">
            Strategic decoding of brand and culture. We build viral <br />
            identities for the digital-first generation.
          </p>
          
          <div className="hero-actions">
            <button className="btn-primary">
              JOIN THE REVOLUTION <ArrowRight size={20} />
            </button>
            <div className="watch-action">
              <div className="play-ring">
                <Play size={16} fill="white" stroke="none" />
              </div>
              <span>WATCH VIDEO</span>
            </div>
          </div>

          <div className="hero-stats">
            <div className="stat-unit">
              <span className="unit-value">06+</span>
              <span className="unit-label">YEARS OF <br />CREATIVITY</span>
            </div>
            <div className="vertical-spacer"></div>
            <div className="stat-unit">
              <span className="unit-value">100+</span>
              <span className="unit-label">PROJECTS <br />COMPLETED</span>
            </div>
            <div className="vertical-spacer"></div>
            <div className="stat-unit">
              <span className="unit-value">15K+</span>
              <span className="unit-label">CREATORS <br />SKILLED</span>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background-art"></div>
    </section>
  );
};

export default Hero;
