import React from 'react';
import { SidebarProps } from '../../types';

export const Sidebar: React.FC<SidebarProps> = ({ slides, currentSlide, onSlideSelect }) => {
  return (
    <div className="w-80 bg-white shadow-lg p-6 h-screen overflow-y-auto border-r border-gray-100">
      <h2 className="text-2xl font-bold text-gray-900 mb-8 pb-4 border-b border-gray-100">
        İçindekiler
      </h2>
      <ul className="space-y-3">
        {slides.map((slide, index) => (
          <li
            key={slide.id}
            onClick={() => onSlideSelect(index)}
            className={`
              p-4 rounded-xl cursor-pointer transition-all duration-200
              ${currentSlide === index 
                ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-md transform scale-102'
                : 'hover:bg-gray-50 text-gray-700 hover:text-gray-900'
              }
              before:hidden
            `}
          >
            <span className="text-sm font-medium">{slide.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};