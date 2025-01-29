import React from "react";
import BackgroundMedia from "./BackgroundMedia";
import HeroContent from "./HeroContent";

interface HeroSectionProps {
  backgroundImageUrl?: string;
  backgroundVideoUrl?: string;
  fallbackImageUrl?: string;
  headline?: string;
  subheadline?: string;
  onGetQuote?: () => void;
  onContact?: () => void;
  onScroll?: () => void;
}

const HeroSection = ({
  backgroundImageUrl,
  backgroundVideoUrl,
  fallbackImageUrl,
  headline,
  subheadline,
  onGetQuote,
  onContact,
  onScroll,
}: HeroSectionProps) => {
  return (
    <section id="hero" className="relative w-full h-screen bg-slate-900">
      <div className="absolute inset-0">
        <BackgroundMedia
          imageUrl={backgroundImageUrl}
          videoUrl={backgroundVideoUrl}
          fallbackImageUrl={fallbackImageUrl}
          overlayOpacity={0.4}
        />
      </div>
      <div className="absolute inset-0">
        <HeroContent
          headline={headline}
          subheadline={subheadline}
          onGetQuote={onGetQuote}
          onContact={onContact}
          onScroll={onScroll}
        />
      </div>
    </section>
  );
};

export default HeroSection;
