import { defineConfig } from "astro/config";
// Eventually, replace this import with the official one - we're using a
// patched version for now.
// import deno from "@astrojs/deno";
import deno from "deno-astro-adapter";
import { add } from "https://x.nest.land/ramda@0.27.0/source/index.js";

console.log('This works', add(1,2));

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: deno(),
});
