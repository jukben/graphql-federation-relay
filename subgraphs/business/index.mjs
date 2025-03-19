import Fastify from "fastify";
import mercurius from "mercurius";
import fs from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";
import resolvers from "./resolvers.mjs";
import { BUSINESS_SERVICE_PORT } from "./config.mjs";
import { buildSubgraphSchema } from "@apollo/subgraph";
import { parse } from "graphql";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = Fastify();

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
    await app.listen({ port: BUSINESS_SERVICE_PORT });
    console.log(
      `🚀 Business Service running at http://localhost:${BUSINESS_SERVICE_PORT}/graphql`
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
