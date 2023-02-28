import React from "react";

import {
  AppBar,
  Toolbar,
  Link,
  Typography,
  TextField,
  InputAdornment,
  Box,
  Avatar,
  IconButton,
  Stack,
  Button,
  Divider,
} from "@mui/material";

import coinIcon from "../../assets/icons/coin.png";
import LVLIcon from "../../assets/icons/LVL.png";
import starIcon from "../../assets/icons/star.png";
import heartIcon from "../../assets/icons/heart.png";
import statusIcon from "../../assets/icons/check.png";
import { BsLayoutSidebar, BsLayoutSidebarReverse } from "react-icons/bs";

import StatsCard from "../../UI/StatsCard";
import Updates from "./Updates";

const Header = ({ handleDrawerToggleLeft, handleDrawerToggleRight }) => {
  return (
    <Toolbar disableGutters>
      <Stack sx={{ width: "100%" }}>
        <Updates />

        <Divider sx={{ bgcolor: "#444444", mb: 1 }} />

        <Stack
          direction="row"
          display="flex"
          spacing={2}
          px={2}
          whiteSpace="nowrap"
        >
          <Button
            variant="outlined"
            sx={{
              borderColor: "#444444",
              color: "white",
              borderRadius: 0,
              px: 6.9,
            }}
          >
            Versa City
          </Button>

          <Box sx={{ border: 0.1, color: "#444444", bgcolor: "white" }} />

          <IconButton
            aria-label="open drawer"
            size="small"
            onClick={handleDrawerToggleLeft}
            sx={{
              color: "white",
              mr: 1,
              borderRadius: 0,
              p: 1.3,
              border: 1,
              borderColor: "#444444",
              whiteSpace: "nowrap",
            }}
          >
            <BsLayoutSidebar />
          </IconButton>

          <StatsCard icon={coinIcon} text="EP" value="0" />
          <StatsCard icon={LVLIcon} text="LVL" value="0" />
          <StatsCard icon={starIcon} text="XP" value="0" />
          <StatsCard icon={heartIcon} text="HP" value="0%" />
          <StatsCard icon={statusIcon} text="STATUS" value="0" />

          <Box flexGrow={1} />

          <Button
            variant="outlined"
            sx={{
              borderColor: "#444444",
              color: "white",
              borderRadius: 0,
            }}
          >
            <Typography color="#444444" variant="caption">
              Net Worth &nbsp;
            </Typography>
            <Typography color="#6acf8c" variant="body2">
              $22,567,34
            </Typography>
          </Button>

          <IconButton
            aria-label="open drawer"
            size="small"
            onClick={handleDrawerToggleRight}
            sx={{
              color: "white",
              mr: 1,
              borderRadius: 0,
              p: 1.3,
              border: 1,
              borderColor: "#444444",
              whiteSpace: "nowrap",
            }}
          >
            <BsLayoutSidebarReverse />
          </IconButton>

          <Button
            variant="outlined"
            sx={{
              borderColor: "#6acf8c",
              color: "#6acf8c",
              borderRadius: 0,
              px: 6.9,
            }}
          >
            Connect Wallet
          </Button>
        </Stack>
      </Stack>
    </Toolbar>
  );
};

export default Header;
