import Image from "next/image";

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
  flag,
}) => {
  return (
    <div>
      {name} {nativeName} {region} {population}
      <Image src={flag} width={400} height={300} />
    </div>
  );
};

export default Details;
