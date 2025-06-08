import { defineConfig } from "eslint/config";
import base from "@casaub0n/eslint-config-yaml";

/**
 * only for pnpm-workspace.yaml
 */
export default defineConfig([...base]);
