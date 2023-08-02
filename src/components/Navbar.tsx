import React from "react";

import { Box, Typography, useTheme } from "@mui/material";
import OfflineBoltOutlinedIcon from "@mui/icons-material/OfflineBoltOutlined";

const Navbar = () => {
  const theme = useTheme();
  return (
    <Box
      className="navbar"
      style={{
        backgroundColor: theme.palette.primary.dark,
      }}
    >
      <OfflineBoltOutlinedIcon className="flash-icon-navbar" />
      <Typography
        fontSize={40}
        fontStyle="italic"
        component="span"
        color="white"
        marginRight="8px"
      >
        Flash
      </Typography>
      <Typography fontSize={40} component="span" color="white">
        Format
      </Typography>
    </Box>
  );
};

export default Navbar;
