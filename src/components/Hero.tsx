import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      width="100%"
      sx={{
        backgroundColor: theme.palette.primary.main,
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        sx={{ width: '90%'}}
      >
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginTop="40px"
        >
          <OfflineBoltOutlinedIcon
            style={{
              color: "white",
              width: "60px",
              height: "60px",
              marginRight: 8,
            }}
          />
          <Typography
            variant="h1"
            color="white"
            fontStyle="italic"
            component="span"
            marginRight="8px"
          >
            Flash
          </Typography>
          <Typography
            variant="h1"
            color="white"
            fontStyle="normal"
            component="span"
          >
            Format
          </Typography>
        </Box>
        <Typography
          variant="body1"
          color="white"
          marginTop="20px"
          marginBottom="40px"
          textAlign="center"
        >
          Convert Your Image Into the Format You Need In a Flash!
        </Typography>
      </Box>
    </Box>
  );
};

export default Hero;
