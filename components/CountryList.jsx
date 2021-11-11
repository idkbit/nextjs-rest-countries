import { useEffect, useState } from "react";
import { Grid } from "@chakra-ui/react";
import Card from "./Card";
import InfiniteScroll from "react-infinite-scroll-component";
import { useAppContext } from "../context/state";
import Link from "next/link";

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

  const compare = (a, b) =>
    a.name.common > b.name.common ? 1 : b.name.common > a.name.common ? -1 : 0;

  const allCountriesFilteredByName = countryList.sort(compare);

  useEffect(() => {
    if (!filter && stateRegion === "all") return;
    const timer = setTimeout(() => {
      if (stateRegion === "all") {
        setFiltered(
          countryList
            .filter((c) =>
              c.name.common.toLowerCase().includes(filter.toLowerCase())
            )
            .sort(compare)
        );
      } else if (!filter && stateRegion !== "all") {
        setFiltered(
          countryList.filter((c) => c.region === stateRegion).sort(compare)
        );
      } else {
        setFiltered(
          countryList
            .filter(
              (c) =>
                c.region === stateRegion &&
                c.name.official.toLowerCase().includes(filter.toLowerCase())
            )
            .sort(compare)
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

  const renderCards = ({ name, population, capital, region, flags, cca3 }) => (
    <Link href={`/${cca3}`} key={name.official + cca3}>
      <a>
        <Card
          name={name.common}
          population={population}
          capital={capital}
          region={region}
          imgSrc={flags.svg}
          code={cca3}
        />
      </a>
    </Link>
  );

  const gridColumns = {
    base: "20rem",
    sm: "25rem",
    md: "repeat(2,20rem)",
    lg: "repeat(3, 15rem)",
    xl: "repeat(4, minmax(13rem,18rem))",
    "2xl": "repeat(4, minmax(18rem,26rem))",
  };

  if (!filter && stateRegion === "all") {
    return (
      <Grid
        role="group"
        as={InfiniteScroll}
        dataLength={current.length}
        next={getMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
        gridTemplateColumns={gridColumns}
        placeContent={{ base: "center", lg: "start" }}
        gap={{ base: 14 }}>
        {current && allCountriesFilteredByName.map(renderCards)}
      </Grid>
    );
  }

  if (!filtered.length && stateRegion !== "all") return <h2> No matches</h2>;

  return (
    <Grid role="group" as="main" gridTemplateColumns={gridColumns} gap={14}>
      {filtered && filtered.map(renderCards)}
    </Grid>
  );
};

export default CountryList;
