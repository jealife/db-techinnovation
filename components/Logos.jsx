import React from 'react';

export function CloudLogo({ className = "", width = "120", height = "80", color = "currentColor" }) {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 120 80" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cloudGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} stopOpacity="0.9" />
          <stop offset="100%" stopColor={color} stopOpacity="0.6" />
        </linearGradient>
      </defs>
      <path 
        d="M93.3 36.6c0-13.2-10.7-24-24-24-10.5 0-19.4 6.7-22.7 16.1-3-1.6-6.4-2.4-10.1-2.4-12 0-21.8 9.8-21.8 21.8S24.5 69.9 36.5 69.9h54.4c9.4 0 17-7.6 17-17s-6.7-15.9-15.3-16.3c.4 0 .7 0 .7 0z" 
        fill="url(#cloudGradient)"
        className="animate-float-subtle"
      />
      <circle cx="70" cy="35" r="8" fill="white" fillOpacity="0.2" />
      <circle cx="45" cy="45" r="5" fill="white" fillOpacity="0.1" />
    </svg>
  );
}

export function PlaceholderLogo({ name, className = "" }) {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className}`}>
      <CloudLogo width="48" height="32" color="var(--primary)" />
      <span className="text-[10px] font-bold uppercase tracking-widest text-primary/40">{name}</span>
    </div>
  );
}
