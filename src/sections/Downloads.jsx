import React from 'react';
import './Downloads.css';

const documents = [
  { icon: '📄', title: 'Topic Assessment',        date: '2025/07/24', type: 'Group',      available: true,  file: '/docs/topic-assessment.pdf',           filename: 'Topic-Assessment.pdf' },
  { icon: '📄', title: 'Project Proposal',         date: '2025/08/13', type: 'Individual', available: true,  files: { 1: '/docs/project-proposal-member-1.pdf', 2: '/docs/project-proposal-member-2.pdf', 3: '/docs/project-proposal-member-3.pdf', 4: '/docs/project-proposal-member-4.pdf' }, filename: 'Project-Proposal.pdf' },
  { icon: '📄', title: 'Progress Presentation I',  date: '2025/12/05', type: 'Group',      available: true, file: '/docs/progress-presentation-1.pptx',     filename: 'Progress-Presentation-1.pptx' },
  { icon: '📄', title: 'Progress Presentation II', date: '2026/03/19', type: 'Group',      available: false, file: '/docs/progress-presentation-2.pdf',     filename: 'Progress-Presentation-2.pdf' },
  { icon: '📄', title: 'Research Paper',           date: '2026/03/25', type: 'Group',      available: true,  file: '/docs/research-paper.pdf',               filename: 'Research-Paper.pdf' },
  { icon: '📋', title: 'Individual Final Reports', date: '2026/03/25', type: 'Individual', available: true,  files: { 1: '/docs/individual-final-reports-member-1.pdf', 2: '/docs/individual-final-reports-member-2.pdf', 3: '/docs/individual-final-reports-member-3.pdf', 4: '/docs/individual-final-reports-member-4.pdf' }, filename: 'Individual-Final-Reports.pdf' },
  { icon: '📚', title: 'Final Report',             date: '2026/03/25', type: 'Group',      available: false, file: '/docs/final-report.pdf',                 filename: 'Final-Report.pdf' },
  { icon: '🖼️', title: 'Project Poster',           date: 'Pending',    type: 'Group',      available: false, file: null,                                     filename: null },
];

const slides = [
  { icon: '📊', title: 'Proposal Presentation',    date: '2025/08/13',          type: 'Group', available: false, file: '/docs/slides-proposal.pdf',    filename: 'Slides-Proposal.pdf' },
  { icon: '📊', title: 'Progress Presentation 1',  date: '2025/12/05',          type: 'Group', available: false, file: '/docs/slides-progress-1.pdf',  filename: 'Slides-Progress-1.pdf' },
  { icon: '📊', title: 'Progress Presentation 2',  date: '2026/03/19',          type: 'Group', available: false, file: '/docs/slides-progress-2.pdf',  filename: 'Slides-Progress-2.pdf' },
  { icon: '📊', title: 'Final Presentation',       date: 'Upcoming – Apr 2026', type: 'Group', available: false, file: null,                            filename: null },
];

function DownloadCard({ icon, title, date, type, available, file, files, filename }) {
  const [selectedMember, setSelectedMember] = React.useState(null);
  const isIndividualDocument = title === 'Project Proposal' || title === 'Individual Final Reports';
  const hasMemberFiles = files && Object.keys(files).length > 0;

  return (
    <div className="dl-card">
      <div className="dl-card-top">
        <span className="ficon">{icon}</span>
      </div>
      <h4>{title}</h4>
      <div className="date">
        {available ? `Submitted on ${date}` : date}
      </div>
      <div className="dl-card-footer">
        <span className="dl-type">{type}</span>
        {available && (file || hasMemberFiles) ? (
          <div className="dl-button-wrap">
            {hasMemberFiles ? (
              <>
                <button
                  onClick={() => setSelectedMember(selectedMember ? null : true)}
                  className="dl-btn"
                >
                  Download
                </button>
                {selectedMember && (
                  <div className="member-menu">
                    {[1, 2, 3, 4].map(member => (
                      <a
                        key={member}
                        href={files[member]}
                        download={`${filename.replace(/\.[^/.]+$/, '')}-Member-${member}${filename.slice(filename.lastIndexOf('.'))}`}
                        onClick={() => setSelectedMember(null)}
                        className="dl-member-btn"
                      >
                        Member {member}
                      </a>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <a
                href={file}
                download={filename}
                className="dl-btn"
              >
                Download
              </a>
            )}
          </div>
        ) : (
          <span className="dl-btn disabled">
            {available ? 'Download' : 'Coming Soon'}
          </span>
        )}
      </div>
    </div>
  );
}

function DownloadGroup({ title, desc, items }) {
  return (
    <div className="dl-section-wrap">
      <div className="dl-section-title">{title}</div>
      <div className="dl-desc">{desc}</div>
      <div className="dl-grid">
        {items.map((d, i) => <DownloadCard key={i} {...d} />)}
      </div>
    </div>
  );
}

export default function Downloads() {
  return (
    <section id="documents" className="downloads dot-bg">
      <div className="container">
        <p className="s-eyebrow">Resources</p>
        <h2 className="s-title">Downloads</h2>
        <div className="s-bar" />
        <DownloadGroup
          title="Documents"
          desc="Please find all documents related to this project below."
          items={documents}
        />
        <DownloadGroup
          title="Presentation Slides"
          desc="Slides used in past and upcoming presentations."
          items={slides}
        />
      </div>
    </section>
  );
}
