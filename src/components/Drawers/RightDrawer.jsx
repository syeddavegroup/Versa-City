import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";

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

        <Box px={2} pt={4}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
          nulla iure laborum rerum consectetur officiis asperiores temporibus
          aliquid. Quaerat, ullam!
        </Box>
      </Box>
    </Drawer>
  );
}
