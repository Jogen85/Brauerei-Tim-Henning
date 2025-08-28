import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./sanity/schema";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET as string;

export default defineConfig({
  basePath: "/studio",
  name: "brauereiStudio",
  title: "Brauerei Studio",
  projectId,
  dataset,
  schema: { types: schemaTypes },
  plugins: [structureTool()]
});

