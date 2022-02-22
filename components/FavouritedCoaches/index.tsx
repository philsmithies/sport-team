import { useReactiveVar } from "@apollo/client";
import { favouritedCoachesVar } from "../../lib/cache";
import { Typography, Container } from "@mui/material";
import CoachInfoCard from "../CoachInfoCard";

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
      {favouritedItems.length === 0 ? (
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          No favourited Coaches
        </Typography>
      ) : (
        <>
          {favouritedItems.map((coach) => (
            <CoachInfoCard coach={coach} key={coach.id} />
          ))}
        </>
      )}
    </Container>
  );
};

export default FavouritedCoaches;
