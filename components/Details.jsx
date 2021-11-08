const Details = ({
  name,
  nativeName,
  currencies,
  capital,
  borders,
  region,
  subregion,
  topLevelDomain,
  languages,
  population,
}) => {
  return (
    <div>
      {name} {nativeName} {region} {population}
    </div>
  );
};

export default Details;
