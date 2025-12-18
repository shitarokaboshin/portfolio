import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Trips from "./components/Trips";
import Certifications from "./components/Certifications";
import Journal from "./components/Journal";
import Contact from "./components/Contact";
import { projects, trips, certifications } from "./data";

export default function App() {
  return (
    <div className="site-root">
      <Header />
      <main className="container">
        <Hero />
        <section className="section">
          <h2 className="section-title">Projects</h2>
          <Projects items={projects} />
        </section>

        <section className="section">
          <h2 className="section-title">3-Days Cebu- Bohol Learning Exposure Trip</h2>
          <p className="section-sub">An engaging learning journey exploring top tech companies in Cebu and Bohol.</p>
          <Trips items={trips} />
        </section>

        <section className="section">
          <h2 className="section-title">Certifications</h2>
          <Certifications items={certifications} />
        </section>

        <Journal />

        <Contact />
      </main>
      <footer className="footer">© {new Date().getFullYear()} Portfolio</footer>
    </div>
  );
}
