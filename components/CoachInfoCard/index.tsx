import { CoachInfo } from "./types";
import Link from "next/link";
import { Grid, Box, Typography, Button, Avatar, Chip } from "@mui/material";
import AddToFavouritesButton from "./AddtoFavouritesButton";
import IconSwitch from "../../utils/IconSwitch";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";

const CoachInfoCard = ({
  coach,
  isHearted = false,
}: CoachInfo): JSX.Element => {
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
              backgroundColor: "secondary.main",
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
                    icon={IconSwitch(skill.name)}
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
