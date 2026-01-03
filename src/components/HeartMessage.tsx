import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";

interface HeartMessageProps {
  onComplete: () => void;
}

const HeartMessage = ({ onComplete }: HeartMessageProps) => {
  const messages = [
    "You are the reason I believe in magic.",
    "Every love song makes sense because of you.",
    "With you, I am home.",
    "You are my today and all of my tomorrows.",
    "In a sea of people, my eyes will always search for you.",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-12"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: "spring" }}
        className="mb-8"
      >
        <Heart className="w-16 h-16 text-primary fill-primary animate-heart-beat" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-cursive text-4xl md:text-5xl text-foreground mb-12 text-center"
      >
        Message From My Heart
      </motion.h2>

      <div className="max-w-2xl mx-auto space-y-8">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.4, duration: 0.8 }}
            className="relative"
          >
            <div className="flex items-center gap-4">
              <Sparkles className="w-5 h-5 text-gold flex-shrink-0" />
              <p className="font-serif text-lg md:text-xl text-foreground/90 italic leading-relaxed">
                "{message}"
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3.5, duration: 0.8 }}
        className="mt-16 text-center"
      >
        <div className="paper-texture inline-block px-8 py-6 rounded-lg shadow-soft">
          <p className="font-cursive text-2xl md:text-3xl text-foreground mb-2">
            You are my everything
          </p>
          <p className="font-serif text-muted-foreground">
            Today, tomorrow, and forever
          </p>
        </div>
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4, duration: 0.8 }}
        className="text-center mt-10"
      >
        <button
          onClick={onComplete}
          className="group relative px-8 py-4 font-serif text-base tracking-wide text-foreground border-2 border-primary/30 rounded-full overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-romantic"
        >
          <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
            See How Long We've Been Together
          </span>
          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default HeartMessage;
