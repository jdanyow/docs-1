const { existsSync } = require("fs");
const fs = require("fs/promises");
const path = require("path");
const chalk = require("chalk");

// Checks that the pre-build actions have been run

function exitWithError(error) {
  console.error(chalk.redBright(`[ERROR] ${error}`));
  console.warn(
    chalk.yellowBright(
      "[WARN] You must run 'npm run local' before you can start the site."
    )
  );
  process.exit(1);
}

async function run() {
  // Check bundle.json exist
  const bundleJsonPath = path.resolve(
    __dirname,
    "../src/components/bundles.json"
  );
  if (!existsSync(bundleJsonPath)) {
    return exitWithError("Bundles have not been synced.");
  }

  console.warn(
    chalk.yellowBright(
      "[WARN] Using cached local content, to update cache run 'npm run local'"
    )
  );
}

run().catch(console.error);
