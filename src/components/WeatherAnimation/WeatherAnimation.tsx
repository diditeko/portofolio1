import { useEffect, useState } from "react";
import { useWeather } from "@/context/WeatherContext";
import "@/components/WeatherAnimation/weather.css"; // make sure path is correct

const WeatherAnimation = () => {
  const { currentWeather } = useWeather();
  const [elements, setElements] = useState<JSX.Element[]>([]);

  useEffect(() => {
    if (!currentWeather) {
      setElements([]); // No weather selected = no animation
      return;
    }

    const tempElements = [];
    for (let i = 0; i < 20; i++) {
      tempElements.push(
        <div
          key={i}
          className={`weather-element ${currentWeather}`}
          style={{
            left: `${Math.random() * 100}%`,
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
