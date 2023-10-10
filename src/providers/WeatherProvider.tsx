import { FC, ReactNode, createContext } from "react";
import useGetWeather from "../hooks/useGetWeather";

export const WeatherContext = createContext<any>(null);

export const WeatherProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { city, data, error, isLoading, getWeather } = useGetWeather();
  return (
    <WeatherContext.Provider
      value={{ city, data, error, isLoading, getWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
