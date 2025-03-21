import { useState, useCallback, Suspense } from 'react';
import { Sidebar, Presentation } from './components';
import { slides } from './data/slides';
import { useKeyboardNavigation } from './hooks';
import ErrorBoundary from './components/ErrorBoundary';
import { KeyboardHelp } from './components/KeyboardHelp';
import './styles/index.css';

/**
 * Main App component that handles the presentation slideshow
 * Features:
 * - Keyboard navigation
 * - Slide selection from sidebar
 * - Responsive layout
 * - Error handling
 */
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handlePrevious = useCallback(() => {
    if (currentSlide > 0) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev - 1);
        setIsLoading(false);
      }, 300); // Animasyon süresi
    }
  }, [currentSlide]);

  const handleNext = useCallback(() => {
    if (currentSlide < slides.length - 1) {
      setIsLoading(true);
      setTimeout(() => {
        setCurrentSlide(prev => prev + 1);
        setIsLoading(false);
      }, 300); // Animasyon süresi
    }
  }, [currentSlide]);

  useKeyboardNavigation(handlePrevious, handleNext);

  return (
    <ErrorBoundary fallback={<div className="flex items-center justify-center min-h-screen bg-red-50 text-red-600 p-4">Bir hata oluştu. Lütfen sayfayı yenileyin.</div>}>
      <div className="flex min-h-screen bg-secondary-light">
        <Suspense fallback={<div className="flex items-center justify-center min-h-screen w-full bg-secondary-light">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        </div>}>
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
            isLoading={isLoading}
          />
          <KeyboardHelp />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;