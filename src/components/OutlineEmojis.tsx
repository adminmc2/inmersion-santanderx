import React from 'react';

interface EmojiProps {
  className?: string;
  size?: number;
  color?: string;
}

export const SadFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="10" r="1" fill={color}/>
    <circle cx="16" cy="10" r="1" fill={color}/>
    <path d="M8 16 Q12 14 16 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const NeutralFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="10" r="1" fill={color}/>
    <circle cx="16" cy="10" r="1" fill={color}/>
    <line x1="8" y1="15" x2="16" y2="15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ConfusedFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="10" r="1" fill={color}/>
    <circle cx="16" cy="10" r="1" fill={color}/>
    <path d="M8 15 Q12 14 16 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const TiredFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <line x1="6" y1="10" x2="10" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <line x1="14" y1="10" x2="18" y2="10" stroke={color} strokeWidth="2" strokeLinecap="round"/>
    <path d="M8 16 Q12 14 16 16" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const RelaxedFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <path d="M7 10 Q8 9 9 10" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M15 10 Q16 9 17 10" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M8 14 Q12 16 16 14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const HappyFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="10" r="1" fill={color}/>
    <circle cx="16" cy="10" r="1" fill={color}/>
    <path d="M8 14 Q12 16 16 14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ThinkingFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <circle cx="8" cy="10" r="1" fill={color}/>
    <circle cx="16" cy="10" r="1" fill={color}/>
    <path d="M9 15 Q11 14 13 15" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

export const ProudFace: React.FC<EmojiProps> = ({ className = "", size = 24, color = "currentColor" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
    <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="2"/>
    <path d="M7 10 Q8 9 9 10" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M15 10 Q16 9 17 10" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none"/>
    <path d="M7 14 Q12 17 17 14" stroke={color} strokeWidth="2" strokeLinecap="round"/>
  </svg>
);