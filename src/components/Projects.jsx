import React from "react";

function ProjectCard({p}){
  return (
    <article className="card">
      <img src={p.image} alt={p.title} />
      <div className="card-body">
        <h3>{p.title}</h3>
        <p style={{color:'var(--muted)',fontSize:'.95rem'}}>{p.desc}</p>
      </div>

      <div className="card-footer">
        <a className="github-btn" href={p.github} target="_blank" rel="noopener noreferrer">GitHub</a>
        {p.languages && p.languages.length > 0 && (
          <div className="lang-stats" style={{marginTop:'.8rem'}}>
            {p.languages.map(lang => (
              <div key={lang.name} style={{marginBottom:'.5rem'}}>
                <div style={{display:'flex',justifyContent:'space-between',fontSize:'.85rem',color:'var(--muted)'}}>
                  <span>{lang.name}</span>
                  <span>{lang.percent}%</span>
                </div>
                <div style={{background:'#eee',height:6,borderRadius:4,overflow:'hidden'}}>
                  <div style={{width:`${lang.percent}%`,height:'100%',background:'var(--accent)',borderRadius:4}} />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default function Projects({items=[]}){
  return (
    <div id="projects" className="projects-grid">
      {items.map(p => <ProjectCard key={p.id} p={p} />)}
    </div>
  )
}
