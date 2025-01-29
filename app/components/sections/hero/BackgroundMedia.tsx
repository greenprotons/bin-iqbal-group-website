import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

interface BackgroundMediaProps {
  imageUrl?: string;
  videoUrl?: string;
  fallbackImageUrl?: string;
  overlayOpacity?: number;
  className?: string;
}

const BackgroundMedia = ({
  imageUrl = "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop",
  videoUrl,
  fallbackImageUrl = "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?q=80&w=2071&auto=format&fit=crop",
  overlayOpacity = 0.4,
  className,
}: BackgroundMediaProps) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [hasImageError, setHasImageError] = useState(false);

  useEffect(() => {
    if (videoUrl) {
      const video = document.createElement("video");
      video.src = videoUrl;
      video.onloadeddata = () => setIsVideoLoaded(true);
      video.onerror = () => setHasVideoError(true);
    }

    const img = new Image();
    img.src = imageUrl;
    img.onload = () => setIsImageLoaded(true);
    img.onerror = () => setHasImageError(true);
  }, [videoUrl, imageUrl]);

  return (
    <div
      className={cn(
        "relative w-full h-full overflow-hidden bg-slate-900",
        className,
      )}
    >
      {/* Video Background */}
      {videoUrl && !hasVideoError && (
        <video
          autoPlay
          loop
          muted
          playsInline
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isVideoLoaded ? "opacity-100" : "opacity-0",
          )}
          onError={() => setHasVideoError(true)}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      )}

      {/* Image Background */}
      {(!videoUrl || hasVideoError) && !hasImageError && (
        <img
          src={imageUrl}
          alt="Background"
          className={cn(
            "absolute inset-0 w-full h-full object-cover transition-opacity duration-500",
            isImageLoaded ? "opacity-100" : "opacity-0",
          )}
          onError={() => setHasImageError(true)}
        />
      )}

      {/* Fallback Image */}
      {hasImageError && (
        <img
          src={fallbackImageUrl}
          alt="Fallback Background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
};

export default BackgroundMedia;
