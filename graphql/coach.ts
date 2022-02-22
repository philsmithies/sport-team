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

export const SINGLE_COACH = gql`
  query Coaches($where: CoachWhereUniqueInput!) {
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

export const UPDATE_COACH = gql`
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
    }
  }
`;

export const FILTER_SPECIALTIES = gql`
  query Coaches($where: CoachWhereInput) {
    coaches(where: $where) {
      id
      email
      name
      phone
      specialties {
        id
        name
      }
    }
  }
`;
