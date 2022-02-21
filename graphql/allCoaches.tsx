import { gql } from "apollo-server-micro";

export const ALL_COACHES = gql`
  query Coaches($skip: Int) {
    coaches(skip: $skip) {
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
