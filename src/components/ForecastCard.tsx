import { Stack } from "@mui/material";
import { Day } from "../types/types";
import styles from "./ForecastCard.module.css";
import { theme } from "../App";
import { weatherIcons } from "../data/weatherIcons";

interface ForecastProps {
  data: Day;
}

const ForecastCard = ({ data }: ForecastProps) => {
  return (
    <div
      className={styles.forecastCardContainer}
      style={{ border: "2px solid " + theme.palette.primary.main }}
    >
      <p>{data.day.condition.text}</p>
      <img
        src={`../public/images/weather-icons/day/${
          weatherIcons[data.day.condition.code]
        }`}
        alt={data.day.condition.text}
      />
      <Stack spacing={4} direction="row">
        <span>{data.day.mintemp_c}°C</span>
        <span>{data.day.maxtemp_c}°C</span>
      </Stack>
      <p>{data.date}</p>
    </div>
  );
};

export default ForecastCard;
