import { NextPage } from "next";
import Head from "next/head";
import CreateCoach from "../components/CreateCoach";

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sports Thieme: Create a Coach</title>
      </Head>
      <div>
        <CreateCoach />
      </div>
    </>
  );
};

export default Create;
