import "./auth-left.scss";
import { Box, Typography } from "@mui/material";
export const AuthLeftSide = () => {
  return (
    <div className="sign-in-left fixed top-0 bottom-0 left-0 hidden lg:w-1/2 xl:w-3/5  lg:flex items-end  justify-start py-28 px-32 ">
      <Box>
        <Typography
          variant="h1"
          fontSize={96}
          className="capitalize"
          sx={{
            fontFamily:"var(--font-montserrat)",
            color: "white",
            fontWeight: "bold",
            fontSize:{ md: 80, lg: 96},
            textTransform:"capitalize"
          }}
          >
          welcome
        </Typography>
        <Typography
          variant="h1"
          fontSize={90}
          className="capitalize"
          sx={{
            fontFamily:"Arial, sans-serif",
            color: "transparent",
            WebkitTextStroke: "3px white",
            fontWeight: "bold",
            fontSize:{ md: 76, lg: 90},
            textTransform:"capitalize"

          }}
        >
          back
        </Typography>
      </Box>
    </div>
  );
};
