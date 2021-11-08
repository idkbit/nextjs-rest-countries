import Details from "../components/Details";

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
}) => {
  return (
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
    />
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

  return {
    props: {
      ...data,
    },
  };
}
