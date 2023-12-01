import React from "react";
import {
  Box,
  Typography,
} from "@mui/material";

export function MessageLine(props:any) {
  const {messages} = props;
  let showThis = "";
  if (messages) showThis = messages[0].message;
  return (
        <Box sx={{}}>
            <Typography sx={{
              fontFamily:"Noka Black",
              textAlign: "center",
              color: "white",
            }} variant="h6">
              {showThis}
            </Typography>
        </Box>
  );
};
