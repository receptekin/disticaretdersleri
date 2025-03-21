import React from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { SlideControlsProps } from '../../types';

export const SlideControls: React.FC<SlideControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext
}) => {
  return (
    <div className="flex items-center justify-center gap-8 mb-8">
      <button
        onClick={onPrevious}
        disabled={currentSlide === 0}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700
                   text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed
                   hover:shadow-lg transform hover:-translate-x-0.5 transition-all duration-200"
      >
        <FiArrowLeft className="w-5 h-5" /> Önceki
      </button>
      
      <span className="text-gray-600 font-medium bg-gray-50 px-4 py-2 rounded-lg">
        {currentSlide + 1} / {totalSlides}
      </span>
      
      <button
        onClick={onNext}
        disabled={currentSlide === totalSlides - 1}
        className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700
                   text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed
                   hover:shadow-lg transform hover:translate-x-0.5 transition-all duration-200"
      >
        Sonraki <FiArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
};