import { Box, Heading, useColorMode, Button } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      boxShadow="md"
      py={3}
      as="header"
      backgroundColor={colorMode === "dark" ? "elementsDark" : "white"}
      display="flex"
      justifyContent="space-between"
      px={{ base: 5, md: 10, lg: 20 }}>
      <Heading as="h1" fontSize={{ base: "xl", md: "2xl" }}>
        <Link href="/">
          <a>Where in the world?</a>
        </Link>
      </Heading>
      <Button
        bgColor="transparent"
        onClick={toggleColorMode}
        aria-label="toggle color theme.">
        {colorMode === "dark" ? (
          <MoonIcon boxShadow="base" mr={4} />
        ) : (
          <SunIcon boxShadow="base" mr={4} />
        )}
        Dark Mode
      </Button>
    </Box>
  );
};

export default Header;
