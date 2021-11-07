import { useState } from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";

const CountryList = ({ countryList }) => {
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });

  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(
    countryList.slice(count.prev, count.next)
  );
  const getMoreData = () => {
    if (current.length === countryList.length) {
      setHasMore(false);
      return;
    }

    setTimeout(() => {
      setCurrent(
        current.concat(countryList.slice(count.prev + 10, count.next + 10))
      );
    }, 500);
    setCount((prevState) => ({
      prev: prevState.prev + 10,
      next: prevState.next + 10,
    }));
  };

  return (
    <Grid
      as={InfiniteScroll}
      dataLength={current.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      gridTemplateColumns={{
        base: "1fr",
        sm: "repeat(2,1fr)",
        md: "repeat(3,1fr)",
        lg: "repeat(4, 1fr)",
      }}
      gap={{ md: 6, lg: 8 }}
      rowGap={{ base: 4 }}
      columnGap={{ base: 4 }}>
      {current &&
        current.map(
          ({ name, population, capital, region, flag, alpha3Code }) => (
            <Card
              key={name + alpha3Code}
              name={name}
              population={population}
              capital={capital}
              region={region}
              imgSrc={flag}
              code={alpha3Code}
            />
          )
        )}
    </Grid>
  );
};

export default CountryList;
