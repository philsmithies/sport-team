import { gql } from "apollo-server-micro";

export const ALL_SPECIALTIES = gql`
  query Query {
    specialties {
      id
      name
    }
  }
`;

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
