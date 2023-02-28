import React from "react";

import { Stack } from "@mui/material";

import UpdatesUI from "../../UI/UpdatesUI";

const Updates = () => {
  const red = "#f23773";
  const blue = "#3935ff";

  return (
    <Stack
      direction="row"
      spacing={4}
      py={1}
      px={2}
      alignItems="center"
      overflow="scroll"
      flexWrap="nowrap"
    >
      <UpdatesUI
        text="Token price"
        amount="20,456"
        percentage="-0.45"
        color={red}
      />
      <UpdatesUI
        text="Total supply"
        amount="20,456"
        percentage="+0.45"
        color={blue}
      />
      <UpdatesUI
        text="Gold token price"
        amount="200,456"
        percentage="-0.16"
        color={red}
      />
      <UpdatesUI
        text="Market cap"
        amount="20,456,234,567,05"
        percentage="+0.45"
        color={blue}
      />
      <UpdatesUI
        text="Benchmark total stacked"
        amount="20,34"
        percentage="-0.45"
        color={red}
      />
      <UpdatesUI
        text="Global stacked value"
        amount="20,456,213,455,09"
        percentage="+0.45"
        color={blue}
      />
      <UpdatesUI
        text="Tokens minted in last block"
        amount="9,862"
        percentage="-0.45"
        color={red}
      />
    </Stack>
  );
};

export default Updates;
