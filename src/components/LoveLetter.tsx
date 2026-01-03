import { motion } from "framer-motion";
import { Heart } from "lucide-react";

interface LoveLetterProps {
  onComplete: () => void;
}

const LoveLetter = ({ onComplete }: LoveLetterProps) => {
  // Customize these placeholders
  const recipientName = "MY LOVE";
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
                Bebu, jab hum pehli baar mile the naa, tab mujhe bilkul bhi idea nahi tha ki tum meri zindagi ka itna khoobsurat hissa ban jaogi. Uss din sirf ek si feeling thi par dil ne turant pehchaan liya tha ki tum kuch special ho. Jab Simmi tumhe laayi aur maine pehli baar tumhe dekha andar se bas ek hi awaaz aayi isko hamesha khush rakhna hai.
                </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6, duration: 0.8 }}
              >
                Phir SnapEats par tumhe dekha aur sach bolun toh wahi se pyaar shuru ho gaya tha. Tumhara pehla text aaya aur dil literally pagal ho gaya tha. Aisa laga jaise zindagi khud keh rahi ho, yeh chahiye, bas yehi chahiye. 
                </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                Jab hum mile the tum ghar se lad ke sirf mujhse milne aayi thi. Uss din tum itni sundar lag rahi thi jaise sirf mere liye tayaar hoke aayi ho. Aur woh raaten 4 baje tak saath rehna, door se balcony se ek dusre ko dekhna, bina dikhe bhi ek-dusre ko pyaara lagna. Tumhara kehna ki main sundar lagta hoon vahan se aaj bhi yaad hai mujhe.
                </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.8 }}
              >
                Phir woh “I like you” nahi balki asli wala “I love you” jo sirf lafz nahi ek vaada tha. Roz milna hasna sab kuch share karna, first month ke surprises, hamari regular meets har pal itna perfect tha jaise kisi kahaani ka sabse khoobsurat chapter. Aur woh moments lightning wala pal, football ground ke paas woh tree aur uske girte hue petals jaise upar se blessings baras rahi ho hum dono par.
                </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8, duration: 0.8 }}
              >
                Bebu, tumhare saath sab kuch itna natural aur pyaara lagta hai ki lagta hi nahi hum abhi mile hain. Tum meri smile, meri oxygen ho, meri jaan ho. Tumhare saath zindagi sirf jeena nahi lagti mehsoos hone lagti hai real love lagta hai ki haan pheli baar pyaar hua ar both hua. Chahe duniya idhar udhar ho jaaye mera dil hamesha tumhare paas hi rahega. I love you, aaj se bhi zyada, aur kal se bhi zyada and Yes, "Forever means Forever".💖
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
