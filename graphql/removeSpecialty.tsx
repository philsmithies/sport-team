import { gql } from "apollo-server-micro";

export const REMOVE_SPECIALTY = gql`
  mutation UpdateCoach(
    $data: CoachUpdateInput!
    $where: CoachWhereUniqueInput!
  ) {
    updateCoach(data: $data, where: $where) {
      id
    }
  }
`;
