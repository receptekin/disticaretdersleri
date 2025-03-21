export interface Slide {
  id: number;
  title: string;
  content: string;
}

export interface SidebarProps {
  slides: Slide[];
  currentSlide: number;
  onSlideSelect: (index: number) => void;
}

export interface PresentationProps {
  currentSlide: number;
  slides: Slide[];
  onPrevious: () => void;
  onNext: () => void;
  isLoading?: boolean;
}

export interface SlideControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrevious: () => void;
  onNext: () => void;
}

export interface SlideContentProps {
  content: string;
}