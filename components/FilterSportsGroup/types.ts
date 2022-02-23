export default interface FilterTypes {
  filterSports(): any;
  specialties: [
    specialty: {
      id: number;
      name: string;
    }
  ];
  refetch(
    orderBy: {
      id: string;
    }[]
  ): any;
}
