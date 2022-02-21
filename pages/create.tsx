import { NextPage } from "next";
import Head from "next/head";
import CreateCoachForm from "../components/CreateCoachForm";

const Create: NextPage = () => {
  return (
    <>
      <Head>
        <title>Sports Thieme: Create a Coach</title>
      </Head>
      <div>
        <CreateCoachForm />
      </div>
    </>
  );
};

export default Create;
