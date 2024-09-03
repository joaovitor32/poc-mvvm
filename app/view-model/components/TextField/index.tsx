"use client";
import type { InputBaseProps } from "@mui/material";
import Box from "@mui/material/Box";
import TextFieldMUI from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import styles from "./styles";

interface TextFieldProps extends InputBaseProps {
  errorMessage?: string | null;
  label?: React.ReactNode;
  htmlFor?: string;
  maxLength?: number;
  type?: string;
}

export const TextField = ({
  htmlFor,
  sx,
  maxLength,
  id,
  ...rest
}: TextFieldProps) => {
  // Exclude errorMessage from being passed to any DOM element
  const { errorMessage:errormessage, ...muiProps } = rest;

  return (
    <Box id={id} sx={styles.wrapper}>
      <TextFieldMUI
        inputProps={{ maxLength: maxLength }}
        type="text"
        id={htmlFor}
        {...muiProps}
      />
      {errormessage ? (
        <Typography sx={{ color: "error.main", fontWeight: "500" }}>
          {errormessage}
        </Typography>
      ) : null}
    </Box>
  );
};
