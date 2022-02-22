import prisma from "../../lib/prisma";
import ProfileComponent from "../../components/ProfilePage/ProfileDetails";
import Coach from "./types";
import { GetServerSideProps } from "next";

const Coach = ({ coach }: Coach) => {
  return <ProfileComponent coach={coach} />;
};

export default Coach;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  let id = parseInt(params.id);
  const coach = await prisma.coach.findUnique({
    where: { id },
    select: {
      id: true,
      email: true,
      name: true,
      phone: true,
      website: true,
      specialties: true,
    },
  });
  return {
    props: {
      coach,
    },
  };
};
