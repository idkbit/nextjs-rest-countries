import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppContext } from "../context/state";

const CountryList = ({ countryList }) => {
  const { filter, region: stateRegion } = useAppContext();
  const [filtered, setFiltered] = useState([]);
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });
  const [hasMore, setHasMore] = useState(true);
  const [current, setCurrent] = useState(
    countryList.slice(count.prev, count.next)
  );

  useEffect(() => {
    if (!filter && stateRegion === "all") return;
    const timer = setTimeout(() => {
      if (stateRegion === "all") {
        setFiltered(
          countryList.filter((c) =>
            c.name.toLowerCase().includes(filter.toLowerCase())
          )
        );
      } else if (!filter && stateRegion !== "all") {
        setFiltered(countryList.filter((c) => c.region === stateRegion));
      } else {
        setFiltered(
          countryList.filter(
            (c) =>
              c.region === stateRegion &&
              c.name.toLowerCase().includes(filter.toLowerCase())
          )
        );
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [filter, stateRegion, countryList]);

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

  if (!filter && stateRegion === "all") {
    return (
      <Grid
        as={InfiniteScroll}
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        gridTemplateColumns={{
          base: "20rem",
          sm: "25rem",
          md: "repeat(2,20rem)",
          lg: "repeat(3, minmax(10rem,20rem))",
          xl: "repeat(4, minmax(10rem,20rem))",
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
  }

  if (!filtered.length) return <h2> No matches</h2>;

  return (
    <Grid
      as="main"
      gridTemplateColumns={{
        base: "20rem",
        sm: "25rem",
        md: "repeat(2,20rem)",
        lg: "repeat(3, minmax(10rem, 20rem))",
        xl: "repeat(4, minmax(10rem, 20rem))",
      }}
      gap={{ md: 6, lg: 8 }}
      rowGap={{ base: 4 }}
      columnGap={{ base: 4 }}>
      {filtered &&
        filtered.map(
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
