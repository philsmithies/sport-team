import { gql, useReactiveVar } from "@apollo/client";
import { favouritedCoachesVar } from "../lib/cache";
import Link from "next/link";
import { Typography, Container, Button, Box } from "@mui/material";

const GET_FAVOURITED_ITEMS = gql`
  query GetFavouritedItems {
    favouritedItems @client
  }
`;

const FavouritedCoaches = () => {
  const favouritedItems = useReactiveVar(favouritedCoachesVar);
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Typography variant="h4">My Favourites</Typography>
      {favouritedItems.length === 0 ? (
        <p>No favourited Coaches</p>
      ) : (
        <>
          {favouritedItems.map((coach) => (
            <Box key={coach.id} sx={{ display: "inline" }}>
              <Typography variant="body1" key={coach.id}>
                {coach}
              </Typography>
              <Link href={`/coach/${coach[1]}`} passHref>
                <Button variant="contained" size="small">
                  View Coach
                </Button>
              </Link>
            </Box>
          ))}
        </>
      )}
    </Container>
  );
};

export default FavouritedCoaches;
