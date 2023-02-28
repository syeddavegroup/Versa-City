import React from "react";

import { Box, Stack, Typography, Divider } from "@mui/material";

function createData(resident, level) {
  return { resident, level };
}

const rows = [
  createData("1. 0x5BCCiR", 15),
  createData("2. 0xcvCCFR", 35),
  createData("3. 0x5BCsFR", 65),
  createData("4. 0x5BCuiFR", 75),
  createData("5. 0x5tyCFR", 18),
];

const LeaderBoard = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="caption" color="#444444">
        / LEADER BOARD /
      </Typography>

      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2" color="#444444">
            Resident
          </Typography>
          <Typography variant="subtitle2" color="#444444">
            Level
          </Typography>
        </Stack>

        <Divider sx={{ bgcolor: "#444444", mb: 1 }} />

        {rows.map((row) => (
          <Stack direction="row" justifyContent="space-between" mb={1}>
            <Typography variant="body2">{row.resident}</Typography>
            <Typography variant="body2">{row.level}</Typography>
          </Stack>
        ))}
      </Box>
    </Stack>
  );
};

export default LeaderBoard;
