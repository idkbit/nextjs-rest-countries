import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppContext } from "../context/state";

const CountryList = ({ countryList }) => {
  const { filter } = useAppContext();
  const [filtered, setFiltered] = useState([]);
  const [count, setCount] = useState({
    prev: 0,
    next: 10,
  });

  useEffect(() => {
    if (!filter) return;
    const timer = setTimeout(
      () =>
        setFiltered(
          countryList.filter((c) =>
            c.name.toLowerCase().includes(filter.toLowerCase())
          )
        ),
      500
    );

    return () => {
      clearTimeout(timer);
    };
  }, [filter, countryList]);

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

  if (!filter) {
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

  if (!filtered.length) return <h1>shit</h1>;

  return (
    <Grid
      as={InfiniteScroll}
      dataLength={filtered.length}
      next={getMoreData}
      hasMore={hasMore}
      loader={<h4>Loading...</h4>}
      gridTemplateColumns={{
        base: "1fr",
        sm: "repeat(2,1fr)",
        md: "repeat(3,minmax(20rem, 30rem))",
        lg: "repeat(4, minmax(20rem, 30rem))",
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
