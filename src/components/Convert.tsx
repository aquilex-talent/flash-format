import { Box, Button, Typography, useTheme } from "@mui/material";
import React, { useRef, useState } from "react";
import ConvertOptions from "./ConvertOptions";
import axios from "axios";

const Convert = () => {
  const theme = useTheme();
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  console.log({ selectedFile })
  const inputRef = useRef<HTMLInputElement>(null);
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) {
      console.log("here")
      poop(file);
    }
  };

  const onFileUpload = () => {
    if (!selectedFile) {
      return;
    }
    const formData = new FormData();
    formData.append(selectedFile.name, selectedFile);

    axios.post(
      "http://127.0.0.1:5001/flash-format/us-central1/convertImage",
      formData
    );
  };

  const poop = async (f: File) => {
    const formData = new FormData();
    formData.append(f.name, f);

    try {
      console.log("sending file")
      await axios.post(
        "http://127.0.0.1:5001/flash-format/us-central1/convertImage",
        formData
      );
      console.log("SUCCESS");
    } catch(error) {
      console.log('error: ', error);
    }
  }
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
      <input
        type="file"
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
