import Link from "next/link";
import { Grid, Box, Typography, Button, Avatar, Chip } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SportsFootballIcon from "@mui/icons-material/SportsFootball";

const CoachInfoCard = ({ coach }) => {
  const SelectIcon = ({ skill }) => {
    return (
      <Chip
        icon={
          skill.name == "Rugby" ? <SportsFootballIcon /> : <AccountCircleIcon />
        }
        key={skill.id}
        label={skill.name}
        component="a"
        variant="outlined"
        clickable
        sx={{ height: 32 }}
      />
    );
  };

  return (
    <>
      <Grid
        container
        spacing={1}
        sx={{
          border: 1,
          borderRadius: 5,
          minHeight: 120,
          marginTop: 5,
          marginBottom: 5,
        }}
      >
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            flexGrow: 1,
          }}
        >
          <Avatar
            sx={{
              bgcolor: "secondary.main",
              width: 50,
              height: 50,
              marginLeft: 5,
            }}
            alt="profile photo placeholder"
            variant="circular"
          >
            <AccountCircleIcon />
          </Avatar>
          <Box sx={{ marginLeft: 2, marginRight: 2 }}>
            <Typography>{coach.name}</Typography>
            <Link href={`mailto:${coach.email}`} passHref>
              <Typography variant="body2" sx={{ color: "primary.main" }}>
                Email
              </Typography>
            </Link>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body2">Specialties:</Typography>
              {coach.specialties.map((skill) => {
                return <SelectIcon key={skill.id} skill={skill} />;
              })}
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          xs={3}
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Link href={`/coach/${coach.id}`} passHref>
            <Button variant="contained" size="large">
              View Coach
            </Button>
          </Link>
        </Grid>
      </Grid>
    </>
  );
};

export default CoachInfoCard;
