import { Box, Typography, useTheme } from "@mui/material";
import React from "react";

const Footer = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      justifyContent="center"
      sx={{
        backgroundColor: theme.palette.primary.dark,
        paddingY: 2,
        marginTop: "auto",
      }}
    >
      <Typography variant="caption" color="white">
        Made with 🤍 by{" "}
        <a
          href="https://www.aquilex.org/"
          target="_blank"
          style={{ textDecoration: "none", color: "white" }}
        >
          Aquilex Talent
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
