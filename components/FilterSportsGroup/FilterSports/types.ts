export default interface FilterSports {
  filteredTake: number;
  sportName: string;
  filterSports(arg1: {
    variables: {
      skip: number;
      take: number;
      where: {
        specialties: {
          some: {
            name: {
              equals: string;
            };
          };
        };
      };
    };
  }): any;
}
