import React, { useState } from 'react';

const VerifyCertificate = () => {
  const [certId, setCertId] = useState('');
  const [email, setEmail] = useState('');
  const [result, setResult] = useState(null);

  const handleVerify = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ certificateId: certId, email })
      });
      const data = await res.json();
      setResult(data);
    } catch (err) {
      console.error(err);
      setResult({ isValid: false, message: 'SERVER ERROR PINGING VERIFICATION API.' });
    }
  };

  return (
    <div style={{ backgroundColor: '#000', minHeight: '100vh', paddingTop: '160px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div className="grid-container" style={{ maxWidth: '700px', textAlign: 'center', border: 'none' }}>
        <h1 style={{ fontSize: '64px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '-2px', marginBottom: '16px', fontFamily: "'Fira Sans', sans-serif" }}>Verify.</h1>
        <p style={{ color: 'var(--color-text-dim)', fontSize: '18px', marginBottom: '64px' }}>Validate the authenticity of your GenLab AI certification.</p>
        
        <form onSubmit={handleVerify} style={{ display: 'flex', flexDirection: 'column', gap: '28px', background: 'rgba(255, 255, 255, 0.02)', padding: '64px', border: '1px solid var(--color-border)', borderRadius: '16px' }}>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-dim)', letterSpacing: '1px' }}>Certificate ID</label>
            <input 
              type="text" 
              value={certId}
              onChange={(e) => setCertId(e.target.value)}
              placeholder="GL-XXXX-XXXX"
              style={inputS} 
              required
            />
          </div>
          <div style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--color-text-dim)', letterSpacing: '1px' }}>Registered Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="student@example.com"
              style={inputS} 
              required
            />
          </div>
          <button type="submit" className="btn-primary" style={{ width: '100%', justifyContent: 'center', border: 'none', cursor: 'pointer', marginTop: '16px' }}>
            VERIFY CREDENTIAL
          </button>
          {result && (
            <div style={{ marginTop: '24px', padding: '16px', background: result.isValid ? 'rgba(184, 239, 67, 0.1)' : 'rgba(255, 0, 0, 0.1)', color: result.isValid ? 'var(--color-primary)' : '#ff4444', fontWeight: 700, borderRadius: '4px', fontSize: '13px' }}>
              {result.message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

const inputS = {
  padding: '16px',
  background: 'transparent',
  border: '1px solid var(--color-border)',
  color: '#fff',
  borderRadius: '4px',
  fontSize: '16px',
  outline: 'none',
  fontFamily: "'Inter', sans-serif"
};

export default VerifyCertificate;
