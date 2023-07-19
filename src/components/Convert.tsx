import { Box, Button, Typography, useTheme } from "@mui/material";
import React from "react";
import ConvertOptions from "./ConvertOptions";

const Convert = () => {
  const theme = useTheme();
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        marginLeft: "auto",
        marginRight: "auto",
        width: "fit-content",
        paddingTop: "120px",
      }}
    >
      <ConvertOptions />
      <Button
        sx={{
          width: "fill-parent",
          backgroundColor: theme.palette.secondary.main,
          color: "white",
          textTransform: "none",
          marginTop: '50px',
          '&:hover': {
            backgroundColor: theme.palette.secondary.dark
          }
        }}
      >
        <Typography variant="body1" color="white">
          Choose a File to Format
        </Typography>
      </Button>
    </Box>
  );
};

export default Convert;
