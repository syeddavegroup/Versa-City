import React from "react";

import { Box, Stack, Typography, Divider } from "@mui/material";

const Transactions = () => {
  return (
    <Stack spacing={2}>
      <Typography variant="caption" color="#444444">
        / LATEST TRANSACTIONS /
      </Typography>

      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">4cc-er56</Typography>
          <Typography variant="body2">0.01345673 BTC</Typography>
        </Stack>
        <Divider sx={{ bgcolor: "#444444" }} />
        <Typography variant="caption" color="#444444">
          2/19/2023, 17:57:28
        </Typography>
      </Box>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">4cc-er56</Typography>
          <Typography variant="body2">0.01345673 BTC</Typography>
        </Stack>
        <Divider sx={{ bgcolor: "#444444" }} />
        <Typography variant="caption" color="#444444">
          2/19/2023, 17:57:28
        </Typography>
      </Box>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">4cc-er56</Typography>
          <Typography variant="body2">0.01345673 BTC</Typography>
        </Stack>
        <Divider sx={{ bgcolor: "#444444" }} />
        <Typography variant="caption" color="#444444">
          2/19/2023, 17:57:28
        </Typography>
      </Box>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">4cc-er56</Typography>
          <Typography variant="body2">0.01345673 BTC</Typography>
        </Stack>
        <Divider sx={{ bgcolor: "#444444" }} />
        <Typography variant="caption" color="#444444">
          2/19/2023, 17:57:28
        </Typography>
      </Box>
      <Box>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2">4cc-er56</Typography>
          <Typography variant="body2">0.01345673 BTC</Typography>
        </Stack>
        <Divider sx={{ bgcolor: "#444444" }} />
        <Typography variant="caption" color="#444444">
          2/19/2023, 17:57:28
        </Typography>
      </Box>
    </Stack>
  );
};

export default Transactions;
