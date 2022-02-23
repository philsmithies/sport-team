import { SpecialtyProps } from "./types";
import UpdateCoach from "../../../types/UpdateCoach";
import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { SINGLE_COACH } from "../../../graphql/coach";
import IconSwitch from "../../../utils/IconSwitch";
import {
  ALL_SPECIALTIES,
  REMOVE_SPECIALTY,
  UPDATE_SPECIALTIES,
} from "../../../graphql/specialty";
import { useState, useEffect } from "react";
import { Box, Chip, Container, Typography } from "@mui/material";

import { Specialty } from "@prisma/client";

const AddSpecialties = ({ coach }: UpdateCoach): JSX.Element => {
  const [filteredSpecialties, setFilteredSpecialties] = useState([]);
  const { data, error } = useQuery(ALL_SPECIALTIES);
  const id = coach.id;
  /**
   * TODO add error handling for mutation
   */
  const [updateSpecialty] = useMutation(UPDATE_SPECIALTIES, {
    refetchQueries: [
      {
        query: SINGLE_COACH,
        variables: {
          where: { id },
        },
      },
    ],
  });

  const handleClick = (specialtyId: number) => {
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
  };

  useEffect(() => {
    setFilteredSpecialties(
      data?.specialties.filter(
        ({ id: specialty1 }: SpecialtyProps) =>
          !coach.specialties.some(
            ({ id: specialty2 }) => specialty1 === specialty2
          )
      )
    );
  }, [data, coach]);

  if (error) {
    return <Typography variant="h4"> {error} </Typography>;
  }

  return (
    <Box sx={{ marginTop: 3 }}>
      {filteredSpecialties?.length > 0 && (
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Add Specialties
        </Typography>
      )}
      {filteredSpecialties?.map((specialty: Specialty) => (
        <Chip
          icon={IconSwitch(specialty.name)}
          key={specialty.id}
          label={specialty.name}
          component="a"
          variant="outlined"
          sx={{ height: 32 }}
          onClick={() => handleClick(specialty.id)}
        />
      ))}
    </Box>
  );
};

export default AddSpecialties;
