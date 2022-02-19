import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_SPECIALTIES } from "../../graphql/updateSpecialties";
import { ALL_SPECIALTIES } from "../../graphql/allSpecialties";

const AllSpecialties = ({ coach }) => {
  const { data, error, loading } = useQuery(ALL_SPECIALTIES);
  /**
   * TODO add error handling for mutation
   */
  const [updateSpecialty] = useMutation(UPDATE_SPECIALTIES);

  const handleClick = (specialtyId) => {
    updateSpecialty({
      variables: {
        where: { id: coach.id },
        data: {
          specialties: { connect: { id: specialtyId } },
        },
      },
    });
  };

  const filteredSpecialties = data?.specialties.filter(
    ({ id: specialty1 }) =>
      !coach.specialties.some(({ id: specialty2 }) => specialty1 === specialty2)
  );

  console.log("the results are ", filteredSpecialties);

  if (error) {
    return <h1> {error} </h1>;
  }

  return (
    <div className="mt-4 flex">
      {data?.specialties.map((specialty) => (
        <p
          key={specialty.id}
          className="w-min rounded border-2 border-red-700 bg-white py-1 px-2 hover:cursor-pointer hover:bg-slate-400"
          onClick={(e) => handleClick(specialty.id)}
        >
          {specialty.name}
        </p>
      ))}
    </div>
  );
};

export default AllSpecialties;
