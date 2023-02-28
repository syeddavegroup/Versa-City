import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import { Drawer, Stack } from "@mui/material";

import Notifications from "./Notifications";
import LeaderBoard from "./LeaderBoard";
import Transactions from "./Transactions";

const drawerWidth = 270;

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function RightDrawer({ open }) {
  return (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
        },
      }}
      variant="persistent"
      anchor="right"
      open={open}
      PaperProps={{ style: { borderColor: "#444444" } }}
    >
      <Box bgcolor="#151515" height="100vh" color="#d0d0d0">
        <DrawerHeader />

        <Stack px={2} pt={5} spacing={2}>
          <Notifications />

          <LeaderBoard />

          <Transactions />
        </Stack>
      </Box>
    </Drawer>
  );
}
