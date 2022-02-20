import { gql } from "apollo-server-micro";

export const ALL_COACHES = gql`
  query Coaches {
    coaches {
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
