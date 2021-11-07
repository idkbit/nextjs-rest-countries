import { Box, Heading, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box
      py={3}
      as="header"
      backgroundColor={colorMode === "dark" ? "elementsDark" : "white"}
      onClick={toggleColorMode}>
      <Heading
        as="h1"
        px={{ base: 5, md: 10, lg: 20 }}
        fontSize={{ base: "xl", md: "2xl" }}>
        <Link href="/">
          <a>Where in the world?</a>
        </Link>
      </Heading>
    </Box>
  );
};

export default Header;
