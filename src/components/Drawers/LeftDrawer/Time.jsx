import { Box, Stack, Typography } from "@mui/material";
import React from "react";

const Time = () => {
  const d = new Date();
  const h = d.getHours();
  const m = d.getMinutes();
  const s = d.getSeconds();

  return (
    <Stack
      border={1}
      borderColor="gray"
      m={2}
      mt={6}
      p={2}
      direction="row"
      spacing={3}
      justifyContent="center"
    >
      <Stack spacing={1}>
        <Typography color="gray" variant="body2">
          Local
        </Typography>
        <Typography
          color="white"
          variant="body1"
        >{`${h}:${m}:${s}`}</Typography>
      </Stack>
      <Stack spacing={1}>
        <Typography color="gray" variant="body2">
          Varse City
        </Typography>
        <Typography
          color="white"
          variant="body1"
        >{`${h}:${m}:${s}`}</Typography>
      </Stack>
    </Stack>
  );
};

export default Time;
