import React from 'react';
import './About.css';

const members = [
  { initials: 'KK', name: 'Kumarasinghe K D K Y', id: 'IT22321268', role: 'Early Identification via Time-Series Forecasting (LSTM & ARIMA)', email: 'it22321268@my.sliit.lk', color: 'a1', image: '/docs/member-kk.svg' },
  { initials: 'WI', name: 'Indrapala W.V.H.',       id: 'IT22917898', role: 'Student Burnout Detection & Intervention using Machine Learning',  email: 'it22917898@my.sliit.lk', color: 'a2', image: '/docs/member-wi.svg' },
  { initials: 'AD', name: 'De Silva A.H.H.',         id: 'IT22032560', role: 'On-Device AI Summarization of Text & Behavior',                   email: 'it22032560@my.sliit.lk', color: 'a3', image: '/docs/member-ad.svg' },
  { initials: 'AR', name: 'Ranathunga A.K.M.',       id: 'IT22888334', role: 'Facial Emotion Detection with Personalized Interventions',          email: 'it22888334@my.sliit.lk', color: 'a4', image: '/docs/member-ar.svg' },
];

const supervisors = [
  { label: 'Supervisor',    name: 'Ms. Lokesha Weerasinghe',  dept: 'Dept. of Information Technology, SLIIT', image: '/docs/supervisor-1.svg', imageAlt: 'Supervisor photo' },
  { label: 'Co-Supervisor', name: 'Ms. Ishara Weerathunga',   dept: 'Dept. of Information Technology, SLIIT', image: '/docs/supervisor-2.svg', imageAlt: 'Co-Supervisor photo' },
  { label: 'Institution',   name: 'Sri Lanka Institute of Information Technology', dept: 'Faculty of Computing · March 2026' },
  { label: 'Project ID',    name: '25-26J-278', dept: 'B.Sc. (Hons) in Information Technology' },
];

export default function About() {
  return (
    <section id="about" className="about dot-bg">
      <div className="container">
        <p className="s-eyebrow">The Team</p>
        <h2 className="s-title">About Us</h2>
        <div className="s-bar" />
        <div className="team-grid">
          {members.map((m, i) => (
            <div className="mc" key={i}>
              {m.image ? <img className="av" src={m.image} alt={m.initials} /> : <div className={`av ${m.color}`}>{m.initials}</div>}
              <h3>{m.name}</h3>
              <div className="msid">{m.id}</div>
              <div className="mrole">{m.role}</div>
              <a href={`mailto:${m.email}`}>{m.email}</a>
            </div>
          ))}
        </div>
        <div className="sup-row">
          {supervisors.map((s, i) => (
            <div className="si" key={i}>
              {s.image && <img className="sup-avatar" src={s.image} alt={s.imageAlt} />}
              <div className="sl2">{s.label}</div>
              <div className="sv">{s.name}</div>
              <div className="sd">{s.dept}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
