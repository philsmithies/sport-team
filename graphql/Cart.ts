import { gql } from "apollo-server-micro";

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
