import React from 'react';
import { Navigation } from './Navigation';
import { SlideContent } from './SlideContent';
import { PresentationProps } from '../../types';

export const Presentation: React.FC<PresentationProps> = ({
  currentSlide,
  slides,
  onPrevious,
  onNext,
  isLoading = false
}) => {
  const progress = ((currentSlide + 1) / slides.length) * 100;

  return (
    <div className="flex-1 flex flex-col">
      {/* Progress Bar */}
      <div className="h-1 bg-secondary">
        <div
          className="h-full bg-primary transition-all duration-300 ease-in-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 md:p-12 bg-gradient-to-br from-secondary-light to-secondary">
        <Navigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevious={onPrevious}
          onNext={onNext}
        />
        <div className={`transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}`}>
          <SlideContent content={slides[currentSlide].content} />
        </div>
      </div>

      {/* Mobile Navigation Hint */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 flex justify-center">
        <div className="bg-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg text-sm text-primary">
          Slaytları değiştirmek için kaydırın
        </div>
      </div>
    </div>
  );
};