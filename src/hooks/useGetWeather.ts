import { useCallback, useState } from "react";
import axios from "axios";
import { Data } from "../types/types";

const useWeather = () => {
  const [data, setData] = useState<Data>();
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  const [city, setCity] = useState("");

  const getWeather = useCallback((city: string) => {
    setCity(city);
    setLoading(true);
    axios
      .get<Data>(
        "https://api.weatherapi.com/v1/forecast.json?key=172d18d3a76542c7b9d100101231310",
        {
          params: {
            q: city,
            days: 3,
            aqi: "no",
          },
        }
      )
      .then((res) => {
        setError("");
        setData(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { city, data, error, isLoading, getWeather };
};

export default useWeather;
