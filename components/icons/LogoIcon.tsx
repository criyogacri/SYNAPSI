
import React from 'react';

const LogoIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="3" />
        <path d="M12 9a7 7 0 0 0-7 7" />
        <path d="M12 15a7 7 0 0 1 7-7" />
        <path d="M15 12a7 7 0 0 0-7-7" />
        <circle cx="5" cy="16" r="2" />
        <circle cx="19" cy="8" r="2" />
        <circle cx="8" cy="5" r="2" />
    </svg>
);

export default LogoIcon;