import React from 'react';
import './Tech.css';

const row1 = [
  { name: 'Flutter', svg: <svg viewBox="0 0 128 128"><defs><linearGradient id="fl1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#54C5F8"/><stop offset="100%" stopColor="#01579B"/></linearGradient></defs><path fill="#54C5F8" d="M12.3 64.2L76.3 0h39.4L27.7 64.2z"/><path fill="#01579B" d="M76.3 128h39.4L76.3 89.2 64 77z"/><path fill="#29B6F6" d="M27.7 64.2l36.3 36.3 12.3-12.3L40 52z"/><path fill="url(#fl1)" d="M64 77l12.3 12.3 39.4-25.1z"/></svg> },
  { name: 'FastAPI', svg: <svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="60" fill="#009485"/><path fill="#fff" d="M71 24l-28 44h26l-5 36 28-44H66z"/></svg> },
  { name: 'MongoDB', svg: <svg viewBox="0 0 128 128"><path fill="#4FAA41" d="M64 8C46 8 32 44 32 64c0 15 8 28 20 34l4 22h16l4-22c12-6 20-19 20-34C96 44 82 8 64 8z"/></svg> },
  { name: 'Python', svg: <svg viewBox="0 0 128 128"><path fill="#3776AB" d="M63.4 5C40 5 41.6 15 41.6 15l0 10.4h22.2v3.1H31S16 26.8 16 50.6c0 23.8 13.1 22.9 13.1 22.9h7.8v-11S36.4 49 50 49h21.8s12.8.2 12.8-12.4V17.2S86.7 5 63.4 5zM52 15.2c2.3 0 4.2 1.9 4.2 4.2s-1.9 4.2-4.2 4.2-4.2-1.9-4.2-4.2 1.9-4.2 4.2-4.2z"/><path fill="#FFC331" d="M64.6 123c23.4 0 21.8-10 21.8-10l0-10.4H64.2v-3.1H97S112 101.2 112 77.4c0-23.8-13.1-22.9-13.1-22.9h-7.8v11s.5 13.5-13.1 13.5H56.2s-12.8-.2-12.8 12.4v19.4S41.3 123 64.6 123zM76 112.8c-2.3 0-4.2-1.9-4.2-4.2s1.9-4.2 4.2-4.2 4.2 1.9 4.2 4.2-1.9 4.2-4.2 4.2z"/></svg> },
  { name: 'TensorFlow', svg: <svg viewBox="0 0 128 128"><path fill="#FF6F00" d="M64 8L16 36v56l48 28 48-28V36L64 8zm0 12l36 21v42L64 104 28 83V41L64 20z"/><path fill="#FF6F00" d="M64 42v44l22-12.7V54.7L64 42zm-4 0L38 54.7v19.6L60 86V42z"/></svg> },
  { name: 'Scikit-learn', svg: <svg viewBox="0 0 128 128"><path fill="#F7931E" d="M64 20C40 20 20 40 20 64s20 44 44 44 44-20 44-44S88 20 64 20z"/><path fill="#fff" d="M44 56h40v16H44z"/><circle fill="#3499CD" cx="44" cy="64" r="10"/><circle fill="#3499CD" cx="84" cy="64" r="10"/></svg> },
  { name: 'LSTM', svg: <svg viewBox="0 0 128 128"><rect x="16" y="40" width="96" height="48" rx="8" fill="#a880ff"/><circle cx="40" cy="64" r="10" fill="#fff"/><circle cx="64" cy="64" r="10" fill="#fff"/><circle cx="88" cy="64" r="10" fill="#fff"/><path stroke="#fff" strokeWidth="3" fill="none" d="M40 54 Q52 40 64 54 Q76 68 88 54"/></svg> },
];

const row2 = [
  { name: 'Random Forest', svg: <svg viewBox="0 0 128 128"><rect x="20" y="70" width="16" height="40" rx="3" fill="#4FAA41"/><rect x="44" y="50" width="16" height="60" rx="3" fill="#4FAA41"/><rect x="68" y="60" width="16" height="50" rx="3" fill="#4FAA41"/><rect x="92" y="40" width="16" height="70" rx="3" fill="#4FAA41"/><ellipse cx="28" cy="56" rx="14" ry="18" fill="#388E3C"/><ellipse cx="52" cy="34" rx="14" ry="20" fill="#388E3C"/><ellipse cx="76" cy="44" rx="14" ry="18" fill="#388E3C"/><ellipse cx="100" cy="28" rx="14" ry="20" fill="#388E3C"/></svg> },
  { name: 'OpenCV', svg: <svg viewBox="0 0 128 128"><circle cx="64" cy="64" r="30" fill="none" stroke="#5C2D91" strokeWidth="10"/><circle cx="64" cy="30" r="10" fill="#FF0000"/><circle cx="38" cy="74" r="10" fill="#00AA00"/><circle cx="90" cy="74" r="10" fill="#0000FF"/></svg> },
  { name: 'NLP', svg: <svg viewBox="0 0 128 128"><rect x="16" y="24" width="96" height="80" rx="10" fill="#185FA5"/><rect x="28" y="40" width="52" height="6" rx="3" fill="#fff"/><rect x="28" y="54" width="72" height="6" rx="3" fill="rgba(255,255,255,0.6)"/><rect x="28" y="68" width="60" height="6" rx="3" fill="rgba(255,255,255,0.6)"/><rect x="28" y="82" width="40" height="6" rx="3" fill="rgba(255,255,255,0.4)"/></svg> },
  { name: 'ARIMA', svg: <svg viewBox="0 0 128 128"><polyline points="10,100 30,70 50,85 70,45 90,60 110,20" stroke="#64a0ff" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round"/><line x1="10" y1="108" x2="118" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/><line x1="10" y1="20" x2="10" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/></svg> },
  { name: 'Logistic Regression', svg: <svg viewBox="0 0 128 128"><path d="M10 100 Q40 100 64 64 Q88 28 118 28" stroke="#ffa050" strokeWidth="5" fill="none" strokeLinecap="round"/><line x1="10" y1="108" x2="118" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/><line x1="10" y1="16" x2="10" y2="108" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/></svg> },
  { name: 'Dart', svg: <svg viewBox="0 0 128 128"><path fill="#00B4AB" d="M22 22l20-14h44l26 26v44l-14 20L22 22z"/><path fill="#00D2CC" d="M22 22l76 76-20 14H34L8 86V42l14-20z"/></svg> },
  { name: 'Jupyter', svg: <svg viewBox="0 0 128 128"><ellipse cx="64" cy="64" rx="40" ry="40" fill="none" stroke="#F37726" strokeWidth="8"/><circle cx="64" cy="24" r="10" fill="#F37726"/><circle cx="30" cy="84" r="8" fill="#9E9E9E"/><circle cx="98" cy="84" r="8" fill="#616161"/></svg> },
];

function TechCard({ name, svg }) {
  return (
    <div className="tech-card">
      <div className="ti-svg">{svg}</div>
      <span className="tname">{name}</span>
    </div>
  );
}

export default function Tech() {
  return (
    <section id="tech" className="tech-section">
      <div className="container">
        <p className="s-eyebrow tech-eyebrow">Tech Stack</p>
        <h2 className="s-title tech-title">Technologies Used</h2>
        <div className="s-bar" />
        <div className="tech-grid">
          {row1.map(t => <TechCard key={t.name} {...t} />)}
        </div>
        <div className="tech-grid" style={{ marginTop: '1rem' }}>
          {row2.map(t => <TechCard key={t.name} {...t} />)}
        </div>
      </div>
    </section>
  );
}
