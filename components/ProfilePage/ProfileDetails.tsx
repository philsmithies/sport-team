import Link from "next/link";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { REMOVE_SPECIALTY } from "../../graphql/removeSpecialty";
import { ALL_SPECIALTIES } from "../../graphql/allSpecialties";
import { SINGLE_COACH } from "../../graphql/singleCoach";
import Router from "next/router";
import { Typography, Container, Button, Box, Chip } from "@mui/material";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";
import Image from "next/image";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import UpdateForm from "./UpdateForm";

const ProfileDetails = ({ coach }) => {
  const [removeSpecialty] = useMutation(REMOVE_SPECIALTY);
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
    Router.reload();
  };

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 5,
        marginBottom: 20,
        border: 2,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: 640,
        }}
      >
        <Button
          variant="contained"
          size="large"
          sx={{
            marginTop: 4,
            marginBottom: 4,
            alignSelf: "flex-start",
          }}
        >
          <ArrowBackIcon sx={{ marginRight: 1 }} />
          Back
        </Button>
        <Image
          src="/images/profile-default.png"
          alt="me"
          layout="fixed"
          width="150"
          height="150"
          className="profile-image"
        />
        <Typography variant="h5" sx={{ marginTop: 3, marginBottom: 2 }}>
          Coach: {coach.name}
        </Typography>
        <Typography variant="body1">Phone:</Typography>{" "}
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          {coach.phone}
        </Typography>
        {coach.website && (
          <>
            <Typography variant="body1">Website:</Typography>
            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              {coach.website}
            </Typography>{" "}
          </>
        )}
        <Typography variant="body1">Email:</Typography>
        <Typography variant="body2" sx={{ marginBottom: 2 }}>
          {coach.email}
        </Typography>{" "}
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          Specialties:
        </Typography>
        <Box>
          {coach.specialties?.map((specialty) => {
            return (
              <Chip
                icon={<SportsFootballIcon />}
                key={specialty.id}
                label={specialty.name}
                component="a"
                variant="outlined"
                sx={{ height: 32, marginRight: 0.3 }}
              />
            );
          })}
        </Box>
        <UpdateForm coach={coach} />
      </Container>
    </Container>
  );
};

export default ProfileDetails;
