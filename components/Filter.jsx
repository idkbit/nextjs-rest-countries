import { Input, Box, useColorMode } from "@chakra-ui/react";
import { useAppContext } from "../context/state";

const Filter = () => {
  const { filter, setFilter } = useAppContext();
  const { colorMode } = useColorMode();
  return (
    <Box
      role="search"
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
      }}>
      <Input
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search for a country..."
        _placeholder={{
          color: colorMode === "dark" ? "white98" : "inputLight",
        }}
      />
    </Box>
  );
};

export default Filter;
