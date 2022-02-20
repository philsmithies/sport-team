import { gql } from "apollo-server-micro";

export const SINGLE_COACH = gql`
  query Query($where: CoachWhereUniqueInput!) {
    coach(where: $where) {
      id
      email
      name
      phone
      website
      specialties {
        id
        name
      }
    }
  }
`;