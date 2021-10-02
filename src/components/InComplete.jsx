import React from "react";
import { Box, List, ListItem, ListItemText, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export const InComplete = (props) => {
  const { inCompleteTodos, onClickComplete, onClickDelete } = props;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "300px",
        bgcolor: "whitesmoke",
        textAlign: "center",
        margin: "0 auto",
        marginBottom: "10px",
      }}
      p={1}
    >
      <p className="title">InComplete</p>
      <List style={{ width: "60%", margin: "0 auto" }}>
        {inCompleteTodos.map((todo, index) => {
          return (
            <Box key={todo} style={{ display: "flex", alignItems: "center" }}>
              <ListItem divider={true}>
                ・
                <ListItemText primary={todo} />
              </ListItem>

              <IconButton
                aria-label="delete"
                onClick={() => onClickComplete(index)}
              >
                <CheckCircleOutlineIcon />
              </IconButton>
              <IconButton
                aria-label="delete"
                onClick={() => onClickDelete(index)}
              >
                <DeleteIcon />
              </IconButton>
            </Box>
          );
        })}
      </List>
    </Box>
  );
};
