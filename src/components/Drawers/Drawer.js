import * as React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Divider from "@mui/material/Divider";

import Header from "../Header/Header";
import LeftDrawer from "./LeftDrawer";
import RightDrawer from "./RightDrawer";
import Main from "../Main/Main";

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

export default function MiniDrawer() {
  const [leftDrawer, setOpenLeft] = React.useState(false);
  const [rightDrawer, setOpenRight] = React.useState(false);

  const handleDrawerToggleLeft = () => {
    setOpenLeft((prevState) => !prevState);
  };

  const handleDrawerToggleRight = () => {
    setOpenRight((prevState) => !prevState);
  };

  let maxWidth;
  if (rightDrawer) {
    maxWidth = rightDrawer ? `calc(100% - ${300}px)` : `100%`;
  }
  if (rightDrawer && leftDrawer) {
    maxWidth = rightDrawer ? `calc(100% - ${480}px)` : `100%`;
  }

  return (
    <Box sx={{ display: "flex", bgcolor: "#151515" }}>
      <AppBar
        position="fixed"
        open={leftDrawer}
        sx={{ bgcolor: "#151515" }}
        elevation={0}
      >
        <Header
          toggleLeft={leftDrawer}
          toggleRight={rightDrawer}
          handleDrawerToggleLeft={handleDrawerToggleLeft}
          handleDrawerToggleRight={handleDrawerToggleRight}
        />
        <Divider sx={{ bgcolor: "#444444", mt: 1 }} />
      </AppBar>

      <LeftDrawer open={leftDrawer} />

      <RightDrawer open={rightDrawer} />

      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          height: "100vh",
          color: "white",
          ml: -35,
          mt: 2,
          maxWidth: { maxWidth },
        }}
      >
        <DrawerHeader />
        <Main />
      </Box>
    </Box>
  );
}
