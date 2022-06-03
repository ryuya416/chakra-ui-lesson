import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { LoginUserProvider } from "../providers/LoginUserProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <LoginUserProvider>
        <Component {...pageProps} />
      </LoginUserProvider>
    </ChakraProvider>
  );
}

export default MyApp;
