import { favouritedCoachesVar } from "../../lib/cache";
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

const AddToFavouritesButton = ({ isHearted = false, coach }) => {
  const [hearted, setHearted] = useState(isHearted);
  return (
    <div>
      {!hearted ? (
        <Fab
          aria-label="like"
          size="small"
          onClick={() => {
            setHearted(!hearted);
            favouritedCoachesVar([...favouritedCoachesVar(), coach]);
            console.log(favouritedCoachesVar());
          }}
        >
          {hearted ? (
            <FavoriteIcon color="secondary" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </Fab>
      ) : (
        <Fab aria-label="like" size="small" disabled>
          <FavoriteIcon color="secondary" />
        </Fab>
      )}
    </div>
  );
};

export default AddToFavouritesButton;
