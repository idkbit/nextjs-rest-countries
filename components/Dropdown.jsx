import { Menu, MenuList, MenuItem, MenuButton, Button } from "@chakra-ui/react";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
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
        <MenuItem
          icon={region === "Africa" && <CheckIcon />}
          onClick={() => setRegion("Africa")}>
          Africa
        </MenuItem>
        <MenuItem
          icon={region === "America" && <CheckIcon />}
          onClick={() => setRegion("America")}>
          America
        </MenuItem>
        <MenuItem
          icon={region === "Asia" && <CheckIcon />}
          onClick={() => setRegion("Asia")}>
          Asia
        </MenuItem>
        <MenuItem
          icon={region === "Europe" && <CheckIcon />}
          onClick={() => setRegion("Europe")}>
          Europe
        </MenuItem>
        <MenuItem
          icon={region === "Oceania" && <CheckIcon />}
          onClick={() => setRegion("Oceania")}>
          Oceania
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
