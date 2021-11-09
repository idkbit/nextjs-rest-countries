import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import CountryList from "../components/CountryList";
import Dropdown from "../components/Dropdown";
import Filter from "../components/Filter";
import Layout from "../components/Layout";
import { numberWithCommas } from "../utils";

export default function Home({ countryList }) {
  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <Layout>
        <Flex
          direction={{ base: "column", xl: "row" }}
          alignItems="flex-start"
          justifyContent="space-between"
          mb={10}>
          <Filter />
          <Dropdown />
        </Flex>
        <CountryList countryList={countryList} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=name,population,region,capital,flag,alpha3Code"
  );

  const countryList = await response.json();
  countryList.forEach(
    (country) => (country.population = numberWithCommas(country.population))
  );
  return {
    props: {
      countryList,
    },
  };
}
