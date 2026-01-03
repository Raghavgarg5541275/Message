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

const photos: Photo[] = [
  {
    id: 1,
    url: "src/assests/1.jpg",
    caption: "The day our story began...",
    date: "",
  },
  {
    id: 2,
    url: "src/assests/2.jpg",
    caption: "You, me & us",
    date: "",
  },
  {
    id: 3,
    url: "src/assests/3.jpg",
    caption: "Love that carries me",
    date: "",
  },
  {
    id: 4,
    url: "src/assests/4.jpg",
    caption: "Eyes that speak love",
    date: "",
  },
  {
    id: 5,
    url: "src/assests/5.jpg",
    caption: "Under the same sky",
    date: "",
  },
  {
    id: 6,
    url: "src/assests/6.jpg",
    caption: "Still choosing you",
    date: "",
  },
  {
    id: 7,
    url: "src/assests/7.jpg",
    caption: "My safe place",
    date: "",
  },
  {
    id: 8,
    url: "src/assests/8.jpg",
    caption: "Wrapped in your arms",
    date: "",
  },
  {
    id: 9,
    url: "src/assests/9.jpg",
    caption: "Everyday kind of love",
    date: "",
  },
  {
    id: 10,
    url: "src/assests/10.jpg",
    caption: "Us, always us",
    date: "",
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
        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-romantic bg-black">
          
          {/* Blurred background */}
          <div
            className="absolute inset-0 scale-110 blur-2xl opacity-50"
            style={{
              backgroundImage: `url(${photos[currentIndex].url})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="relative w-full h-full flex items-center justify-center"
            >
              {/* Main Image - FULL FIT */}
              <img
                src={photos[currentIndex].url}
                alt={photos[currentIndex].caption}
                className="max-w-full max-h-full object-contain z-10"
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-20" />

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white z-30"
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

          {/* Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white z-40"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white z-40"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white z-40"
          >
            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
          </button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {photos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "bg-primary w-8"
                  : "bg-primary/30 w-2 hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Continue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="mt-10"
      >
        <button
          onClick={onComplete}
          className="group relative px-8 py-4 border-2 border-primary/30 rounded-full flex items-center gap-2 overflow-hidden hover:border-primary transition"
        >
          <span className="relative z-10">Continue</span>
          <Heart className="w-4 h-4 relative z-10" />
          <div className="absolute inset-0 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default PhotoSlideshow;
