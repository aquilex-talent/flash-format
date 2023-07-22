import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import ConvertOptions from "./ConvertOptions";
import axios from "axios";

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

const Convert = () => {
  const theme = useTheme();
  
  const [fromFormat, setFromFormat] = useState<string>(formats[0]);
  const [toFormat, setToFormat] = useState<string>(formats[1]);

  const inputRef = useRef<HTMLInputElement>(null);
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) {
      console.log("here");
      poop(file);
    }
  };

  const poop = async (f: File) => {
    const formData = new FormData();
    formData.append(f.name, f);
    formData.append("toFormat", toFormat);

    try {
      console.log("sending file");
      const response = await axios.post(
        "https://format-hvntuwjjaa-uc.a.run.app",
        formData,
        {
          headers: {
            "Content-Type": `image/${fromFormat}`,
            "Access-Control-Allow-Origin": "*"
          },
          responseType: "blob",
        }
      );
      console.log("SUCCESS");
      console.log(response.data);
      console.log("poop");
      const href = URL.createObjectURL(response.data);

      // create "a" HTML element with href to file & click
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", `${f.name.split('.')[0]}.${toFormat}`); //or any other extension
      document.body.appendChild(link);
      link.click();

      // clean up "a" element & remove ObjectURL
      document.body.removeChild(link);
      URL.revokeObjectURL(href);

      if(inputRef.current) {
        inputRef.current.value = '';
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
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
      <ConvertOptions 
        formats={formats}
        toFormat={toFormat}
        fromFormat={fromFormat}
        setToFormat={setToFormat}
        setFromFormat={setFromFormat}
      />
      <input
        type="file"
        accept="image/jpeg"
        ref={inputRef}
        onChange={onFileChange}
        style={{ display: "none" }}
      />
      <Button
        onClick={() => {
          if (inputRef.current) {
            inputRef.current.click();
          }
        }}
        sx={{
          width: "fill-parent",
          backgroundColor: theme.palette.secondary.main,
          color: "white",
          textTransform: "none",
          marginTop: "50px",
          "&:hover": {
            backgroundColor: theme.palette.secondary.dark,
          },
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
