import React, { useState, useCallback } from 'react';
import { Sidebar, Presentation } from './components';
import { slides } from './data/slides';
import { useKeyboardNavigation } from './hooks';

function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  }, [currentSlide]);

  useKeyboardNavigation(handlePrevious, handleNext);

  return (
    <div className="flex min-h-screen">
      <Sidebar
        slides={slides}
        currentSlide={currentSlide}
        onSlideSelect={setCurrentSlide}
      />
      <Presentation
        currentSlide={currentSlide}
        slides={slides}
        onPrevious={handlePrevious}
        onNext={handleNext}
      />
    </div>
  );
}

export default App;