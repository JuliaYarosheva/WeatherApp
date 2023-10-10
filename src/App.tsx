import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import Header from "./components/Header";
import Search from "./components/Search";
import WeatherDisplay from "./components/WeatherDisplay";
import { WeatherProvider } from "./providers/WeatherProvider";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { blueGrey, lightBlue, cyan } from "@mui/material/colors";
import { Stack } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: cyan[200],
    },
    secondary: {
      main: blueGrey[500],
    },
    text: {
      primary: cyan[200],
    },
    background: {
      default: lightBlue[500],
      paper: lightBlue[500],
    },
  },
});

function App() {
  return (
    <WeatherProvider>
      <ThemeProvider theme={theme}>
        <Stack justifyContent="center" alignItems="center">
          <Header />
          <Search />
        </Stack>
        <WeatherDisplay />
      </ThemeProvider>
    </WeatherProvider>
  );
}

export default App;
