import React from "react";
import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import LoopIcon from "@mui/icons-material/Loop";

export const Complete = (props) => {
  const { completeTodos, onClickReturn } = props;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "300px",
        bgcolor: "lightgray",
        textAlign: "center",
        margin: "0 auto",
      }}
      p={1}
    >
      <p className="title">Complete</p>
      <List style={{ width: "60%", margin: "0 auto" }}>
        {completeTodos.map((todo, index) => {
          return (
            <Box key={todo} style={{ display: "flex", alignItems: "center" }}>
              <ListItem divider={true}>
                ・
                <ListItemText primary={todo} />
              </ListItem>
              <IconButton
                aria-label="delete"
                onClick={() => onClickReturn(index)}
              >
                <LoopIcon />
              </IconButton>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};
