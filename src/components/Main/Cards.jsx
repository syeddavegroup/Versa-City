import React from "react";

import { Stack } from "@mui/material";
import MoneyCard from "../../UI/MoneyCard";

const Cards = () => {
  return (
    <Stack direction="row" gap={2} flexWrap="wrap" justifyContent="center">
      <MoneyCard text="CASH" amount="0" percentage="0" />
      <MoneyCard text="TAXES" amount="0" percentage="0" />
      <MoneyCard text="CREDIT" amount="0" percentage="0" />
      <MoneyCard text="DIGITAL ASSETS" amount="0" percentage="0" />
      <MoneyCard text="GOLD" amount="0" percentage="0" />
      <MoneyCard text="GOLD" amount="0" percentage="0" />
    </Stack>
  );
};

export default Cards;
