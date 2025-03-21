import React from 'react';
import { Navigation } from './Navigation';
import { SlideContent } from './SlideContent';
import { PresentationProps } from '../../types';

export const Presentation: React.FC<PresentationProps> = ({
  currentSlide,
  slides,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex-1 p-12 bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation
        currentSlide={currentSlide}
        totalSlides={slides.length}
        onPrevious={onPrevious}
        onNext={onNext}
      />
      <SlideContent content={slides[currentSlide].content} />
    </div>
  );
};