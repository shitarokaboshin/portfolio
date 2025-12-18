import React, { useState } from 'react'

export default function Journal(){
  const images = ['1.jpg','2.jpg','3.jpg','4.jpg','5.jpg','6.jpg']
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <section id="journal" className="journal container">
      <div className="section-header">
        <h2>Printed Journal</h2>
        <p className="section-sub">Scanned pages from my handwritten journal documenting my learning journey, reflections, and technical notes.</p>
      </div>

      <div className="journal-view">
        <div className="journal-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
        </div>

        <div className="journal-carousel">
          {images.map((name, idx) => (
            <div key={name} className="journal-card" onClick={() => setSelectedImage(name)} style={{cursor:'pointer'}}>
              <img src={`/assets/${name}`} alt={`Journal page ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-close" onClick={() => setSelectedImage(null)}>×</button>
            <img src={`/assets/${selectedImage}`} alt="Journal page" />
          </div>
        </div>
      )}
    </section>
  )
}
