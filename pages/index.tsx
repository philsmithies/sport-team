import type { NextPage } from "next";
import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import Head from "next/head";
import { Typography, CircularProgress, Grid, Container } from "@mui/material";
import {
  ALL_COACHES,
  CREATE_COACH,
  FILTER_SPECIALTIES,
} from "../graphql/coach";
import CoachInfoCard from "../components/CoachInfoCard";
import { useState } from "react";
import FilterSportsGroup from "../components/FilterSportsGroup";
import { ALL_SPECIALTIES } from "../graphql/specialty";
import React from "react";

const Home: NextPage = () => {
  const { data, error, loading, refetch } = useQuery(ALL_COACHES, {
    variables: { take: 50, orderBy: [{ id: "asc" }] },
  });

  const { data: allSpecialties } = useQuery(ALL_SPECIALTIES);

  const [
    filterSports,
    {
      data: filteredData,
      refetch: refetchFilteredData,
      loading: filteredLoading,
      error: filteredError,
    },
  ] = useLazyQuery(FILTER_SPECIALTIES, {
    variables: {
      where: { specialties: { some: { name: { equals: "Tennis" } } } },
    },
  });

  if (loading || filteredLoading)
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

  if (error || filteredError)
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
          Looks like there was a problem: {error?.message}
        </Typography>
      </Grid>
    );

  return (
    <>
      <Head>
        <title>Sports Thieme: The Coaches</title>
      </Head>
      <Container maxWidth="md" sx={{ marginTop: 5, marginBottom: 20 }}>
        <Typography variant="h4" sx={{ marginBottom: 4 }}>
          All Coaches
        </Typography>
        <FilterSportsGroup
          refetch={refetch}
          filterSports={filterSports}
          specialties={allSpecialties?.specialties}
        />

        {filteredData &&
          filteredData?.coaches.map((coach: any) => (
            <CoachInfoCard coach={coach} key={coach.id} />
          ))}
        {!filteredData &&
          data?.coaches.map((coach: any) => (
            <CoachInfoCard coach={coach} key={coach.id} />
          ))}
      </Container>
    </>
  );
};

export default Home;
