import { defineConfig } from "tsup";

export default defineConfig((option) => ({
	format: ["cjs", "esm", "iife"],
	entry: ["./src/index.ts"],
	dts: true,
	shims: true,
	skipNodeModulesBundle: true,
	clean: true,
	minify: "terser",
	globalName: "XKnife",
}));
