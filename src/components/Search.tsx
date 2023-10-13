import { useRef, useContext } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { WeatherContext } from "../providers/WeatherProvider";
import { FormControl, FormGroup, InputLabel } from "@mui/material";

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { getWeather } = useContext(WeatherContext);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) getWeather(ref.current.value);
      }}
      style={{ width: "100%", maxWidth: "560px", marginBottom: "75px" }}
    >
      <FormGroup sx={{ display: "flex", flexWrap: "nowrap" }} row={true}>
        <FormControl fullWidth sx={{ marginRight: "20px" }}>
          <InputLabel htmlFor="city-search" color="primary">
            Type your city to know the weather...
          </InputLabel>
          <Input
            id="city-search"
            inputRef={ref}
            fullWidth
            sx={{ marginRight: 3 }}
            color="primary"
          />
        </FormControl>
        <Button variant="outlined" type="submit">
          Get
        </Button>
      </FormGroup>
    </form>
  );
};

export default Search;
