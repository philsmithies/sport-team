import { gql } from "apollo-server-micro";

export const ALL_SPECIALTIES = gql`
  query Query {
    specialties {
      id
      name
    }
  }
`;
