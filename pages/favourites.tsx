import Head from "next/head";
import { Container, Typography } from "@mui/material";
import FavouritedCoaches from "../components/FavouritedCoaches";

const Favourites = () => {
  return (
    <>
      <Head>
        <title>Sports Thieme: Favourite Coaches</title>
      </Head>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 20 }}>
        <Typography variant="h4">Favourited Coaches</Typography>
        <FavouritedCoaches />
      </Container>
    </>
  );
};

export default Favourites;
