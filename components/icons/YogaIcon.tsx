
import React from 'react';

const YogaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8-8-3.6-8-8zm4 0c0-2.2 1.8-4 4-4s4 1.8 4 4-1.8 4-4 4-4-1.8-4-4z"/>
    <path d="M12 2v20"/>
    <path d="M2 12h20"/>
    <path d="M5.6 5.6l12.8 12.8"/>
    <path d="M18.4 5.6L5.6 18.4"/>
  </svg>
);

export default YogaIcon;
