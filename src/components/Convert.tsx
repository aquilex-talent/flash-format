import React, { useRef, useState } from "react";
import axios from "axios";

import {
  Box,
  Button,
  CircularProgress,
  Theme,
  Typography,
  useTheme,
} from "@mui/material";

import ConvertOptions from "./ConvertOptions";

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

  const [loading, setLoading] = useState<boolean>(false);
  const [toFormat, setToFormat] = useState<string>(formats[1]);
  const [fromFormat, setFromFormat] = useState<string>(formats[0]);

  const inputRef = useRef<HTMLInputElement>(null);
  const onFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.item(0);
    if (file) {
      processFile(file);
    }
  };

  const processFile = async (f: File) => {
    setLoading(true);
    const formData = new FormData();
    formData.append(f.name, f);
    formData.append("toFormat", toFormat);

    const NODE_ENV = process.env.NODE_ENV || "production";
    console.log({ NODE_ENV });

    const cloudFunctionURL =
      NODE_ENV === "production"
        ? "https://format-hvntuwjjaa-uc.a.run.app"
        : "http://127.0.0.1:5001/flash-format/us-central1/format";

    try {
      const response = await axios.post(cloudFunctionURL, formData, {
        headers: {
          "Content-Type": `image/${fromFormat}`,
          "Access-Control-Allow-Origin": "*",
        },
        responseType: "blob",
      });

      const href = URL.createObjectURL(response.data);
      const link = document.createElement("a");
      link.href = href;
      link.setAttribute("download", `${f.name.split(".")[0]}.${toFormat}`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(href);

      if (inputRef.current) {
        inputRef.current.value = "";
      }
    } catch (error) {
      console.log("error: ", error);
    }
    setLoading(false);
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
      {loading ? (
        <CircularProgress />
      ) : (
        <ConvertUI
          theme={theme}
          toFormat={toFormat}
          fromFormat={fromFormat}
          inputRef={inputRef}
          setToFormat={setToFormat}
          setFromFormat={setFromFormat}
          onFileChange={onFileChange}
        />
      )}
    </Box>
  );
};

interface ConvertUIProps {
  theme: Theme;
  toFormat: string;
  fromFormat: string;
  inputRef: React.RefObject<HTMLInputElement>;
  setToFormat: (newToFormat: string) => void;
  setFromFormat: (newFromFormat: string) => void;
  onFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ConvertUI = ({
  theme,
  toFormat,
  fromFormat,
  inputRef,
  setToFormat,
  setFromFormat,
  onFileChange,
}: ConvertUIProps) => {
  return (
    <>
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
    </>
  );
};

export default Convert;
