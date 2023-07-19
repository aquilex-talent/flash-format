import React, { useCallback, useState } from "react";

import {
  Box,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
  makeStyles,
  useTheme,
} from "@mui/material";

const formats = [
  "jpeg",
  "png",
  "webp",
  "gif",
  "jp2",
  "tiff",
  "avif",
  "heif",
  "jxl",
];

const ConvertOptions = () => {
  const theme = useTheme();

  const [fromFormat, setFromFormat] = useState<string>(formats[0]);
  const [toFormat, setToFormat] = useState<string>(formats[1]);

  const handleFromFormatSelection = useCallback(
    (e: SelectChangeEvent<string>) => {
      setFromFormat(e.target.value);
    },
    []
  );

  const handleToFormatSelection = useCallback(
    (e: SelectChangeEvent<string>) => {
      setToFormat(e.target.value);
    },
    []
  );

  return (
    <Box display="flex" sx={{  width: 'fit-content'}}>
      <Typography variant="body1" color="white" marginRight="8px">
        Convert
      </Typography>
      <FormControl style={{ marginRight: "8px" }}>
        <Select
          id="demo-simple-select"
          value={fromFormat}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
          }}
          MenuProps={{
            MenuListProps: {
              sx: {
                backgroundColor: theme.palette.primary.light,
              },
            },
          }}
          style={{ width: "90px", borderRadius: "10px", height: "36px" }}
          onChange={handleFromFormatSelection}
        >
          {formats.map((format) => (
            <MenuItem
              value={format}
              key={format}
              sx={{ backgroundColor: theme.palette.primary.light }}
            >
              <Typography
                variant="caption"
                textTransform="uppercase"
                color="white"
              >
                {format}
              </Typography>
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Typography variant="body1" color="white" marginRight="8px">
        To
      </Typography>
      <FormControl>
        <Select
          id="demo-simple-select"
          value={toFormat}
          displayEmpty
          inputProps={{
            "aria-label": "Without label",
          }}
          MenuProps={{
            MenuListProps: {
              sx: {
                backgroundColor: theme.palette.primary.light,
              },
            },
          }}
          style={{ width: "90px", borderRadius: "10px", height: "36px" }}
          onChange={handleToFormatSelection}
        >
          {formats
            .filter((format) => format !== fromFormat)
            .map((format) => (
              <MenuItem value={format} key={format}>
                <Typography
                  variant="caption"
                  textTransform="uppercase"
                  color="white"
                >
                  {format}
                </Typography>
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default ConvertOptions;
