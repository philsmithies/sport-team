import { Chip } from "@mui/material";

/**
 * !export on the mui library won't let me chain the imports
 */

import SportsFootball from "@mui/icons-material/SportsFootball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsIcon from "@mui/icons-material/Sports";
import PoolIcon from "@mui/icons-material/Pool";

const FilterSports = ({ filterSports, sportName }) => {
  function renderSwitch(param) {
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

  return (
    <div>
      <Chip
        icon={renderSwitch(sportName)}
        label={sportName}
        component="a"
        variant="outlined"
        clickable
        sx={{ height: 32 }}
        onClick={() =>
          filterSports({
            variables: {
              where: {
                specialties: { some: { name: { equals: sportName } } },
              },
            },
          })
        }
      />
    </div>
  );
};

export default FilterSports;
