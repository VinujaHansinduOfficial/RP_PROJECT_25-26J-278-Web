import React from 'react';
import './Hero.css';

const heroCards = [
  { ico: '😌', title: 'Emotion Detection', desc: 'Real-time facial analysis during video consultations', pill: 'Deep Learning', pillClass: 'pt' },
  { ico: '🔮', title: 'Mental Health Forecasting', desc: '3-month predictive outlook via LSTM', pill: 'LSTM · ARIMA', pillClass: 'pb' },
  { ico: '🤖', title: 'On-Device AI', desc: 'Privacy-first behavior summarization', pill: 'Flutter', pillClass: 'pt' },
  { ico: '🔥', title: 'Burnout Detection', desc: 'NLP + ML journal & behavioral analysis', pill: 'NLP · RF', pillClass: 'pb' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-badge">
            <span className="badge-dot" />
            Project 25-26J-278 · SLIIT 2026
          </div>
          <h1 className="hero-title">
            AI Mobile App for<br />
            <span className="teal">Early Identification</span>
            <span className="sub">of Student Mental Health</span>
          </h1>
          <p className="hero-desc">
            An intelligent, multimodal platform detecting stress, anxiety, burnout, and
            depression in university students through behavioral AI, facial emotion
            recognition, and time-series forecasting.
          </p>
          <div className="hero-btns">
            <a href="#domain" className="btn btn-teal">Explore Project</a>
            <a href="#documents" className="btn btn-ghost">Downloads</a>
          </div>
          <div className="hero-stats">
            <div className="hstat"><div className="n">4</div><div className="l">AI Components</div></div>
            <div className="hstat"><div className="n">4</div><div className="l">Team Members</div></div>
            <div className="hstat"><div className="n">2026</div><div className="l">SLIIT · IT Dept</div></div>
          </div>
        </div>

        <div className="hero-cards">
          {heroCards.map((c, i) => (
            <div className="hc" key={i}>
              <div className="ico">{c.ico}</div>
              <h4>{c.title}</h4>
              <p>{c.desc}</p>
              <span className={`pill ${c.pillClass}`}>{c.pill}</span>
            </div>
          ))}
          <div className="hc span2">
            <div className="ico wide-ico">📱</div>
            <div>
              <h4>Cross-Platform Mobile App</h4>
              <p>Flutter · FastAPI · MongoDB · TensorFlow</p>
              <div className="wide-pills">
                <span className="pill pt">4 AI Modules</span>
                <span className="pill pb">Privacy First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
