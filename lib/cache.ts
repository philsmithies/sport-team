import { ApolloClient, InMemoryCache } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const favouritedCoachesVar = makeVar([] as any);

export const client = new ApolloClient({
  uri: "http://localhost:3000/api",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          coaches: offsetLimitPagination(),
          favouritedItems: {
            read() {
              return favouritedCoachesVar();
            },
          },
        },
      },
    },
  }),
});
