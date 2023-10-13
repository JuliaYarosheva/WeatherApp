import { theme } from "../App";
import { weatherIcons, dayTime } from "../data/weatherIcons";
import { CurrentDay } from "../types/types";
import styles from "./CurrentForecast.module.css";
import { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";
import { Stack, Typography } from "@mui/material";

interface CurrentForecastProps {
  data: CurrentDay;
}

const CurrentForecast = ({ data }: CurrentForecastProps) => {
  const { city } = useContext(WeatherContext);

  return (
    <div
      className={styles.currentForecastContainer}
      style={{ border: "2px solid " + theme.palette.primary.main }}
    >
      <div>
        <img
          src={`${import.meta.env.BASE_URL}images/weather-icons/${
            dayTime[data.is_day]
          }/${weatherIcons[data.condition.code]}`}
          alt={data.condition.text}
          style={{ width: "100px" }}
        />
      </div>
      <div>
        <p>Now</p>
        <Typography variant="h5">{city.toUpperCase()}</Typography>
        <p>{data.temp_c}°C</p>
        <p>{data.condition.text}</p>
      </div>
    </div>
  );
};

export default CurrentForecast;
