import React, { useState, useEffect } from 'react';
import './Navbar.css';

const links = [
  { href: '#home', label: 'Home' },
  { href: '#domain', label: 'Project Scope' },
  { href: '#tech', label: 'Technologies' },
  { href: '#milestones', label: 'Milestones' },
  { href: '#documents', label: 'Downloads' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact Us' },
];

export default function Navbar() {
  const [active, setActive] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const onScroll = () => {
      let cur = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 80) cur = s.id;
      });
      if (cur) setActive(cur);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="#home" className="nav-logo">MINDSENSE AI</a>
        <ul className="nav-links">
          {links.map(l => (
            <li key={l.href}>
              <a
                href={l.href}
                className={active === l.href.slice(1) ? 'active' : ''}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
