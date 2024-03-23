
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "./src/types/data.graphql",
  generates: {
    "src/types/graphql.ts": {
      plugins: ["typescript", "typescript-resolvers"]
    },
    "src/types/graphqlRequest.ts": {
      plugins: ["typescript", "typescript-operations", "typescript-graphql-request"]
    },
  }
};

export default config;
