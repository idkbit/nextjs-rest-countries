import { ChakraProvider } from "@chakra-ui/react";
import Header from "../components/Header";
import { AppWrapper } from "../context/state";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <AppWrapper>
        <Component {...pageProps} />
      </AppWrapper>
    </ChakraProvider>
  );
}

export default MyApp;
