import Head from "next/head";
import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import FavouritedCoaches from "../components/FavouritedCoaches";

const Favourites: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sport Team: Favourite Coaches</title>
      </Head>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 20 }}>
        <Typography variant="h4">Favourited Coaches</Typography>
        <FavouritedCoaches />
      </Container>
    </>
  );
};

export default Favourites;
