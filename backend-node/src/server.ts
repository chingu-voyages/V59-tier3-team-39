import "dotenv/config";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { typeDefs } from "./schema/typeDefs";
import { resolvers } from "./schema/resolvers";

const server = new ApolloServer({ typeDefs, resolvers });

const port = parseInt(process.env.PORT || "4000", 10);

startStandaloneServer(server, { listen: { port } }).then(({ url }) => {
  console.log(`GraphQL server running at ${url}`);
});
