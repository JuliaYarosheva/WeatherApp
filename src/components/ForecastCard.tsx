import { Divider, Stack, Typography } from "@mui/material";
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
      <Typography variant="h6" textAlign="center" mb={2}>
        {data.day.condition.text}
      </Typography>
      <Stack
        direction={{ xs: "row", sm: "column" }}
        justifyContent="space-around"
        alignItems="center"
        width="100%"
      >
        <img
          src={`${import.meta.env.BASE_URL}images/weather-icons/day/${
            weatherIcons[data.day.condition.code]
          }`}
          alt={data.day.condition.text}
          style={{ width: "100px", marginBottom: "15px" }}
        />
        <Stack
          direction="column"
          justifyContent="space-between"
          alignItems="center"
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            divider={
              <Divider
                sx={{ margin: "5px 10px", borderColor: "#fff" }}
                orientation="vertical"
                flexItem
              />
            }
          >
            <span>{data.day.mintemp_c}°C</span>
            <span> {data.day.maxtemp_c}°C</span>
          </Stack>
          <p>{data.date}</p>
        </Stack>
      </Stack>
    </div>
  );
};

export default ForecastCard;
