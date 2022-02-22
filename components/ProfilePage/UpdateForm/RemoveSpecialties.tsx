import { useQuery } from "@apollo/client";
import { useMutation } from "@apollo/react-hooks";
import { SINGLE_COACH } from "../../../graphql/coach";
import {
  ALL_SPECIALTIES,
  REMOVE_SPECIALTY,
  UPDATE_SPECIALTIES,
} from "../../../graphql/specialty";
import { useState, useEffect } from "react";
import { Box, Chip, Container, Typography } from "@mui/material";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";

const RemoveSpecialties = ({ coach }) => {
  const {
    data: profile,
    error,
    loading,
  } = useQuery(SINGLE_COACH, {
    variables: {
      where: { id: coach.id },
    },
  });

  const [removeSpecialty, { loading: removeLoading }] = useMutation(
    REMOVE_SPECIALTY,
    {
      refetchQueries: [
        {
          query: SINGLE_COACH,
          variables: {
            where: { id: coach.id },
          },
        },
      ],
    }
  );

  const handleRemove = (specialtyId) => {
    try {
      removeSpecialty({
        variables: {
          where: { id: coach.id },
          data: {
            specialties: { disconnect: { id: specialtyId } },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box>
      {profile.coach.specialties?.length > 0 && (
        <Typography variant="h6" sx={{ marginBottom: 2 }}>
          Remove Specialties
        </Typography>
      )}
      {profile.coach.specialties?.map((specialty) => {
        return (
          <Chip
            icon={<SportsFootballIcon />}
            key={specialty.id}
            label={specialty.name}
            component="a"
            variant="outlined"
            sx={{ height: 32, marginRight: 0.3 }}
            onDelete={(e) => handleRemove(specialty.id)}
          />
        );
      })}
    </Box>
  );
};

export default RemoveSpecialties;
