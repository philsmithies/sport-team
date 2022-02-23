export default interface FilterTypes {
  filterSports(): any;
  refetch(arg1: {
    orderBy: {
      id: string;
    }[];
  }): any;
  specialties: [
    specialty: {
      id: number;
      name: string;
    }
  ];
}
