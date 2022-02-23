import { gql } from "apollo-server-micro";

export const GET_FAVOURITED_ITEMS = gql`
  query GetFavouritedItems {
    favouritedItems @client
  }
`;
