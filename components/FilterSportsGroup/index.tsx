import FilterSports from "./FilterSports";

const FilterSportsGroup = ({ filterSports, specialties }) => {
  return (
    <div>
      {specialties?.map((specialty) => (
        <FilterSports
          key={specialty.id}
          filterSports={filterSports}
          sportName={specialty.name}
        />
      ))}
    </div>
  );
};

export default FilterSportsGroup;
