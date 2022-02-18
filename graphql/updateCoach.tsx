import { gql } from "apollo-server-micro";

export default gql`
  mutation UpdateCoach(
    $data: CoachUpdateInput!
    $where: CoachWhereUniqueInput!
  ) {
    updateCoach(data: $data, where: $where) {
      email
      name
      phone
      website
      specialties {
        name
        id
      }
      /***
        * ! DRY Potentially Merge both updates
        */
    }
  }
`;
