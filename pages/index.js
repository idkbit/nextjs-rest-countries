import { Box } from "@chakra-ui/react";
import Head from "next/head";
import CountryList from "../components/CountryList";
import Dropdown from "../components/Dropdown";
import Filter from "../components/Filter";
import Layout from "../components/Layout";

export default function Home({ countryList }) {
  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <Layout>
        <Box display="flex" mb={10}>
          <Filter />
          <Dropdown />
        </Box>
        <CountryList countryList={countryList} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=name,population,region,capital,flag,alpha3Code"
  );

  //this function i copied from stackoverflow
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

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
