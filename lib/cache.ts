import { ApolloClient, InMemoryCache } from "@apollo/client";
import { makeVar } from "@apollo/client";

export const favouritedCoachesVar = makeVar([]);

export const client = new ApolloClient({
  uri: "http://localhost:3000/api",
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
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
