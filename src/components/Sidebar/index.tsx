import React from 'react';
import { SidebarProps } from '../../types';

export const Sidebar: React.FC<SidebarProps> = ({ slides, currentSlide, onSlideSelect }) => {
  return (
    <div className="w-80 bg-white dark:bg-secondary shadow-lg p-6 h-screen flex flex-col">
      <h2 className="text-2xl font-bold text-primary mb-8 pb-4 border-b border-secondary/10">
        İçindekiler
      </h2>
      <div className="flex-1 overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <ul className="w-full space-y-4 pr-2">
          {slides.map((slide, index) => (
            <li
              key={slide.id}
              onClick={() => onSlideSelect(index)}
              className={`
                p-4 rounded-xl cursor-pointer transition-all duration-300
                ${currentSlide === index
                  ? 'bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg transform translate-x-2'
                  : 'hover:bg-primary/10 text-primary-dark hover:text-primary hover:translate-x-1'
                }
                before:hidden
              `}
            >
              <span className="text-sm font-medium">{slide.title}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};