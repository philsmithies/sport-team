import type { NextPage } from "next";
import { useQuery, useMutation } from "@apollo/client";
import Head from "next/head";
import {
  Typography,
  CircularProgress,
  Grid,
  Container,
  Button,
} from "@mui/material";
import { ALL_COACHES, CREATE_COACH } from "../graphql/coach";
import CoachInfoCard from "../components/CoachInfoCard";
import { useState } from "react";

const Home: NextPage = () => {
  const { data, error, loading, refetch } = useQuery(ALL_COACHES, {
    variables: { take: 50, orderBy: [{ name: "asc" }] },
  });
  const [user, setUser] = useState({});

  const handleOnChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const [createUser] = useMutation(CREATE_COACH, {
    refetchQueries: [ALL_COACHES, "Coaches"],
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    createUser({
      variables: {
        data: {
          ...user,
        },
      },
    });
  };

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
        <Button
          variant="contained"
          onClick={() => refetch({ orderBy: [{ name: "asc" }] })}
        >
          Order A-Z
        </Button>
        <Button
          variant="contained"
          onClick={() => refetch({ orderBy: [{ name: "desc" }] })}
        >
          Order Z-A
        </Button>
        <Typography variant="h4">All Coaches</Typography>
        {data?.coaches.map((coach) => (
          <CoachInfoCard coach={coach} key={coach.id} />
        ))}
      </Container>
    </>
  );
};

export default Home;
