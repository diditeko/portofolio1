import { useEffect, useState } from "react";
import { useWeather } from "@/context/WeatherContext";
import "@/components/WeatherAnimation/weather.css";

const WeatherAnimation = () => {
  const { currentWeather } = useWeather();
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!currentWeather) {
      setElements([]);
      return;
    }

    const screenWidth = window.innerWidth;
    const isMobile = screenWidth < 640;
    const iconSize = isMobile ? 20 : 30;
    const iconCount = isMobile ? 10 : 20;

    const tempElements = [];
    for (let i = 0; i < iconCount; i++) {
      tempElements.push(
        <div
          key={i}
          className={`weather-element ${currentWeather}`}
          style={{
            left: `${Math.random() * 100}%`,
            width: `${iconSize}px`,
            height: `${iconSize}px`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        />
      );
    }
    setElements(tempElements);
  }, [currentWeather]);

  return (
    <div className="weather-container pointer-events-none z-0 absolute inset-0 overflow-hidden">
      {elements}
    </div>
  );
};

export default WeatherAnimation;
