import Details from "../components/Details";
import { numberWithCommas } from "../utils";
import { Box, Button, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import Layout from "../components/Layout";

const Country = ({
  name,
  population,
  region,
  capital,
  borders,
  subregion,
  topLevelDomain,
  currencies,
  languages,
  nativeName,
  flag,
}) => {
  const { colorMode } = useColorMode();
  return (
    <Layout>
      <Box display="flex" flexDirection="column" alignItems="flex-start">
        <Link href="/" passHref>
          <Button
            color={colorMode === "dark" ? "white" : "textLight"}
            bgColor={colorMode === "dark" ? "elementsDark" : "white"}
            boxShadow="md"
            padding="1rem 2rem"
            mb={14}>
            <Text as="span" mr={2}>
              &larr;
            </Text>{" "}
            Back
          </Button>
        </Link>
        <Details
          name={name}
          population={population}
          nativeName={nativeName}
          region={region}
          subregion={subregion}
          borders={borders}
          capital={capital}
          topLevelDomain={topLevelDomain}
          currencies={currencies}
          languages={languages}
          flag={flag}
        />
      </Box>
    </Layout>
  );
};

export default Country;

export async function getStaticPaths() {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=alpha3Code"
  );
  const data = await response.json();
  const paths = data.map((c) => ({
    params: { country: c.alpha3Code },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://restcountries.com/v2/alpha/${params.country}`
  );
  const data = await response.json();
  data.population = numberWithCommas(data.population);
  return {
    props: {
      ...data,
    },
  };
}
