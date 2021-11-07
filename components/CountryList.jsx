import { Grid } from "@chakra-ui/react";
import Card from "./Card";

const CountryList = ({ countryList }) => {
  const renderedCountries = countryList.map(
    ({ name, population, capital, region, flag }) => (
      <Card
        key={name}
        name={name}
        population={population}
        capital={capital}
        region={region}
        imgSrc={flag}
      />
    )
  );

  return (
    <Grid
      gridTemplateColumns={{
        base: "1fr",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={{ md: 6, lg: 8 }}
      rowGap={{ base: 4 }}
      columnGap={{ base: 4 }}
      as="main">
      {renderedCountries}
    </Grid>
  );
};

export default CountryList;
