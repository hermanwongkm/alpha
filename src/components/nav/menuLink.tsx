import { Stack, Link, Text } from "@chakra-ui/react";
import React from "react";

const MenuLink = () => {
  return (
    <Stack
      spacing={8}
      align="center"
      justify={["center", "space-between", "flex-end", "flex-end"]}
      direction={["column", "row", "row", "row"]}
      pt={[4, 4, 0, 0]}
    >
      <Link href={"breh"}>
        <Text display="block">Map</Text>
      </Link>
      <Link href={"breh"}>
        <Text display="block">Stocks</Text>
      </Link>
    </Stack>
  );
};

export default MenuLink;
