import React from 'react';
import './Milestones.css';

const milestones = [
  { name: 'Project Proposal',       desc: 'Initial proposal outlining research problem, objectives, and planned methodology.',                              date: 'Sep 2025', marks: '10%', status: 'done' },
  { name: 'Progress Presentation 1', desc: 'First review covering literature survey, research gap analysis, and preliminary design.',                       date: 'Nov 2025', marks: '15%', status: 'done' },
  { name: 'Progress Presentation 2', desc: 'Second review demonstrating working prototypes, early results, and methodology validation.',                    date: 'Jan 2026', marks: '20%', status: 'done' },
  { name: 'Final Report',            desc: 'Complete research report with results, discussion, conclusions, and future work for all 4 components.',         date: 'Mar 2026', marks: '30%', status: 'done' },
  { name: 'Final Presentation',      desc: 'Comprehensive presentation of the completed integrated platform with live demonstration.',                       date: 'Apr 2026', marks: '15%', status: 'progress' },
  { name: 'Viva',                    desc: 'Individual oral examination by panel of examiners to assess depth of research contribution.',                   date: 'May 2026', marks: '10%', status: 'upcoming' },
];

const statusLabel = { done: 'Completed', progress: 'In Progress', upcoming: 'Upcoming' };

export default function Milestones() {
  return (
    <section id="milestones" className="milestones dot-bg">
      <div className="container">
        <p className="s-eyebrow">Timeline</p>
        <h2 className="s-title">Milestones</h2>
        <div className="s-bar" />
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Assessment</th>
                <th>Description</th>
                <th>Date</th>
                <th>Marks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {milestones.map((m, i) => (
                <tr key={i}>
                  <td className="name-cell">{m.name}</td>
                  <td>{m.desc}</td>
                  <td>{m.date}</td>
                  <td>{m.marks}</td>
                  <td><span className={`badge b-${m.status}`}>{statusLabel[m.status]}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
