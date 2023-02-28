import React from "react";

import { Box, Stack, Typography } from "@mui/material";

const MoneyCard = (props) => {
  return (
    <Box maxWidth={200} minWidth={200} border={0.1} borderColor="#444444" p={2}>
      <Stack direction="row" justifyContent="space-between" mb={2}>
        <Typography variant="body2">{props.text}</Typography>
        <Typography variant="caption" color="#444444">
          {props.percentage}%
        </Typography>
      </Stack>
      <Typography>${props.amount}</Typography>
    </Box>
  );
};

export default MoneyCard;
