import React from 'react';
import { SlideContentProps } from '../../types';

export const SlideContent: React.FC<SlideContentProps> = ({ content }) => {
  return (
    <div className="slide-transition">
      <div 
        className="bg-white p-12 rounded-2xl shadow-xl max-w-4xl w-full mx-auto
                   border border-gray-100 hover:shadow-2xl transition-shadow duration-300"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};