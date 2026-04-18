import React from 'react';
import './Domain.css';

const research = [
  {
    ico: '📚', title: 'Literature Survey',
    desc: 'Mental health issues including stress, anxiety, and depression are increasingly prevalent among university students, often undetected due to reliance on self-reporting and infrequent clinical assessments. Existing systems are reactive and fail to provide continuous monitoring.',
    tags: [['Stress Detection','tt'],['Anxiety Classification','tt'],['Depression Analysis','tt']],
  },
  {
    ico: '🔍', title: 'Research Gap',
    desc: 'Current approaches lack multimodal integration — combining behavioral data, facial expressions, physiological signals, and speech analysis in a single privacy-preserving, on-device system tailored for academic environments.',
    tags: [['Multimodal AI','tp'],['Real-time Monitoring','tp'],['On-Device Processing','tp']],
  },
  {
    ico: '🎯', title: 'Research Objectives',
    desc: 'Develop an integrated AI mobile platform that proactively identifies early signs of mental health deterioration, provides personalized interventions, and operates with maximum data privacy for students in higher education.',
    tags: [['Early Detection','tt'],['Personalized Intervention','tb'],['Privacy Preservation','to']],
  },
];

const components = [
  {
    color: 'c1', sid: 'IT22321268 · Kumarasinghe K D K Y',
    title: 'Early Identification via Time-Series Forecasting',
    desc: 'Leverages LSTM and ARIMA models on multi-year historical data (heart rate, sleep, mood, cognitive load) to forecast mental health states up to 3 months ahead, enabling proactive interventions before deterioration occurs.',
    tags: [['LSTM','tb'],['ARIMA','tb'],['Time-Series','tp']],
  },
  {
    color: 'c2', sid: 'IT22917898 · Indrapala W.V.H.',
    title: 'Student Burnout Detection & Intervention',
    desc: 'Combines NLP analysis of reflective journal entries with ML models evaluating academic records and behavioral logs to classify burnout risk levels and deliver personalized study and wellness recommendations.',
    tags: [['NLP','tt'],['Random Forest','tt'],['Journal Analysis','to']],
  },
  {
    color: 'c3', sid: 'IT22032560 · De Silva A.H.H.',
    title: 'On-Device AI Summarization of Text & Behavior',
    desc: 'Privacy-preserving on-device ML using Random Forest and Logistic Regression to classify stress, anxiety, and depression from behavioral quiz data including screen time, sleep, heart rate, and social interaction.',
    tags: [['On-Device AI','tp'],['Random Forest','tp'],['FastAPI','tb']],
  },
  {
    color: 'c4', sid: 'IT22888334 · Ranathunga A.K.M.',
    title: 'Facial Emotion Detection with Personalized Interventions',
    desc: 'Deep learning model analyzes facial expressions in real-time during telehealth video consultations, generating emotional session reports and enabling data-driven, personalized counseling recommendations.',
    tags: [['Deep Learning','to'],['Facial Recognition','to'],['Telehealth','tt']],
  },
];

export default function Domain() {
  return (
    <section id="domain" className="domain dot-bg">
      <div className="container">
        <p className="s-eyebrow">Research Domain</p>
        <h2 className="s-title">Project Scope</h2>
        <div className="s-bar" />

        <div className="research-grid">
          {research.map((r, i) => (
            <div className="rc" key={i}>
              <div className="ico">{r.ico}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              <div className="tags">
                {r.tags.map(([label, cls]) => (
                  <span key={label} className={`tag ${cls}`}>{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="comp-grid">
          {components.map((c, i) => (
            <div className={`cc ${c.color}`} key={i}>
              <div className="sid">{c.sid}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <div className="tags">
                {c.tags.map(([label, cls]) => (
                  <span key={label} className={`tag ${cls}`}>{label}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
