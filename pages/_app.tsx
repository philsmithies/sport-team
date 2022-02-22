import type { AppProps } from "next/app";
import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/cache";

import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import Head from "next/head";
import Layout from "../components/Layout";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <Head>
            <link
              rel="icon"
              href="https://pimage.sport-thieme.de/icon32/springer"
              type="image/png"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ApolloProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default MyApp;
