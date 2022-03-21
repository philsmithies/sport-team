import prisma from "../../lib/prisma";
import ProfileComponent from "../../components/ProfilePage";
import UpdateCoach from "../../types/UpdateCoach";
import { GetServerSideProps, GetStaticProps } from "next";
import { ParsedUrlQuery } from "querystring";

interface Params extends ParsedUrlQuery {
  id: string;
}

const Coach = ({ coach }: UpdateCoach) => {
  return <ProfileComponent coach={coach} />;
};

export default Coach;

export const getStaticPaths = async () => {
  const coaches = await prisma.coach.findMany();

  // Get the paths we want to pre-render based on posts
  const paths = coaches.map((coach) => ({
    params: { id: String(coach.id) },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps = async (context) => {
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
