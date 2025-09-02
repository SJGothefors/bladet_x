import { ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

interface NavigationButtonsProps {
  currentIndex: number;
  totalArticles: number;
  onNext: () => void;
  onPrev: () => void;
}

export function NavigationButtons({ currentIndex, totalArticles, onNext, onPrev }: NavigationButtonsProps) {
  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2 z-40 flex flex-col space-y-2">
      {/* Previous Article Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onPrev}
        disabled={currentIndex === 0}
        className="w-10 h-10 rounded-full bg-black/30 backdrop-glass hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronUp className="w-5 h-5 text-white" />
      </Button>

      {/* Next Article Button */}
      <Button
        variant="ghost"
        size="sm"
        onClick={onNext}
        disabled={currentIndex === totalArticles - 1}
        className="w-10 h-10 rounded-full bg-black/30 backdrop-glass hover:bg-black/50 disabled:opacity-30 disabled:cursor-not-allowed"
      >
        <ChevronDown className="w-5 h-5 text-white" />
      </Button>
    </div>
  );
}