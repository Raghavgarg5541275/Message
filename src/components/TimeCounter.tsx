import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Clock } from "lucide-react";

interface TimeCounterProps {
  onComplete: () => void;
}

interface TimeElapsed {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const TimeCounter = ({ onComplete }: TimeCounterProps) => {
  // Set your relationship start date here
  const startDate = new Date("2025-04-24T04:26:00");
  
  const [timeElapsed, setTimeElapsed] = useState<TimeElapsed>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date();
      const diff = now.getTime() - startDate.getTime();

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeElapsed({ days, hours, minutes, seconds });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Days", value: timeElapsed.days },
    { label: "Hours", value: timeElapsed.hours },
    { label: "Minutes", value: timeElapsed.minutes },
    { label: "Seconds", value: timeElapsed.seconds },
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
        className="mb-6"
      >
        <Clock className="w-12 h-12 text-rose-gold" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="font-cursive text-3xl md:text-4xl text-foreground mb-4 text-center"
      >
        Time We've Been Together
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-muted-foreground mb-12 text-center"
      >
        And counting every precious second...
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-3xl mx-auto"
      >
        {timeUnits.map((unit, index) => (
          <motion.div
            key={unit.label}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1 + index * 0.1 }}
            className="paper-texture rounded-xl p-6 text-center shadow-soft border border-rose-gold/20"
          >
            <div className="font-cursive text-4xl md:text-5xl text-foreground mb-2">
              {unit.value.toString().padStart(2, "0")}
            </div>
            <div className="font-serif text-sm text-muted-foreground uppercase tracking-widest">
              {unit.label}
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8 }}
        className="mt-12 flex items-center gap-2 text-primary"
      >
        <Heart className="w-5 h-5 fill-primary animate-heart-beat" />
        <span className="font-serif italic">of loving you</span>
        <Heart className="w-5 h-5 fill-primary animate-heart-beat" />
      </motion.div>

      {/* Continue button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.8 }}
        className="text-center mt-12"
      >
        <button
          onClick={onComplete}
          className="group relative px-8 py-4 font-serif text-base tracking-wide text-foreground border-2 border-primary/30 rounded-full overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-romantic"
        >
          <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
            One Last Surprise 🎁
          </span>
          <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default TimeCounter;
