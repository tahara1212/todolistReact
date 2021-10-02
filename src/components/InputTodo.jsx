import React from "react";
import { Box, TextField, Button } from "@mui/material";

export const InputTodo = (props) => {
  const { inputtext, onChange, onClick } = props;

  return (
    <Box
      sx={{
        width: "100%",
        height: 60,
        bgcolor: "lightblue",
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      mb={1}
      p={1}
    >
      <TextField
        id="outlined-basic"
        label="TODO"
        variant="outlined"
        size="small"
        color="secondary"
        value={inputtext}
        onChange={onChange}
        style={{
          width: "70%",
          marginRight: "10px",
        }}
      />
      <Button
        variant="contained"
        onClick={onClick}
        style={{
          width: "20%",
          backgroundColor: "teal",
        }}
      >
        Input
      </Button>
    </Box>
  );
};
