import React from "react";

import { Stack, Typography, Chip } from "@mui/material";

const StatsCard = (props) => {
  return (
    <>
      <Stack
        color="#6acf8c"
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={1}
        sx={{
          border: 1,
          px: 1,
          borderColor: "#444444",
        }}
      >
        <img src={props.icon} alt="icon" />
        <Typography variant="caption">{props.text}</Typography>
        <Chip
          label={props.value}
          variant="filled"
          sx={{
            borderRadius: 0,
            color: "black",
            bgcolor: "#6acf8c",
            fontSize: "16px",
          }}
        />
      </Stack>
    </>
  );
};

export default StatsCard;
