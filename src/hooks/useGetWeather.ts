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
        "http://api.weatherapi.com/v1/forecast.json?key=155a4f358e464633946203943232408",
        {
          params: {
            q: city,
            days: 5,
            aqi: "no",
          },
        }
      )
      .then((res) => {
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
