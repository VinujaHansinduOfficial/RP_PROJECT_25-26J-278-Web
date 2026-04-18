import React from 'react';
import Navbar  from './components/Navbar';
import Footer  from './components/Footer';
import Hero       from './sections/Hero';
import Domain     from './sections/Domain';
import Tech       from './sections/Tech';
import Milestones from './sections/Milestones';
import Downloads  from './sections/Downloads';
import About      from './sections/About';
import Contact    from './sections/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Domain />
        <Tech />
        <Milestones />
        <Downloads />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
