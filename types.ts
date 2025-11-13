import React from 'react';

export interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio: string;
}

export interface Testimonial {
  quote: string;
  author: string;
  company: string;
}

export interface Program {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Article {
    title: string;
    description: string;
}