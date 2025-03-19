import Fastify from "fastify";
import mercurius from "mercurius";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import { decodeGlobalID } from "../shared/id.mjs";
import { NODE_RESOLVER_PORT } from "./config.mjs";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { parse } from "graphql";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Fastify();

const resolvers = {
  Query: {
    node: (_, { id }) => {
      const { type } = decodeGlobalID(id);
      return { __typename: type, id };
    },
    nodes: (_, { ids }) => {
      return ids.map((id) => {
        const { type } = decodeGlobalID(id);
        return { __typename: type, id };
      });
    },
    _entities: (_, { representations }) => {
      return representations.map((ref) => {
        // Since all our entities just need id, we can return the reference as is
        // The __typename is already included in the reference
        return ref;
      });
    },
  },
  Node: {
    __resolveType(obj) {
      return obj.__typename;
    },
  },
};

app.register(mercurius, {
  schema: buildSubgraphSchema([
    {
      typeDefs: parse(
        fs.readFileSync(join(__dirname, "schema.graphql"), "utf-8")
      ),
      resolvers,
    },
  ]),
  federationMetadata: true, // Enables Federation support
  graphiql: true,
});

export const startServer = async () => {
  try {
    await app.listen({ port: NODE_RESOLVER_PORT });
    console.log(
      `🚀 Node Resolver Service running at http://localhost:${NODE_RESOLVER_PORT}/graphql`
    );
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

// Only start the server if this file is run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  startServer();
}

export { app };
