import { useContext } from "react";
import { WeatherContext } from "../providers/WeatherProvider";
import { Day } from "../types/types";
import { List, ListItem, Stack } from "@mui/material";
import ForecastCard from "./ForecastCard";
import CurrentForecast from "./CurrentForecast";

const CurrentWeather = () => {
  const { city, data, error, isLoading } = useContext(WeatherContext);

  if (error) return <p>City not found</p>;

  if (isLoading) return <p>Loading...</p>;

  if (data)
    return (
      <>
        {city && <CurrentForecast data={data.current} />}
        <List
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Stack
            spacing={2}
            direction={{ xs: "column", sm: "row" }}
            width={"100%"}
          >
            {data?.forecast?.forecastday.map((day: Day, i: number) => (
              <ListItem key={i} sx={{ padding: "0px" }}>
                <ForecastCard data={day} />
              </ListItem>
            ))}
          </Stack>
        </List>
      </>
    );
};

export default CurrentWeather;
