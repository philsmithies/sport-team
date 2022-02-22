import { gql } from "apollo-server-micro";

export const GET_FAVOURITED_ITEMS = gql`
  query GetFavouritedItems {
    favouritedItems @client
  }
`;

export default function DELETE_COACH(todosVar) {
  return (id: number) => {
    const allTodos = todosVar();
    const filteredTodos = allTodos.filter((todo) => todo.id !== id);
    todosVar(filteredTodos);
  };
}
