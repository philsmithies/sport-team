export default interface FilterSports {
  sportName: string;
  filterSports(arg1: {
    variables: {
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
