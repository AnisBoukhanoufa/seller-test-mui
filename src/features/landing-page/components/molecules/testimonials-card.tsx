import { Box, Typography } from "@mui/material";
import React from "react";

type TestimonialsCardProps = { text: string };

export const TestimonialsCard = ({ text }: TestimonialsCardProps) => {
  return (
    <div>
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap={1.25}
        px={{ xs: 2, sm: 2, md: 4 }}
        py={{ xs: 4, sm: 4, md: 8 }}
        borderRadius={10}
        color="var(--color-gray)"
        height={1}
        width={1}
        textAlign={"center"}
        sx={{
          backgroundColor: "white",
        }}
        className="testimonial-card"
      >
        <Typography color="#FFCD29" variant="body2" fontSize={24}>
          {`★ ★ ★ ★ ★`}
        </Typography>
        <Typography
          sx={{ fontSize: { xs: 13, sm: 16, md: 24 } }}
          fontWeight={300}
          variant="body2"
        >
          {text}
        </Typography>
      </Box>
    </div>
  );
};
