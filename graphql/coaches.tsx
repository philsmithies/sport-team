import { gql } from "apollo-server-micro";

export default gql`
  query coaches {
    coaches {
      name
      email
    }
  }
`;
