import { gql } from "apollo-server-micro";

export default gql`
  mutation UpdateCoach(
    $data: CoachUpdateInput!
    $where: CoachWhereUniqueInput!
  ) {
    updateCoach(data: $data, where: $where) {
      specialties {
        id
        name
      }
    }
  }
`;
