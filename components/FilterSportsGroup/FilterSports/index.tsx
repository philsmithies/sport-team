import FilterSports from "./types";
import { Chip } from "@mui/material";
import IconSwitch from "../../../utils/IconSwitch";

const FilterSports = ({
  filterSports,
  sportName,
}: FilterSports): JSX.Element => {
  return (
    <>
      <Chip
        icon={IconSwitch(sportName)}
        label={sportName}
        component="a"
        variant="outlined"
        clickable
        sx={{ height: 32 }}
        onClick={() =>
          filterSports({
            variables: {
              take: 15,
              skip: 0,
              where: {
                specialties: { some: { name: { equals: sportName } } },
              },
            },
          })
        }
      />
    </>
  );
};

export default FilterSports;
