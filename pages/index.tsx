import type { NextPage } from "next";
// import { Box, Container, Typography } from "@mui/material";
import { gql, useQuery } from "@apollo/client";
import Head from "next/head";

const AllCoachesQuery = gql`
  query coaches {
    coaches {
      id
      name
      email
      phone
    }
  }
`;

const Home: NextPage = () => {
  // gql useQuery import
  const { data, error, loading } = useQuery(AllCoachesQuery);

  if (loading) return <p>Loading...........</p>;

  if (error) return <p>Looks like there was a problem: {error.message}</p>;

  return (
    <>
      <Head>
        <title>Sports Thieme: The Coaches</title>
      </Head>
      <>
        <div className="flex flex-col items-center bg-red-700 p-10">
          <h1 className="self-center pb-10 text-2xl text-yellow-500 underline">
            All the coaches
          </h1>
          {data.coaches.map((coach) => (
            <div
              key={coach.id}
              className="w-2/5 max-w-4xl border-2 border-red-600 bg-red-300 p-3"
            >
              <div>
                <p className="font-bold">{coach.name}</p>
              </div>
              <div>
                <p>{coach.email}</p>
                <p>{coach.phone}</p>
              </div>
            </div>
          ))}
        </div>
      </>
    </>
  );
};

export default Home;
