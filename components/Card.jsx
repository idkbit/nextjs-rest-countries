import { Box, Heading, Text, useColorMode } from "@chakra-ui/react";
import Image from "next/image";

const Card = ({ imgSrc, name, population, region, capital }) => {
  const { colorMode } = useColorMode();
  return (
    <Box
      backgroundColor={colorMode === "dark" ? "elementsDark" : "white"}
      borderRadius="5px"
      overflow="hidden">
      <Box height="50%" position="relative" mb={{ base: 8 }}>
        <Image
          src={imgSrc}
          alt={`${name} flag`}
          layout="responsive"
          objectFit="contain"
          objectPosition="0 0"
          width={320}
          height={240}
        />
      </Box>
      <Box
        padding={6}
        backgroundColor={colorMode === "dark" ? "elementsDark" : "white"}>
        <Heading
          fontWeight={800}
          fontSize="xl"
          color={colorMode === "dark" ? "white" : "textLight"}>
          {name}
        </Heading>
        <Box mt={6} color={colorMode === "dark" ? "white" : "textLight"}>
          <Heading as="h3" fontSize="md" fontWeight={300}>
            <Text fontWeight={800} as="span">
              Population:{" "}
            </Text>
            {population}
          </Heading>
          <Heading as="h3" fontSize="md" fontWeight={300}>
            <Text fontWeight={800} as="span">
              Region:{" "}
            </Text>
            {region}
          </Heading>
          <Heading as="h3" fontSize="md" fontWeight={300}>
            <Text fontWeight={800} as="span">
              Capital:{" "}
            </Text>
            {capital}
          </Heading>
        </Box>
      </Box>
    </Box>
  );
};

export default Card;
