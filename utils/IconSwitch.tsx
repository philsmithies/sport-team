import SportsFootball from "@mui/icons-material/SportsFootball";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import SportsHockeyIcon from "@mui/icons-material/SportsHockey";
import GolfCourseIcon from "@mui/icons-material/GolfCourse";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import SportsIcon from "@mui/icons-material/Sports";
import PoolIcon from "@mui/icons-material/Pool";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";

const IconSwitch = (param: String) => {
  switch (param) {
    case "Football":
      return <SportsSoccerIcon />;
    case "Basketball":
      return <SportsBasketballIcon />;
    case "Baseball":
      return <SportsBaseballIcon />;
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
};

export default IconSwitch;
