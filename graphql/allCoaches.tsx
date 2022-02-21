import { gql } from "apollo-server-micro";

export const ALL_COACHES = gql`
  query Coaches($take: Int, $orderBy: [CoachOrderByWithRelationInput!]) {
    coaches(take: $take, orderBy: $orderBy) {
      id
      email
      name
      phone
      website
      street
      streetNumber
      zip
      city
      specialties {
        id
        name
      }
    }
  }
`;
