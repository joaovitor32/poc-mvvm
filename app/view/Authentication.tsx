"use client";
import React from "react";
import { useAuthentication, TextField } from "@/app/view-model";
import { Box, Button, Container, Typography } from "@mui/material";

const Login: React.FC = () => {
  const { fields, error, handleValidate, handleChange, handleSubmit } =
    useAuthentication();

  return (
    <Container>
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            mt: 1,
            gap: "16px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <TextField
            value={fields.login}
            errorMessage={error?.login?.message ?? ""}
            onChange={(e) => {
              handleChange("login", e.target.value);
              handleValidate("login", e.target.value);
            }}
          />
          <TextField
            value={fields.password}
            errorMessage={error?.password?.message ?? ""}
            onChange={(e) => {
              handleChange("password", e.target.value);
              handleValidate("password", e.target.value);
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
