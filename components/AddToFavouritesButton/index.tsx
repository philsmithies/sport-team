import { favouritedCoachesVar } from "../../lib/cache";
import { Fab } from "@mui/material";
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
            const filteredTodos = allCoaches.filter(
              (todo) => todo.id !== coach.id
            );
            favouritedCoachesVar(filteredTodos);
            console.log("the coach has been removed ", favouritedCoachesVar());
          }}
        >
          <FavoriteIcon color="secondary" />
        </Fab>
      )}
    </div>
  );
};

export default AddToFavouritesButton;
