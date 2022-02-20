import { gql } from "apollo-server-micro";

export const CREATE_COACH = gql`
  mutation CreateCoach($data: CoachCreateInput!) {
    createCoach(data: $data) {
      email
      name
      phone
      website
    }
  }
`;
