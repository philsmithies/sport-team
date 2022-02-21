import prisma from "../../lib/prisma";
import ProfileComponent from "../../components/ProfilePage/ProfileDetails";
import { useRouter } from "next/router";

const Coach = ({ coach }) => {
  return <ProfileComponent id={coach.id} />;
};

export default Coach;

export const getServerSideProps = async ({ params }) => {
  const id = parseInt(params.id);
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
