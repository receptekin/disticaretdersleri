import { useCallback } from 'react';
import { throttle } from '../utils';

interface UseSlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export const useSlideNavigation = ({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext
}: UseSlideNavigationProps) => {
  const handleScroll = useCallback(
    throttle((event: React.UIEvent<HTMLDivElement>) => {
      const element = event.currentTarget;
      const { scrollTop, scrollHeight, clientHeight } = element;
      
      if (scrollTop === 0 && currentSlide > 0) {
        onPrevious();
      }
      
      if (scrollTop + clientHeight === scrollHeight && currentSlide < totalSlides - 1) {
        onNext();
      }
    }, 200),
    [currentSlide, totalSlides, onPrevious, onNext]
  );

  return { handleScroll };
};