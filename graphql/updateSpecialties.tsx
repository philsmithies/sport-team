import { gql } from "apollo-server-micro";

export const UPDATE_SPECIALTIES = gql`
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
