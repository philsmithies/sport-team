import { useState } from "react";
import { favouritedCoachesVar } from "../../../lib/cache";
import { Fab } from "@mui/material";
import CoachFavourite from "./types";

import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

const AddToFavouritesButton = ({
  isHearted = false,
  coach,
}: CoachFavourite) => {
  const [hearted, setHearted] = useState(isHearted);
  return (
    <div>
      {!hearted ? (
        <Fab
          aria-label="like"
          size="small"
          onClick={() => {
            setHearted(true);
            favouritedCoachesVar([...favouritedCoachesVar(), coach]);
            console.log(favouritedCoachesVar());
          }}
        >
          <FavoriteBorderIcon />
        </Fab>
      ) : (
        <Fab
          aria-label="like"
          size="small"
          onClick={() => {
            setHearted(false);
            const allCoaches = favouritedCoachesVar();
            const filteredCoaches = allCoaches.filter(
              (filteredCoach: { [x: string]: number }) =>
                filteredCoach["id"] !== coach.id
            );
            favouritedCoachesVar(filteredCoaches);
          }}
        >
          <FavoriteIcon color="secondary" />
        </Fab>
      )}
    </div>
  );
};

export default AddToFavouritesButton;
