import prisma from "../../lib/prisma";
import Link from "next/link";

const Coach = ({ coach }) => {
  return (
    <div className="container mx-auto">
      <div className="mt-20 flex h-72 flex-col items-center justify-center bg-red-700">
        <Link href="/" passHref>
          <button className="mt-2 mb-2 rounded border-2 bg-white py-1 px-2 hover:bg-blue-500">
            Back to all Coaches
          </button>
        </Link>
        <h1 className="text-4xl">The Profile Page of: {coach.name}</h1>
        <p className="mt-2">Phone:{coach.phone}</p>
        <p>Website:{coach.website}</p>
        <p>Specialties:</p>
        {coach.specialties.map((skill) => {
          return (
            <p
              key={skill.id}
              className="mt-2 rounded border-2 bg-white py-1 px-2"
            >
              {skill.name}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Coach;

export const getServerSideProps = async ({ params }) => {
  const id = parseInt(params.id);
  console.log(id);
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
