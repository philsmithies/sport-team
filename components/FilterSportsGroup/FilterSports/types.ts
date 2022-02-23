export default interface FilterSports {
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
