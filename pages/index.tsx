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
  Typography,
  CircularProgress,
  Grid,
  Container,
  Button,
} from "@mui/material";

const Home: NextPage = () => {
  const [take, setTake] = useState<number>(20);
  const [loadingMore, setLoadingMore] = useState<boolean>(false);
  const { data, error, loading, refetch, fetchMore } = useQuery(
    ALL_COACHES_AND_SPECIALTIES,
    {
      variables: { skip: 0, take, orderBy: [{ id: "asc" }] },
    }
  );

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
          specialties={data?.specialties}
        />

        {filteredData &&
          filteredData?.coaches.map((coach) => (
            <CoachInfoCard isHearted={false} coach={coach} key={coach.id} />
          ))}

        {!filteredData && (
          <div>
            {data?.coaches.map((coach) => (
              <CoachInfoCard isHearted={false} coach={coach} key={coach.id} />
            ))}
            <Button
              variant="contained"
              onClick={() => {
                const currentLength = data.coaches.length;
                setLoadingMore(true);
                fetchMore({
                  variables: {
                    offset: currentLength,
                    take,
                  },
                }).then((fetchMoreResult) => {
                  setTake(
                    currentLength + fetchMoreResult.data["coaches"].length
                  );
                  setLoadingMore(false);
                });
              }}
            >
              {!loadingMore ? "Fetch more" : "Loading....."}
            </Button>
          </div>
        )}
      </Container>
    </>
  );
};

export default Home;
