import Image from "next/image";
import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  useColorMode,
  Button,
  Flex,
} from "@chakra-ui/react";

const Details = ({
  name,
  nativeName,
  currencies,
  capital,
  borders,
  region,
  subregion,
  topLevelDomain,
  languages,
  population,
  flag,
}) => {
  const { colorMode } = useColorMode();
  const color = colorMode === "dark" ? "white" : "textLight";

  return (
    <Flex direction={{ base: "column", xl: "row" }}>
      <Box
        width={{ base: "100%", xl: "600px" }}
        height={{ base: "300px", md: "600px", xl: "400px" }}
        position="relative"
        mr={{ md: 14 }}>
        <Image
          style={{ boxShadow: "var(--chakra-shadows-base)" }}
          src={flag}
          layout="fill"
          alt={`${name} flag`}
          objectFit="contain"
          objectPosition="0 0"
        />
      </Box>
      <Box mt={{ base: 8, md: 0 }}>
        <Heading mb={8} color={color}>
          {name}
        </Heading>
        <Flex direction={{ base: "column", md: "row" }} css={{ gap: "2rem" }}>
          <Box>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Native Name:{" "}
              </Text>
              {nativeName}
            </Heading>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Population:{" "}
              </Text>
              {population}
            </Heading>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Region:{" "}
              </Text>
              {region}
            </Heading>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Sub Region:{" "}
              </Text>
              {subregion}
            </Heading>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Capital:{" "}
              </Text>
              {capital}
            </Heading>
          </Box>
          <Box mt={{ base: 8, md: 0 }}>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Top Level Domain:{" "}
              </Text>
              {topLevelDomain.join(", ")}
            </Heading>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Currencies:{" "}
              </Text>
              {currencies.map((c, index) => (
                <Text key={c.name} as="span">
                  {c.name}
                  {index < currencies.length - 1 && ", "}
                </Text>
              ))}
            </Heading>
            <Heading color={color} as="h3" fontSize="lg" fontWeight="300">
              <Text fontWeight="700" as="span">
                Languages:{" "}
              </Text>
              {languages.map((l, index) => (
                <Text key={l.name} as="span">
                  {l.name}
                  {index < languages.length - 1 && ", "}
                </Text>
              ))}
            </Heading>
          </Box>
        </Flex>
        {!borders && (
          <Heading color={color} mt={14} fontSize="lg" as="h3">
            {name} has no borders with other countries.
          </Heading>
        )}
        {borders && (
          <Flex
            mt={14}
            direction={{ base: "column", xl: "row" }}
            align={{ xl: "center" }}>
            <Heading color={color} mt={4} fontSize="lg" mr={4} as="h4">
              Border countries:{" "}
            </Heading>
            <Flex wrap="wrap">
              {borders.map((c) => (
                <Link passHref key={c} href={`/${c}`}>
                  <Button
                    padding="1rem 2rem"
                    fontWeight="300"
                    mr={4}
                    mt={4}
                    boxShadow="base"
                    color={color}
                    bgColor={colorMode === "dark" ? "elementsDark" : "white"}>
                    {c}
                  </Button>
                </Link>
              ))}
            </Flex>
          </Flex>
        )}
      </Box>
    </Flex>
  );
};

export default Details;
