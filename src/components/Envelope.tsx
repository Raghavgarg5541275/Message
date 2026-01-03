import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Mail } from "lucide-react";

interface EnvelopeProps {
  onOpen: () => void;
}

const Envelope = ({ onOpen }: EnvelopeProps) => {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(onOpen, 1500);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="flex flex-col items-center justify-center min-h-screen px-6"
    >
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="font-cursive text-2xl md:text-3xl text-foreground mb-8 text-center"
      >
        A special letter awaits you...
      </motion.p>

      <div
        onClick={handleClick}
        className="cursor-pointer perspective-1000"
      >
        <motion.div
          className="relative w-80 h-52 md:w-96 md:h-64"
          whileHover={!isOpening ? { scale: 1.05 } : {}}
          transition={{ duration: 0.3 }}
        >
          {/* Envelope body */}
          <div className="absolute inset-0 bg-gradient-to-br from-cream to-blush rounded-lg shadow-romantic border border-rose-gold-light/30">
            {/* Decorative pattern */}
            <div className="absolute inset-4 border border-rose-gold/20 rounded" />
            
            {/* Heart seal */}
            <motion.div
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10"
              animate={isOpening ? { scale: 0, opacity: 0 } : {}}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 rounded-full bg-romantic-red flex items-center justify-center shadow-lg animate-pulse-soft">
                <Heart className="w-8 h-8 text-primary-foreground fill-primary-foreground" />
              </div>
            </motion.div>
          </div>

          {/* Envelope flap */}
          <motion.div
            className="absolute top-0 left-0 right-0 h-1/2 origin-top"
            animate={isOpening ? { rotateX: -180 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ transformStyle: "preserve-3d" }}
          >
            {/* Front of flap */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-blush-deep to-cream rounded-t-lg"
              style={{ 
                clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                backfaceVisibility: "hidden"
              }}
            >
              <div className="absolute inset-0 border-t border-l border-r border-rose-gold-light/30 rounded-t-lg" />
            </div>
            
            {/* Back of flap */}
            <div 
              className="absolute inset-0 bg-gradient-to-b from-cream to-blush rounded-t-lg"
              style={{ 
                clipPath: "polygon(0 100%, 50% 0, 100% 100%)",
                backfaceVisibility: "hidden",
                transform: "rotateX(180deg)"
              }}
            />
          </motion.div>

          {/* Letter peek */}
          <AnimatePresence>
            {isOpening && (
              <motion.div
                initial={{ y: 0, opacity: 0 }}
                animate={{ y: -80, opacity: 1 }}
                exit={{ y: -200, opacity: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="absolute left-4 right-4 top-8 h-32 paper-texture rounded shadow-lg border border-rose-gold/20"
              >
                <div className="p-4">
                  <div className="w-3/4 h-2 bg-foreground/20 rounded mb-2" />
                  <div className="w-1/2 h-2 bg-foreground/20 rounded" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-8 text-muted-foreground text-sm flex items-center gap-2"
      >
        <Mail className="w-4 h-4" />
        <span className="italic">Click the envelope to open</span>
      </motion.p>
    </motion.div>
  );
};

export default Envelope;
