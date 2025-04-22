import { createContext, useContext, useState, ReactNode } from "react";

type WeatherType = "sunny" | "snowy" | "rainy" | "spring" | null;

interface WeatherContextType {
  currentWeather: WeatherType;
  setCurrentWeather: (weather: WeatherType) => void;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [currentWeather, setCurrentWeather] = useState<WeatherType>(null);

  return (
    <WeatherContext.Provider value={{ currentWeather, setCurrentWeather }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather must be used within a WeatherProvider");
  }
  return context;
};
