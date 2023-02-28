import React from "react";

import { Box, Stack, Typography } from "@mui/material";

const Notifications = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="caption" color="#444444">
        / NOTIFICATIONS /
      </Typography>
      <Typography variant="body2">
        {">"} Connect wallet to see system notifications 1
      </Typography>
      <Typography variant="body2">
        {">"} Connect wallet to see system notifications 2
      </Typography>
    </Stack>
  );
};

export default Notifications;
