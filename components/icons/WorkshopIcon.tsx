
import React from 'react';

const WorkshopIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 8V4H8" />
    <rect x="4" y="4" width="16" height="16" rx="2" />
    <path d="M4 12h16" />
    <path d="M12 12v8" />
  </svg>
);

export default WorkshopIcon;
