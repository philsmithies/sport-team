import { gql } from "apollo-server-micro";

export const ALL_COACHES = gql`
  query Coaches {
    coaches {
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
