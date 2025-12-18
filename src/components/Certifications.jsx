import React from "react";

function Cert({c}){
  return (
    <article className="card cert-card">
      <img src={c.image} alt={c.title} />
      <div className="cert-meta">
        <div>
          <h4 style={{margin:'0 0 .2rem'}}>{c.title}</h4>
          <div style={{color:'var(--muted)',fontSize:'.9rem'}}>{c.issuer} • {c.date}</div>
        </div>
      </div>
    </article>
  )
}

export default function Certifications({items=[]}){
  return (
    <div id="certs" className="cert-grid">
      {items.map(c => <Cert key={c.id} c={c} />)}
    </div>
  )
}
