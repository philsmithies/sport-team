import { gql } from "apollo-server-micro";

export default gql`
  mutation UpdateCoach(
    $data: CoachUpdateInput!
    $where: CoachWhereUniqueInput!
  ) {
    updateCoach(data: $data, where: $where) {
      specialties {
        name
        id
      }
      /***
        * !for adding id to the specialties we might not need to use _count
        */
      _count {
        specialties
      }
    }
  }
`;
