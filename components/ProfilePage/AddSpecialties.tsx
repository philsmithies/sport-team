import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { UPDATE_SPECIALTIES } from "../../graphql/updateSpecialties";
import { ALL_SPECIALTIES } from "../../graphql/allSpecialties";
import Router from "next/router";
import { useState, useEffect } from "react";

const AddSpecialties = ({ coach }) => {
  const [filteredSpecialties, setFilteredSpecialties] = useState([]);
  const { data, error, loading } = useQuery(ALL_SPECIALTIES);
  const id = coach.id;
  /**
   * TODO add error handling for mutation
   */
  const [updateSpecialty] = useMutation(UPDATE_SPECIALTIES, {
    onCompleted: () => console.log("nice one"),
  });

  const handleClick = (specialtyId) => {
    try {
      updateSpecialty({
        variables: {
          where: { id: coach.id },
          data: {
            specialties: { connect: { id: specialtyId } },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
    Router.reload();
  };

  useEffect(() => {
    setFilteredSpecialties(
      data?.specialties.filter(
        ({ id: specialty1 }) =>
          !coach.specialties.some(
            ({ id: specialty2 }) => specialty1 === specialty2
          )
      )
    );
  }, [data, coach]);

  console.log(filteredSpecialties);

  if (error) {
    return <h1> {error} </h1>;
  }

  return (
    <div className="flex w-full flex-col items-center justify-center py-20">
      <h1 className="text-4xl">Add Specialties</h1>
      <div className="mt-4 flex">
        {filteredSpecialties?.map((specialty) => (
          <p
            key={specialty.id}
            className="w-min rounded border-2 border-red-700 bg-white py-1 px-2 hover:cursor-pointer hover:bg-slate-400"
            onClick={(e) => handleClick(specialty.id)}
          >
            {specialty.name}
          </p>
        ))}
      </div>
    </div>
  );
};

export default AddSpecialties;
