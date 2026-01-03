import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoveLetterProps {
  onComplete: () => void;
}

const LoveLetter = ({ onComplete }: LoveLetterProps) => {
  // Customize these placeholders
  const recipientName = "My Dearest Love";
  const senderName = "Forever Yours";
  const specialDate = "the day we first met";

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-2xl">
        <motion.div
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="paper-texture rounded-lg shadow-romantic p-8 md:p-12 relative overflow-hidden"
        >
          {/* Decorative corner flourishes */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-rose-gold/40 rounded-tl" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-rose-gold/40 rounded-tr" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-rose-gold/40 rounded-bl" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-rose-gold/40 rounded-br" />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
          >
            {/* Header */}
            <div className="text-center mb-8">
              <Heart className="w-8 h-8 mx-auto text-primary fill-primary mb-4" />
              <h2 className="font-cursive text-3xl md:text-4xl text-foreground">
                {recipientName}
              </h2>
            </div>

            {/* Letter content */}
            <div className="font-serif text-foreground/90 leading-relaxed space-y-6 text-base md:text-lg">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
              >
                From the moment I saw you, I knew my life would never be the same. 
                You walked into my world like a gentle sunrise, painting everything 
                with colors I never knew existed.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                Every moment spent with you feels like a precious gift. Your laughter 
                is my favorite melody, your smile my guiding light. In your eyes, 
                I've found a home I never want to leave.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                I remember {specialDate} as if it were yesterday—the nervous 
                butterflies, the way time seemed to stop when our eyes met. Little 
                did I know that moment would become the beginning of the most 
                beautiful chapter of my life.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.8 }}
              >
                Thank you for being my strength when I was weak, my joy when I 
                was sad, and my peace when the world felt chaotic. You are not 
                just my love—you are my best friend, my confidant, my everything.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
              >
                On this special day, I want you to know that my love for you grows 
                deeper with every passing second. I dream of countless more 
                birthdays together, each one more beautiful than the last.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2, duration: 0.8 }}
                className="text-center italic text-primary font-medium"
              >
                Happy Birthday, my love. May this year bring you all the happiness 
                your beautiful heart deserves.
              </motion.p>
            </div>

            {/* Signature */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3.6, duration: 0.8 }}
              className="mt-12 text-right"
            >
              <p className="font-serif text-foreground/80 mb-2">With all my love,</p>
              <p className="font-cursive text-2xl md:text-3xl text-foreground">
                {senderName}
              </p>
              <Heart className="w-5 h-5 text-primary fill-primary ml-auto mt-2 animate-heart-beat" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Continue button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4.2, duration: 0.8 }}
          className="text-center mt-8"
        >
          <button
            onClick={onComplete}
            className="group relative px-8 py-4 font-serif text-base tracking-wide text-foreground border-2 border-primary/30 rounded-full overflow-hidden transition-all duration-500 hover:border-primary hover:shadow-romantic"
          >
            <span className="relative z-10 group-hover:text-primary-foreground transition-colors duration-300">
              Continue to Our Memories
            </span>
            <div className="absolute inset-0 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LoveLetter;
