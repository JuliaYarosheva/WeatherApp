import { useRef, useContext } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { WeatherContext } from "../providers/WeatherProvider";
import useGetLocation from "../hooks/useGetLocation";
import { FormGroup } from "@mui/material";

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);

  const { getWeather } = useContext(WeatherContext);

  const { getLocation } = useGetLocation();

  const getSearchName = (event) => {
    getLocation(event.target.value);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) getWeather(ref.current.value);
      }}
      style={{ width: "100%", maxWidth: "560px", marginBottom: "75px" }}
    >
      <FormGroup sx={{ display: "flex", flexWrap: "nowrap" }} row={true}>
        <Input
          inputRef={ref}
          fullWidth
          sx={{ marginRight: 3 }}
          // onChange={(event) =>
          //   event.target.value.length >= 3 ? getSearchName(event) : ""
          // }
        />
        <Button variant="outlined" type="submit">
          Get
        </Button>
      </FormGroup>
    </form>
  );
};

export default Search;
