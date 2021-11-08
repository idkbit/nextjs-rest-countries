import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useAppContext } from "../context/state";

const Dropdown = () => {
  const { region, setRegion } = useAppContext();
  const buttonText =
    region === "all"
      ? "Filter by Region"
      : region === "africa"
      ? "Africa"
      : region === "america"
      ? "America"
      : region === "asia"
      ? "Asia"
      : region === "europe"
      ? "Europe"
      : "Oceania";
  return (
    <Menu id="menu" isLazy>
      <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
        {buttonText}
      </MenuButton>
      <MenuList>
        {region !== "all" && (
          <MenuItem onClick={() => setRegion("all")}>All regions</MenuItem>
        )}
        <MenuItem onClick={() => setRegion("africa")}>Africa</MenuItem>
        <MenuItem onClick={() => setRegion("america")}>America</MenuItem>
        <MenuItem onClick={() => setRegion("asia")}>Asia</MenuItem>
        <MenuItem onClick={() => setRegion("europe")}>Europe</MenuItem>
        <MenuItem onClick={() => setRegion("oceania")}>Oceania</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
