#!/usr/bin/env node

const { join } = require("path");
const { writeFileSync } = require("fs");
const telescope = require("@cosmology/telescope").default;

const outPath = join(__dirname, "/../src");

telescope({
  protoDirs: [
    "protos/cosmos-sdk/proto",
    "protos/cosmos-proto/proto",
    "protos/protobuf",
    "protos/wasmd",
    "protos/ibc-go",
  ],
  outPath: outPath,
  options: {
    logLevel: 0,
    useSDKTypes: false,
    tsDisable: {
      disableAll: false,
    },
    eslintDisable: {
      disableAll: true,
    },
    bundle: {
      enabled: false,
    },
    interfaces: {
      enabled: false,
    },
    prototypes: {
      includePackageVar: true,
      strictNullCheckForPrototypeMethods: true,
      paginationDefaultFromPartial: true,
      addTypeUrlToObjects: true,
      addTypeUrlToDecoders: false,
      methods: {
        // There are users who need those functions. CosmJS does not need them directly.
        // See https://github.com/cosmos/cosmjs/pull/1329
        fromJSON: true,
        toJSON: true,
        fromAmino: false,
        toAmino: false,
        fromProto: false,
        toProto: false,
      },
      typingsFormat: {
        useDeepPartial: true,
        useExact: true,
        timestamp: "timestamp",
        duration: "duration",
        customTypes: {
          useCosmosSDKDec: false,
        },
        num64: "bigint",
      },
    },
    lcdClients: {
      enabled: false,
    },
    rpcClients: {
      enabled: true,
      inline: true,
      extensions: false,
      camelCase: false,
      enabledServices: ["Msg", "Query", "Service", "ReflectionService", "ABCIApplication"],
    },
    aminoEncoding: {
      enabled: false,
      useLegacyInlineEncoding: true,
    },
  },
}).then(
  () => {
    // Create index.ts
    const index_ts = `
    // Auto-generated, see scripts/codegen.js!

    // Exports we want to provide at the root of the "cosmjs-types" package

    export { DeepPartial, Exact } from "./helpers";
    `;
    writeFileSync(`${outPath}/index.ts`, index_ts);

    console.log("✨ All Done!");
  },
  (e) => {
    console.error(e);
    process.exit(1);
  },
);
