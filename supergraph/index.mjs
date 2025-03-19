import { parse } from "graphql";
import {
  composeServices,
  compositionHasErrors,
} from "@theguild/federation-composition";
import { readFileSync, writeFileSync } from "fs";
import { BUSINESS_SERVICE_PORT } from "../subgraphs/business/config.mjs";
import { NODE_RESOLVER_PORT } from "../subgraphs/node/config.mjs";

// Configuration for each service
const SERVICES = [
  {
    name: "business-service",
    schemaPath: "./subgraphs/business/schema.graphql",
    port: BUSINESS_SERVICE_PORT,
  },
  {
    name: "node-resolver-service",
    schemaPath: "./subgraphs/node/schema.graphql",
    port: NODE_RESOLVER_PORT,
  },
];

// Create service configurations for composition
const serviceConfigs = SERVICES.map(({ name, schemaPath, port }) => ({
  name,
  typeDefs: parse(readFileSync(schemaPath, "utf-8")),
  url: `http://localhost:${port}/graphql`,
}));

const result = composeServices(serviceConfigs);

if (compositionHasErrors(result)) {
  console.error(result.errors);
} else {
  writeFileSync("./supergraph.graphql", result.supergraphSdl);
  console.log("Supergraph SDL has been saved to supergraph.graphql");
}
