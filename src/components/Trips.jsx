import React from "react";

function Trip({t}){
  return (
    <div className="trip-card">
      <div style={{display:'flex',alignItems:'center'}}>
        <span className="pill">{t.day}</span>
        <h3 style={{margin:0}}>{t.title}</h3>
      </div>
      <p style={{color:'var(--muted)'}}>{t.desc}</p>
      <div className="trip-images">
        {t.images.map((src,i) => <img key={i} src={src} alt={`trip-${i}`} />)}
      </div>
    </div>
  )
}

export default function Trips({items=[]}){
  return (
    <div id="trip">
      {items.map((t, idx) => <Trip key={idx} t={t} />)}
    </div>
  )
}
