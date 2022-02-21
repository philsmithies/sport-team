import { favouritedCoachesVar } from "../lib/cache";
import {
  Grid,
  Box,
  Typography,
  Button,
  Avatar,
  Chip,
  Fab,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";

const AddToFavouritesButton = ({ coach }) => {
  const [hearted, setHearted] = useState(false);
  return (
    <div>
      <Fab
        aria-label="like"
        size="small"
        onClick={() => {
          setHearted(!hearted);
          favouritedCoachesVar([
            ...favouritedCoachesVar(),
            [coach.name, coach.id],
          ]);
        }}
      >
        {hearted ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}
      </Fab>
    </div>
  );
};

export default AddToFavouritesButton;
