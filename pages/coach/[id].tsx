import prisma from "../../lib/prisma";
import Link from "next/link";
import UpdateForm from "../../components/UpdateForm";
import ProfileComponent from "../../components/ProfileComponent";
import UpdateSpecialties from "../../components/UpdateSpecialties";

const Coach = ({ coach }) => {
  return (
    <div className="container mx-auto h-screen">
      <ProfileComponent coach={coach} />
      <UpdateForm coach={coach} />
      <UpdateSpecialties coach={coach} />
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
