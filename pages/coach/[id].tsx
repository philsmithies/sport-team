import prisma from "../../lib/prisma";
import Link from "next/link";
import UpdateForm from "../../components/ProfilePage/UpdateForm";
import ProfileComponent from "../../components/ProfilePage/ProfileDetails";
import AddSpecialties from "../../components/ProfilePage/AddSpecialties";

const Coach = ({ coach }) => {
  return (
    <div className="container mx-auto h-screen">
      <ProfileComponent coach={coach} />
      <UpdateForm coach={coach} />
      <AddSpecialties coach={coach} />
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
