import React from "react";

import { Stack, Typography } from "@mui/material";

const UpdatesUI = (props) => {
  return (
    <Stack direction="row" spacing={1} whiteSpace="nowrap">
      <Typography variant="body2" color="#444444">
        {props.text}
      </Typography>
      <Typography variant="body2">${props.amount}</Typography>
      <Typography variant="body2" color={props.color}>
        {props.percentage}%
      </Typography>
    </Stack>
  );
};

export default UpdatesUI;
