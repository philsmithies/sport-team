import { useReactiveVar } from "@apollo/client";
import Link from "next/link";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { favouritedCoachesVar } from "../../lib/cache";
import { Typography, Container } from "@mui/material";
import CoachInfoCard from "../CoachInfoCard";

const FavouritedCoaches = (): JSX.Element => {
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
        <>
          <Typography variant="h6" sx={{ marginY: 2 }}>
            No favourited coaches currently. Would you like to add one?
          </Typography>
          <Link href="/" passHref>
            <Button
              variant="contained"
              size="large"
              sx={{
                alignSelf: "flex-start",
              }}
            >
              <ArrowBackIcon sx={{ marginRight: 1 }} />
              Back
            </Button>
          </Link>
        </>
      ) : (
        <>
          {favouritedItems.map((coach: any) => (
            <CoachInfoCard coach={coach} key={coach.id} isHearted={true} />
          ))}
        </>
      )}
    </Container>
  );
};

export default FavouritedCoaches;
