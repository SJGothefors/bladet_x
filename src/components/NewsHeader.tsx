import { categories } from '../data/mockData';
import { Button } from './ui/button';

interface NewsHeaderProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  isScrolled: boolean;
  onMalServiceClick?: () => void;
}

export function NewsHeader({ activeCategory, onCategoryChange, isScrolled, onMalServiceClick }: NewsHeaderProps) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'h-16 bg-background/95 backdrop-glass border-b border-border' : 'h-28 bg-transparent'
      }`}
    >
      <div className="flex flex-col h-full">
        {/* Newspaper Title */}
        <div className={`px-4 transition-all duration-300 ${
          isScrolled ? 'py-2 text-sm opacity-70' : 'pt-4 pb-2 text-lg font-bold'
        }`}>
          <span className="text-gradient">Bladet X</span>
        </div>
        
        {/* Categories - Full Width Layout */}
        <div className={`flex-1 flex flex-col transition-all duration-300 ${
          isScrolled ? 'opacity-60' : ''
        }`}>
          <div className="flex">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => onCategoryChange(category)}
                className={`flex-1 text-center py-2 px-1 text-sm font-medium transition-all duration-200 border-b-2 ${
                  activeCategory === category 
                    ? 'text-accent border-accent' 
                    : 'text-muted-foreground hover:text-foreground border-transparent hover:border-muted'
                } ${isScrolled ? 'text-xs py-1' : ''}`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Mål Service Button - Only show when Sports category is active */}
          {activeCategory === 'Sports' && !isScrolled && onMalServiceClick && (
            <button
              onClick={onMalServiceClick}
              className="w-full py-2 px-1 text-sm font-medium transition-all duration-200 border-b-2 text-accent border-accent hover:bg-accent/10"
            >
              - Mål service -
            </button>
          )}
        </div>
      </div>
    </div>
  );
}