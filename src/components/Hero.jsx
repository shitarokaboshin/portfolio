import React from "react";
import prof from "../../prof.png";

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-left">
        <h1>Joshua robles </h1>
        <p>I'm a 3rd year BSIT student. I design and develop clean, responsive websites using modern technologies, always striving to learn more and improve with every project.</p>
        <a className="btn" href="#contact">Contact Me →</a>
        <div style={{marginTop:'1rem',display:'flex',gap:'1rem',color:'var(--muted)'}}>
          <a
            href="https://github.com/robles-123"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'none',color:'var(--muted)'}}
          >
            GitHub
          </a>
          <a
            href="https://www.facebook.com/joshua.robles.7927"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'none',color:'var(--muted)'}}
          >
            Facebook
          </a>
          <a
            href="https://mail.google.com/mail/u/0/#chat/home"
            target="_blank"
            rel="noopener noreferrer"
            style={{textDecoration:'none',color:'var(--muted)'}}
          >
            Email
          </a>
        </div>
      </div>

      <div className="profile">
        <img
          src={prof}
          alt="Joshua Robles"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              'https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=abc';
          }}
        />
      </div>
    </section>
  )
}
