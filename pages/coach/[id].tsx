import prisma from "../../lib/prisma";
import ProfileComponent from "../../components/ProfilePage";
import UpdateCoach from "../../types/UpdateCoach";
import { GetServerSideProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

const Coach = ({ coach }: UpdateCoach) => {
  return <ProfileComponent coach={coach} />;
};

export default Coach;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const params = context.params as Params;
  const coach = await prisma.coach.findUnique({
    where: {
      id: parseInt(params!.id),
    },
  });
  return {
    props: {
      coach,
    },
  };
};
