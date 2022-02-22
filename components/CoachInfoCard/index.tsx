import { CoachInfo } from "./types";
import Link from "next/link";
import { Grid, Box, Typography, Button, Avatar, Chip } from "@mui/material";
import AddToFavouritesButton from "./AddtoFavouritesButton";

/**
 * !export on the mui library won't let me chain the imports duplicated logic on renderSwitch
 */

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SportsFootball from "@mui/icons-material/SportsFootball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsIcon from "@mui/icons-material/Sports";
import PoolIcon from "@mui/icons-material/Pool";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

function renderSwitch(param: String) {
  switch (param) {
    case "Football":
      return <SportsSoccerIcon />;
    case "Basketball":
      return <SportsBasketballIcon />;
    case "Hockey":
      return <SportsHockeyIcon />;
    case "Soccer":
      return <SportsSoccerIcon />;
    case "Golf":
      return <GolfCourseIcon />;
    case "Tennis":
      return <SportsTennisIcon />;
    case "Swimming":
      return <PoolIcon />;
    case "Rugby":
      return <SportsFootball />;
    default:
      return <SportsIcon />;
  }
}

const CoachInfoCard = ({ isHearted, coach }: CoachInfo) => {
  return (
    <>
      <Grid
        container
        sx={{
          border: 1,
          borderRadius: 5,
          minHeight: 120,
          marginTop: 5,
          marginBottom: 5,
          paddingRight: 3,
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
              marginLeft: 3,
            }}
            alt="profile photo placeholder"
            variant="circular"
          >
            <AccountCircleIcon />
          </Avatar>
          <Box sx={{ marginLeft: 2, marginRight: 2 }}>
            <Typography>{coach.name}</Typography>
            <Link href={`mailto:${coach.email}`} passHref>
              <EmailIcon color="secondary" />
            </Link>
            <Link href={`tel:${coach.phone}`} passHref>
              <PhoneIcon color="primary" className="link-hover" />
            </Link>
            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                justifyContent: "center",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <Typography variant="body2" sx={{ marginRight: 1 }}>
                Specialties:
              </Typography>
              {coach.specialties.map((skill) => {
                return (
                  <Chip
                    icon={renderSwitch(skill.name)}
                    key={skill.id}
                    label={skill.name}
                    component="a"
                    variant="outlined"
                    clickable
                    sx={{ height: 32 }}
                  />
                );
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
            <Button variant="contained" size="large" sx={{ marginRight: 1 }}>
              View Coach
            </Button>
          </Link>
          <AddToFavouritesButton coach={coach} isHearted={isHearted} />
        </Grid>
      </Grid>
    </>
  );
};

export default CoachInfoCard;
