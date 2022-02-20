import Link from "next/link";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { REMOVE_SPECIALTY } from "../../graphql/removeSpecialty";
import { ALL_SPECIALTIES } from "../../graphql/allSpecialties";
import { SINGLE_COACH } from "../../graphql/singleCoach";
import Router from "next/router";
import { Grid, Typography, Container, Button, Box, Chip } from "@mui/material";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";

const ProfileDetails = ({ coach }) => {
  const { error, data } = useQuery(SINGLE_COACH, {
    variables: { where: { id: coach.id } },
  });
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

  if (error)
    return (
      <Grid
        container
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "60vh",
        }}
      >
        <Typography variant="h1">
          Looks like there was a problem: {error.message}
        </Typography>
      </Grid>
    );

  return (
    <Container
      maxWidth="md"
      sx={{
        marginTop: 5,
        marginBottom: 20,
        border: 2,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Box>
        <Link href="/" passHref>
          <Button variant="contained" size="large" sx={{ maxWidth: 300 }}>
            Back to all Coaches
          </Button>
        </Link>
      </Box>
      <h1 className="text-4xl">Coach: {coach.name}</h1>
      <p className="mt-2">Phone:{coach.phone}</p>
      <p>Website:{coach.website}</p>
      <p>Email:{coach.email}</p>
      <p>Specialties:</p>
      <div className="flex w-4/12 justify-between">
        {data?.coach.specialties.map((specialty) => {
          return (
            <Chip
              icon={<SportsFootballIcon />}
              key={specialty.id}
              label={specialty.name}
              component="a"
              variant="outlined"
              sx={{ height: 32 }}
              onDelete={(e) => handleRemove(specialty.id)}
            />
          );
        })}
      </div>
    </Container>
  );
};

export default ProfileDetails;
