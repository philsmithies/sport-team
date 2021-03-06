import FilterSports from "./FilterSports";
import { Box, Button, Container, Typography } from "@mui/material";
import { Specialty } from "@prisma/client";
import FilterTypes from "./types";

const FilterSportsGroup = ({
  filterSports,
  refetch,
  specialties,
}: FilterTypes): JSX.Element => {
  return (
    <Container
      sx={{
        border: 0.5,
        borderRadius: 5,
        boxShadow: 2,
        marginBottom: 5,
      }}
    >
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Filters
      </Typography>
      <Box sx={{ marginY: 2 }}>
        <Typography variant="body2" sx={{ marginBottom: 1 }}>
          Sort:
        </Typography>
        <Button
          variant="contained"
          onClick={() => refetch({ orderBy: [{ id: "asc" }] })}
          size="small"
          sx={{ marginRight: 2 }}
        >
          ID (ascending)
        </Button>
        <Button
          variant="contained"
          onClick={() => {
            refetch({ orderBy: [{ id: "desc" }] });
          }}
          size="small"
        >
          ID (descending)
        </Button>
      </Box>
      <Box sx={{ marginY: 2 }}>
        {specialties?.map((specialty: Specialty) => (
          <FilterSports
            key={specialty.id}
            filterSports={filterSports}
            sportName={specialty.name}
          />
        ))}
      </Box>
    </Container>
  );
};

export default FilterSportsGroup;
