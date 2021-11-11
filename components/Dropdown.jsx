import {
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import { ChevronDownIcon, CheckIcon } from "@chakra-ui/icons";
import { useAppContext } from "../context/state";

const Dropdown = () => {
  const { colorMode } = useColorMode();
  const { region, setRegion } = useAppContext();
  const buttonText =
    region === "all"
      ? "Filter by Region"
      : region === "Africa"
      ? "Africa"
      : region === "Americas"
      ? "America"
      : region === "Asia"
      ? "Asia"
      : region === "Europe"
      ? "Europe"
      : "Oceania";
  return (
    <Menu id="menu" isLazy>
      <MenuButton
        role="dropdownmenu"
        mt={{ base: 8, lg: 0 }}
        boxShadow="base"
        bgColor={colorMode === "dark" ? "elementsDark" : "white"}
        pl={6}
        as={Button}
        rightIcon={<ChevronDownIcon />}>
        {buttonText}
      </MenuButton>
      <MenuList>
        {region !== "all" && (
          <MenuItem
            bgColor={colorMode === "dark" ? "elementsDark" : "white"}
            pl={6}
            onClick={() => setRegion("all")}>
            All regions
          </MenuItem>
        )}
        <MenuItem
          bgColor={colorMode === "dark" ? "elementsDark" : "white"}
          pl={6}
          icon={region === "Africa" && <CheckIcon />}
          onClick={() => setRegion("Africa")}>
          Africa
        </MenuItem>
        <MenuItem
          bgColor={colorMode === "dark" ? "elementsDark" : "white"}
          pl={6}
          icon={region === "America" && <CheckIcon />}
          onClick={() => setRegion("Americas")}>
          America
        </MenuItem>
        <MenuItem
          bgColor={colorMode === "dark" ? "elementsDark" : "white"}
          pl={6}
          icon={region === "Asia" && <CheckIcon />}
          onClick={() => setRegion("Asia")}>
          Asia
        </MenuItem>
        <MenuItem
          bgColor={colorMode === "dark" ? "elementsDark" : "white"}
          pl={6}
          icon={region === "Europe" && <CheckIcon />}
          onClick={() => setRegion("Europe")}>
          Europe
        </MenuItem>
        <MenuItem
          bgColor={colorMode === "dark" ? "elementsDark" : "white"}
          pl={6}
          icon={region === "Oceania" && <CheckIcon />}
          onClick={() => setRegion("Oceania")}>
          Oceania
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Dropdown;
