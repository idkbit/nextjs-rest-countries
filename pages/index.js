import Head from "next/head";
import CountryList from "../components/CountryList";
import Layout from "../components/Layout";

export default function Home({ countryList }) {
  return (
    <>
      <Head>
        <title>Where in the world?</title>
      </Head>
      <Layout>
        <CountryList countryList={countryList} />
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const response = await fetch(
    "https://restcountries.com/v2/all?fields=name,population,region,capital,flag"
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
