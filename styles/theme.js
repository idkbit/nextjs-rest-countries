import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
    useSystemColorMode: "true",
  },
  fonts: {
    body: "Nunito Sans",
    heading: "Nunito Sans",
  },
  colors: {
    white: "hsl(0, 0%, 100%)",
    bgDark: "hsl(207, 26%, 17%)",
    elementsDark: "hsl(209, 23%, 22%)",
    white98: "hsl(0, 0%, 98%)",
    inputLight: "hsl(0, 0%, 52%)",
    textLight: "hsl(200, 15%, 8%)",
  },
});

export default theme;
