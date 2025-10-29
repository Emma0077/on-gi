import StickyCTA from '../StickyCTA';

export default function StickyCTAExample() {
  return (
    <div className="h-[200vh] relative">
      <div className="p-8 text-center">
        <p className="text-muted-foreground">Scroll down to see the sticky CTA appear</p>
      </div>
      <StickyCTA onClick={() => console.log('Sticky CTA clicked')} />
    </div>
  );
}
