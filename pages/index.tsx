import React from "react";
import { useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { useQuery, useLazyQuery } from "@apollo/client";
import {
  ALL_COACHES_AND_SPECIALTIES,
  FILTER_SPECIALTIES,
} from "../graphql/coach";
import CoachInfoCard from "../components/CoachInfoCard";
import FilterSportsGroup from "../components/FilterSportsGroup";

import {
  Box,
  Typography,
  CircularProgress,
  Grid,
  Container,
  Button,
} from "@mui/material";
import SelectedCoach from "../types/SelectedCoach";

const Home: NextPage = () => {
  const [take, setTake] = useState(15);
  const [filteredTake, setFilteredTake] = useState(15);
  const [loadingMore, setLoadingMore] = useState(false);
  const { data, error, loading, refetch, fetchMore } = useQuery(
    ALL_COACHES_AND_SPECIALTIES,
    {
      variables: { skip: 0, take, orderBy: [{ id: "asc" }] },
    }
  );

  async function updateFeed() {
    const currentLength = data.coaches.length;
    await fetchMore({
      variables: {
        offset: currentLength,
        take,
      },
    }).then(() => {
      setTake(currentLength + take);
    });
  }

  const [
    filterSports,
    {
      data: filteredData,
      refetch: refetchFilteredData,
      loading: filteredLoading,
      error: filteredError,
      fetchMore: fetchMoreFilteredData,
    },
  ] = useLazyQuery(FILTER_SPECIALTIES, {
    variables: {
      where: {
        skip: 0,
        take: filteredTake,
        specialties: { some: { name: { equals: "Tennis" } } },
      },
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
          specialties={data?.specialties}
        />

        {filteredData && (
          <>
            {filteredData?.coaches.map((coach: SelectedCoach) => (
              <CoachInfoCard isHearted={false} coach={coach} key={coach.id} />
            ))}
          </>
        )}

        {!filteredData && (
          <>
            {data?.coaches.map((coach: SelectedCoach) => (
              <CoachInfoCard isHearted={false} coach={coach} key={coach.id} />
            ))}
            <Container sx={{ display: "flex", justifyContent: "center" }}>
              <Button size="large" variant="outlined" onClick={updateFeed}>
                Fetch More Coaches...
              </Button>
            </Container>
          </>
        )}
        <Button size="large" variant="outlined" onClick={updateFeed}>
          More Clicks...
        </Button>
      </Container>
    </>
  );
};

export default Home;
