import React from "react";
import Cards from "./Cards";

import { Divider } from "@mui/material";

import Map from "./Map";
import Tabs from "./Tabs";

const Main = () => {
  return (
    <>
      <Tabs />
      <Divider sx={{ bgcolor: "#444444", my: 1 }} />

      <Cards />
      <Map />
    </>
  );
};

export default Main;
