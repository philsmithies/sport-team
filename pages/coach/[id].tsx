import prisma from "../../lib/prisma";
import Link from "next/link";
import UpdateForm from "../../components/UpdateForm";
import ProfileComponent from "../../components/ProfileComponent";

const Coach = ({ coach }) => {
  return (
    <div className="container mx-auto">
      <ProfileComponent coach={coach} />
      <UpdateForm coach={coach} />
    </div>
  );
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
