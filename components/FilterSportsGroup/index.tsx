import FilterSports from "./FilterSports";
import { Box, Button, Container, Typography } from "@mui/material";

const FilterSportsGroup = ({ filterSports, refetch, specialties }) => {
  return (
    <Container
      sx={{ border: 0.5, borderRadius: 5, boxShadow: 2, marginBottom: 5 }}
    >
      <Typography variant="h6" sx={{ marginTop: 2 }}>
        Filters
      </Typography>
      <Box sx={{ marginY: 2 }}>
        <Button
          variant="contained"
          onClick={() => {
            refetch({ orderBy: [{ id: "asc" }] });
          }}
          size="small"
          sx={{ marginRight: 2 }}
        >
          Order A-Z
        </Button>
        <Button
          variant="contained"
          onClick={() => refetch({ orderBy: [{ id: "desc" }] })}
          size="small"
        >
          Order Z-A
        </Button>
      </Box>
      <Box sx={{ marginY: 2 }}>
        {specialties?.map((specialty) => (
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
