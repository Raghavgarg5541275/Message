import { useState } from "react";
import { Helmet } from "react-helmet-async";
import FloatingHearts from "@/components/FloatingHearts";
import MusicPlayer from "@/components/MusicPlayer";
import IntroPopup from "@/components/IntroPopup";
import Envelope from "@/components/Envelope";
import LoveLetter from "@/components/LoveLetter";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import HeartMessage from "@/components/HeartMessage";
import TimeCounter from "@/components/TimeCounter";
import FinalSurprise from "@/components/FinalSurprise";

type Stage = 
  | "intro" 
  | "envelope" 
  | "letter" 
  | "slideshow" 
  | "message" 
  | "counter" 
  | "surprise";

const Index = () => {
  const [currentStage, setCurrentStage] = useState<Stage>("intro");

  const renderStage = () => {
    switch (currentStage) {
      case "intro":
        return <IntroPopup onEnter={() => setCurrentStage("envelope")} />;
      case "envelope":
        return <Envelope onOpen={() => setCurrentStage("letter")} />;
      case "letter":
        return <LoveLetter onComplete={() => setCurrentStage("slideshow")} />;
      case "slideshow":
        return <PhotoSlideshow onComplete={() => setCurrentStage("message")} />;
      case "message":
        return <HeartMessage onComplete={() => setCurrentStage("counter")} />;
      case "counter":
        return <TimeCounter onComplete={() => setCurrentStage("surprise")} />;
      case "surprise":
        return <FinalSurprise />;
      default:
        return null;
    }
  };

  return (
    <>
      <Helmet>
        <title>Happy Birthday My Love ❤️</title>
        <meta name="description" content="A special birthday gift made with love, just for you." />
      </Helmet>
      
      <main className="min-h-screen bg-romantic relative overflow-hidden">
        <FloatingHearts />
        <MusicPlayer />
        
        <div className="relative z-10">
          {renderStage()}
        </div>
      </main>
    </>
  );
};

export default Index;
