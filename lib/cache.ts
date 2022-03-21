import { ApolloClient, InMemoryCache } from "@apollo/client";
import { makeVar } from "@apollo/client";
import { offsetLimitPagination } from "@apollo/client/utilities";

export const favouritedCoachesVar = makeVar([] as any);

export const client = new ApolloClient({
  uri: "https://sport-team.vercel.app/api",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          coaches: {
            keyArgs: false,
            // Concatenate the incoming list items with
            // the existing list items.
            merge(existing = [], incoming) {
              return [...existing, ...incoming];
            },
          },
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
