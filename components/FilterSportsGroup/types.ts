export default interface FilterTypes {
  filteredTake: number;
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
