import { Box } from "@mui/material";
import React from "react";

type TestimonialsButtonProps = {
  children: React.ReactNode;
  buttonSide: "right" | "left";
  className: "swiper-button-next" | "swiper-button-prev";
};

export default function TestimonialsButton({
  children,
  buttonSide,
  className,
}: TestimonialsButtonProps) {
  return (
    <Box
      className={className}
      sx={{
        position: "absolute",
        top: "20vh",
        transform: "translateY(-50%)",
        height: 100,
        width: 100,
        borderRadius: "50%",
        justifyContent: "center",
        alignItems: "center",
        color: "#bbbbbb",
        transition: "all 0.3s",
        border: "2px solid white",
        padding: 0.5,
        display: { xs: "none", sm: "none", md: "flex" },
        ...(buttonSide === "right"
          ? { left: { xs: "none", sm: "none", md: "5%", lg: "10%" } }
          : { right: { xs: "none", sm: "none", md: "5%", lg: "10%" } }),
      }}
    >
      <Box
        sx={{
          backgroundColor: "rgba(255,255,255,1)",
          height: "92px",
          width: "92px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#bbbbbb",
          transition: "all 0.3s",
          p: 3,
          ":hover": {
            backgroundColor: "#D9D9D9",
            color: "white",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
}
