import React from 'react';
import Image from 'next/image';
import { SectionHeader } from './UI';
import { PlaceholderLogo } from './Logos';
import { partners } from '../lib/data/solutions';

export function PartnersSection({ title = "Ils nous font confiance", centered = true, className = "", style = {} }) {
  return (
    <section id="partners" className={`bg-soft overflow-hidden ${className}`} style={style}>
      <div className="shell">
        <SectionHeader 
          eyebrow="Partenaires"
          title={title}
          centered={centered}
        />
      </div>
      
      <div className="partners-marquee">
        <div className="partners-track">
          {partners.concat(partners).map((p, i) => (
            <div key={i} className="partner-card glass-panel reveal">
              {p.logo ? (
                <Image 
                  src={p.logo} 
                  alt={p.name} 
                  width={120} 
                  height={80} 
                  style={{ objectFit: 'contain' }} 
                />
              ) : (
                <PlaceholderLogo name={p.name} />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
