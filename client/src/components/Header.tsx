import { Button } from "@/components/ui/button";

interface HeaderProps {
  onCTAClick: () => void;
}

export default function Header({ onCTAClick }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-primary">
          온기
        </div>
        
        <Button 
          onClick={onCTAClick}
          variant="default"
          size="default"
          className="rounded-xl"
          data-testid="button-header-cta"
        >
          오픈 알림받기
        </Button>
      </div>
    </header>
  );
}
