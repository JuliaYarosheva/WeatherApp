import Typography from "@mui/material/Typography";
import { theme } from "../App";

const Header = () => {
  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.primary.main,
        marginBottom: 5,
      }}
    >
      Type your city to know the weather...
    </Typography>
  );
};

export default Header;
