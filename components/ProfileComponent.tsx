import Link from "next/link";

const ProfileComponent = ({ coach }) => {
  return (
    <div className="mt-20 flex flex-col items-center justify-center bg-red-700">
      <Link href="/" passHref>
        <button className="mt-2 mb-2 rounded border-2 bg-white py-1 px-2 hover:bg-blue-500">
          Back to all Coaches
        </button>
      </Link>
      <h1 className="text-4xl">The Profile Page of: {coach.name}</h1>
      <p className="mt-2">Phone:{coach.phone}</p>
      <p>Website:{coach.website}</p>
      <p>Email:{coach.email}</p>
      <p>Specialties:</p>
      <div className="flex w-4/12 justify-between">
        {coach.specialties?.map((skill) => {
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

export default ProfileComponent;
