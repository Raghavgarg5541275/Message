import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Pause, Play, Heart } from "lucide-react";

interface Photo {
  id: number;
  url: string;
  caption: string;
  date: string;
}

interface PhotoSlideshowProps {
  onComplete: () => void;
}

// Placeholder photos - replace with actual photos
const photos: Photo[] = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80",
    caption: "The day our story began...",
    date: "January 15, 2023",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=80",
    caption: "Our first adventure together",
    date: "February 14, 2023",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&auto=format&fit=crop&q=80",
    caption: "Laughing until our cheeks hurt",
    date: "March 20, 2023",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=800&auto=format&fit=crop&q=80",
    caption: "Sunset walks and endless talks",
    date: "April 5, 2023",
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&auto=format&fit=crop&q=80",
    caption: "Dancing under the stars",
    date: "May 12, 2023",
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1518568814500-bf0f8d125f46?w=800&auto=format&fit=crop&q=80",
    caption: "Every moment with you is magical",
    date: "June 8, 2023",
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?w=800&auto=format&fit=crop&q=80",
    caption: "Summer days and loving ways",
    date: "July 22, 2023",
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1508407576615-e423c9955ad0?w=800&auto=format&fit=crop&q=80",
    caption: "You make ordinary moments extraordinary",
    date: "August 15, 2023",
  },
  {
    id: 9,
    url: "https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&auto=format&fit=crop&q=80",
    caption: "Fall in love with you every day",
    date: "September 30, 2023",
  },
  {
    id: 10,
    url: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=800&auto=format&fit=crop&q=80",
    caption: "Forever grateful for us",
    date: "October 18, 2023",
  },
];

const PhotoSlideshow = ({ onComplete }: PhotoSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % photos.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPlaying, nextSlide]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="font-cursive text-3xl md:text-4xl text-foreground mb-8 text-center"
      >
        Our Beautiful Journey
      </motion.h2>

      <div className="relative w-full max-w-4xl">
        {/* Main slideshow container */}
        <div className="relative aspect-[4/3] md:aspect-video rounded-2xl overflow-hidden shadow-romantic">
          {/* Blurred background */}
          <div
            className="absolute inset-0 scale-110 blur-2xl opacity-50"
            style={{
              backgroundImage: `url(${photos[currentIndex].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Main image */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].caption}
                className="w-full h-full object-cover"
              />

              {/* Gradient overlay for caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />

              {/* Caption and date */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-primary-foreground"
              >
                <p className="font-cursive text-xl md:text-2xl mb-2">
                  {photos[currentIndex].caption}
                </p>
                <p className="text-sm md:text-base opacity-80">
                  {photos[currentIndex].date}
                </p>
              </motion.div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-300 text-primary-foreground"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-300 text-primary-foreground"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Play/Pause button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 p-2 rounded-full bg-background/20 backdrop-blur-sm hover:bg-background/40 transition-all duration-300 text-primary-foreground"
            aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 hover:bg-primary/50"
              }`}
              aria-label={`Go to photo ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="text-center mt-10"
      >
        <button
          onClick={onComplete}
          className="group relative px-8 py-4 font-serif text-base tracking-wide text-foreground border-2 border-primary/30 rounded-full overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-romantic flex items-center gap-2 mx-auto"
        >
          <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
            Continue
          </span>
          <Heart className="w-4 h-4 relative z-10 group-hover:text-primary-foreground transition-colors duration-300" />
          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PhotoSlideshow;
