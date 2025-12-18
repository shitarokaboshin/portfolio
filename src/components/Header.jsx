import React from "react";

export default function Header(){
  return (
    <header className="container header">
      <div className="logo">Portfolio</div>
      <nav className="nav">
        <a href="#">Home</a>
        <a href="#projects">Projects</a>
        <a href="#trip">Tour</a>
        <a href="#journal">Journal</a>
        <a href="#certs">Certifications</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  )
}
