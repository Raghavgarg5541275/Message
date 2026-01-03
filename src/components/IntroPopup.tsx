import { useState } from "react";
import { Heart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroPopupProps {
  onEnter: () => void;
}

const IntroPopup = ({ onEnter }: IntroPopupProps) => {
  const [isExiting, setIsExiting] = useState(false);

  const handleClick = () => {
    setIsExiting(true);
    setTimeout(onEnter, 800);
  };

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-romantic"
        >
          <div className="text-center px-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
              className="mb-8"
            >
              <Heart className="w-16 h-16 mx-auto text-primary fill-primary animate-heart-beat" />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="font-cursive text-5xl md:text-7xl lg:text-8xl text-foreground mb-4"
            >
              Happy Birthday
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="font-cursive text-3xl md:text-4xl lg:text-5xl text-primary mb-8"
            >
              My Love ❤️
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              <button
                onClick={handleClick}
                className="group relative px-8 py-4 font-serif text-lg tracking-wide text-foreground border-2 border-primary/30 rounded-full overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-romantic"
              >
                <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
                  Click to Begin
                </span>
                <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </button>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 0.8 }}
              className="mt-6 text-sm text-muted-foreground italic"
            >
              A special gift made just for you
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroPopup;
