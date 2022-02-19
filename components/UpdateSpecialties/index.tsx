import AllSpecialties from "./AllSpecialties";

const UpdateSpecialties = ({ coach }) => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20">
      <h1 className="text-4xl">Add Specialties</h1>
      <AllSpecialties coach={coach} />
    </div>
  );
};

export default UpdateSpecialties;
