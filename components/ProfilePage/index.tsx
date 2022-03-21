import UpdateCoach from "../../types/UpdateCoach";
import { Specialty } from "@prisma/client";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { useMutation, useQuery } from "@apollo/react-hooks";
import { SINGLE_COACH } from "../../graphql/coach";
import { REMOVE_SPECIALTY } from "../../graphql/specialty";
import UpdateForm from "./UpdateForm";
import {
  Typography,
  Container,
  Button,
  Box,
  Chip,
  CircularProgress,
  Grid,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconSwitch from "../../utils/IconSwitch";

const ProfileDetails = ({ coach }: UpdateCoach): JSX.Element => {
  let id = coach.id;
  const {
    data: profile,
    error,
    loading,
  } = useQuery(SINGLE_COACH, {
    variables: {
      where: { id },
    },
  });

  const [removeSpecialty, { loading: removeLoading }] = useMutation(
    REMOVE_SPECIALTY,
    {
      refetchQueries: [
        {
          query: SINGLE_COACH,
          variables: {
            where: { id },
          },
        },
      ],
    }
  );

  const handleRemove = (specialtyId: number) => {
    try {
      removeSpecialty({
        variables: {
          where: { id },
          data: {
            specialties: { disconnect: { id: specialtyId } },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  if (loading)
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
        <CircularProgress size={80} />
      </Grid>
    );

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
    <>
      <Head>
        <title>Sport Team: {profile.coach.name}</title>
      </Head>
      <Container
        maxWidth="sm"
        sx={{
          marginTop: 5,
          marginBottom: 20,
          border: 0.5,
          borderRadius: 5,
          boxShadow: 3,
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href="/" passHref>
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
          </Link>
          <Image
            src="/images/profile-default.png"
            alt="me"
            layout="fixed"
            width="150"
            height="150"
            className="profile-image"
          />
          <Typography variant="h5" sx={{ marginTop: 3, marginBottom: 2 }}>
            Coach: {profile.coach.name}
          </Typography>
          <Typography variant="body1">Phone:</Typography>{" "}
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            {profile.coach.phone}
          </Typography>
          <Typography variant="body1">Email:</Typography>
          <Typography variant="body2" sx={{ marginBottom: 2 }}>
            {profile.coach.email}
          </Typography>{" "}
          {profile.coach.website && (
            <>
              <Typography variant="body1">Website:</Typography>
              <Typography variant="body2" sx={{ marginBottom: 2 }}>
                {profile.coach.website}
              </Typography>{" "}
            </>
          )}
          {profile.coach.specialties?.length > 0 && (
            <Typography variant="body1" sx={{ marginBottom: 1 }}>
              Specialties:
            </Typography>
          )}
          <Box>
            {profile.coach.specialties?.map((specialty: Specialty) => {
              return (
                <Chip
                  icon={IconSwitch(specialty.name)}
                  key={specialty.id}
                  label={specialty.name}
                  component="a"
                  variant="outlined"
                  sx={{ height: 32, marginRight: 0.3 }}
                />
              );
            })}
          </Box>
          <UpdateForm coach={profile.coach} />
        </Container>
      </Container>
    </>
  );
};

export default ProfileDetails;
