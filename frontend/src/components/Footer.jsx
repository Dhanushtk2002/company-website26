import React from 'react';

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div className="grid-container" style={containerStyle}>
        <div style={brandCol}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '-1px', marginBottom: '24px', fontFamily: "'Fira Sans', sans-serif" }}>genlab.</h2>
          <p style={{ color: 'var(--color-text-dim)', fontSize: '15px', maxWidth: '280px', lineHeight: 1.6 }}>
            The world's first Gen Z AI creative powerhouse. Decoding culture and building viral movements since 2018.
          </p>
        </div>
        
        <div style={linkGrid}>
          <div style={linkCol}>
            <p style={colTitle}>Explore</p>
            <a href="#" style={linkS}>Solutions</a>
            <a href="#" style={linkS}>Platform</a>
            <a href="#" style={linkS}>Careers</a>
          </div>
          <div style={linkCol}>
            <p style={colTitle}>Company</p>
            <a href="#" style={linkS}>People</a>
            <a href="#" style={linkS}>Verify</a>
            <a href="#" style={linkS}>Privacy</a>
          </div>
          <div style={linkCol}>
            <p style={colTitle}>Connect</p>
            <a href="#" style={linkS}>LinkedIn</a>
            <a href="#" style={linkS}>Instagram</a>
            <a href="#" style={linkS}>WhatsApp</a>
          </div>
        </div>
      </div>
      
      <div style={bottomBar}>
        <div className="grid-container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: 'none', borderBottom: 'none' }}>
          <p style={{ fontSize: '13px', color: 'var(--color-text-dim)' }}>&copy; {new Date().getFullYear()} GenLab. Built for the future generation.</p>
          <div style={{ display: 'flex', gap: '32px' }}>
             <p style={{ fontSize: '13px', color: 'var(--color-text-dim)' }}>Tamil Nadu, IN</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

const footerStyle = {
  borderTop: '1px solid var(--color-border)',
  padding: '100px 0 0 0',
  backgroundColor: '#000',
  marginTop: '0'
};

const containerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  gap: '64px',
  paddingBottom: '80px',
  flexWrap: 'wrap',
  borderTop: 'none',
  borderBottom: 'none'
};

const brandCol = {
  flex: '1',
  minWidth: '250px'
};

const linkGrid = {
  display: 'flex',
  gap: '80px',
  flexWrap: 'wrap'
};

const linkCol = {
  display: 'flex',
  flexDirection: 'column',
  gap: '14px'
};

const colTitle = {
  fontSize: '11px',
  fontWeight: 700,
  textTransform: 'uppercase',
  color: '#fff',
  letterSpacing: '1.5px',
  marginBottom: '12px',
  fontFamily: "'Fira Sans', sans-serif"
};

const linkS = {
  color: 'var(--color-text-dim)',
  fontSize: '14.4px',
  transition: 'color 0.2s',
  fontWeight: 500
};

const bottomBar = {
  padding: '40px 0',
  borderTop: '1px solid var(--color-border)'
};

export default Footer;
