import Typography from "@mui/material/Typography";
import { theme } from "../App";

const Header = () => {
  return (
    <Typography
      variant="h1"
      sx={{
        fontSize: "46px",
        color: theme.palette.primary.main,
        marginBottom: 5,
      }}
    >
      Weather App
    </Typography>
  );
};

export default Header;
