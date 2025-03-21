export * from './throttle';

export const formatSlideNumber = (current: number, total: number): string => {
  return `${current + 1} / ${total}`;
};