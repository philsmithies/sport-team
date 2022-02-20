import type { NextPage } from "next";
import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import { Typography, CircularProgress, Grid, Container } from "@mui/material";
import { ALL_COACHES } from "../graphql/allCoaches";
import CreateCoach from "../components/CreateCoach";
import CoachInfoCard from "../components/CoachInfoCard";

const Home: NextPage = () => {
  const { data, error, loading } = useQuery(ALL_COACHES);

  if (loading)
    return (
      <Grid
        container
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress size={80} />
      </Grid>
    );

  if (error)
    return (
      <Grid
        container
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <Typography variant="h1">
          Looks like there was a problem: {error.message}
        </Typography>
      </Grid>
    );

  return (
    <>
      <Head>
        <title>Sports Thieme: The Coaches</title>
      </Head>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 20 }}>
        <Typography variant="h4">
          Displaying {data.coaches.length} Coaches
        </Typography>
        {data?.coaches.map((coach) => (
          <CoachInfoCard coach={coach} key={coach.id} />
        ))}
      </Container>
    </>
  );
};

export default Home;
