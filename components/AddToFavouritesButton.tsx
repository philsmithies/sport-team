import { favouritedCoachesVar } from "../lib/cache";
import { Button } from "@mui/material";

const AddToFavouritesButton = ({ coach }) => {
  return (
    <div>
      <Button
        onClick={() =>
          favouritedCoachesVar([
            ...favouritedCoachesVar(),
            [coach.name, coach.id],
          ])
        }
      >
        Add to Favourites
      </Button>
    </div>
  );
};

export default AddToFavouritesButton;
