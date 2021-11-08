import { Box, useColorMode } from "@chakra-ui/react";

const Layout = ({ children }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      px={{ base: 5, md: 10, lg: 20 }}
      maxWidth={1920}
      minHeight="94.6vh"
      mx="auto"
      pt={14}
      backgroundColor={colorMode === "dark" ? "bgDark" : "white98"}>
      {children}
    </Box>
  );
};

export default Layout;
