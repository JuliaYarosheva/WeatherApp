import { useRef, useContext } from "react";
import Input from "@mui/material/Input";
import Button from "@mui/material/Button";
import { WeatherContext } from "../providers/WeatherProvider";
import { FormGroup } from "@mui/material";

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
        <Input inputRef={ref} fullWidth sx={{ marginRight: 3 }} />
        <Button variant="outlined" type="submit">
          Get
        </Button>
      </FormGroup>
    </form>
  );
};

export default Search;
