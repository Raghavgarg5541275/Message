import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Gift, Heart, Sparkles } from "lucide-react";

interface Confetti {
  id: number;
  x: number;
  color: string;
  delay: number;
  rotation: number;
}

const FinalSurprise = () => {
  const [isRevealed, setIsRevealed] = useState(false);
  const [confetti, setConfetti] = useState<Confetti[]>([]);

  const colors = [
    "hsl(350, 60%, 65%)", // primary
    "hsl(30, 45%, 65%)", // rose-gold
    "hsl(40, 60%, 55%)", // gold
    "hsl(350, 60%, 92%)", // blush
    "hsl(350, 55%, 55%)", // romantic-red
  ];

  const handleReveal = () => {
    setIsRevealed(true);
    
    // Generate confetti
    const newConfetti: Confetti[] = [];
    for (let i = 0; i < 50; i++) {
      newConfetti.push({
        id: i,
        x: Math.random() * 100,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 0.5,
        rotation: Math.random() * 360,
      });
    }
    setConfetti(newConfetti);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden"
    >
      {/* Confetti animation */}
      <AnimatePresence>
        {isRevealed && confetti.map((piece) => (
          <motion.div
            key={piece.id}
            initial={{ 
              y: -20,
              x: `${piece.x}vw`,
              rotate: 0,
              opacity: 1 
            }}
            animate={{ 
              y: "100vh",
              rotate: piece.rotation + 720,
              opacity: 0 
            }}
            transition={{ 
              duration: 3 + Math.random() * 2,
              delay: piece.delay,
              ease: "linear"
            }}
            className="fixed top-0 z-50 pointer-events-none"
            style={{ left: 0 }}
          >
            <Heart
              className="w-4 h-4"
              style={{ color: piece.color, fill: piece.color }}
            />
          </motion.div>
        ))}
      </AnimatePresence>

      {!isRevealed ? (
        <>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-8"
          >
            <div className="relative">
              <Gift className="w-20 h-20 text-primary" />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -top-2 -right-2"
              >
                <Sparkles className="w-6 h-6 text-gold" />
              </motion.div>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-cursive text-4xl md:text-5xl text-foreground mb-6 text-center"
          >
            One Last Surprise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-muted-foreground mb-12 text-center max-w-md"
          >
            Are you ready to see something special?
          </motion.p>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReveal}
            className="px-10 py-5 bg-primary text-primary-foreground font-serif text-lg rounded-full shadow-romantic hover:shadow-glow transition-all duration-300 animate-pulse-soft"
          >
            Open Your Surprise 🎁
          </motion.button>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="mb-8"
          >
            <Heart className="w-24 h-24 mx-auto text-primary fill-primary animate-heart-beat" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-cursive text-4xl md:text-6xl text-foreground mb-8"
          >
            I Love You
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="paper-texture rounded-xl p-8 md:p-12 shadow-romantic"
          >
            <p className="font-serif text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              My love, you have reached the end of this little journey I created for you.
              But know that our real journey together is just beginning.
            </p>
            <p className="font-serif text-lg md:text-xl text-foreground/90 leading-relaxed mb-6">
              Every day with you is a gift, and I promise to cherish you, 
              support you, and love you with every fiber of my being.
            </p>
            <p className="font-cursive text-2xl md:text-3xl text-primary mt-8">
              Happy Birthday, My Everything!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-12 flex justify-center gap-4"
          >
            {[...Array(5)].map((_, i) => (
              <Heart
                key={i}
                className="w-6 h-6 text-primary fill-primary"
                style={{
                  animation: `float ${3 + i * 0.5}s ease-in-out infinite`,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="mt-12 text-sm text-muted-foreground italic"
          >
            Made with love, just for you ❤️
          </motion.p>
        </motion.div>
      )}
    </motion.div>
  );
};

export default FinalSurprise;
