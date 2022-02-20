import "../styles/globals.css";
import type { AppProps } from "next/app";
import { StyledEngineProvider, ThemeProvider } from "@mui/material";
import Head from "next/head";
import Layout from "../components/Layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: "http://localhost:3000/api",
    cache: new InMemoryCache(),
  });

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
