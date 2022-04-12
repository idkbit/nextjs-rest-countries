import Details from "../components/Details";
import { numberWithCommas } from "../utils";
import { Box, Button, Text, useColorMode } from "@chakra-ui/react";
import Link from "next/link";
import Head from "next/head";
import Layout from "../components/Layout";

const Country = ({
  name,
  population,
  region,
  capital,
  borders,
  subregion,
  tld,
  currencies,
  languages,
  flags,
}) => {
  const { colorMode } = useColorMode();
  return (
    <>
      <Head>
        <title>{name.common} | Where in the world?</title>
      </Head>
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
            region={region}
            subregion={subregion}
            borders={borders}
            capital={capital}
            tld={tld}
            currencies={currencies}
            languages={languages}
            flags={flags}
          />
        </Box>
      </Layout>
    </>
  );
};

export default Country;

export async function getStaticPaths() {
  const response = await fetch("https://restcountries.com/v3/all?fields=cca3");
  const data = await response.json();
  const paths = data.map((c) => ({
    params: { country: c.cca3 },
  }));
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const response = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.country}`
  );
  const data = await response.json();
  data[0].population = numberWithCommas(data[0].population);
  const borderCodes = data[0].borders;
  if (borderCodes) {
    const requests = await borderCodes.map((code) =>
      fetch(`https://restcountries.com/v3.1/alpha/${code}`)
    );
    const responses = await Promise.all(requests);
    const neighbourCountries = await Promise.all(
      responses.map((response) => response.json())
    );
    const infoArray = Object.values(neighbourCountries);
    const newBordersArray = infoArray.map((country) => {
      return [country[0].name.common, country[0].cca3];
    });
    data[0].borders = newBordersArray;
  }

  return {
    props: {
      ...data[0],
    },
    revalidate: 3600 * 24,
  };
}
