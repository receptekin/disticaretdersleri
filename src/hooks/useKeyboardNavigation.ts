import { useEffect } from 'react';

export const useKeyboardNavigation = (
  handlePrevious: () => void,
  handleNext: () => void
): void => {
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent): void => {
      if (event.key === 'ArrowLeft') {
        handlePrevious();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handlePrevious, handleNext]);
};