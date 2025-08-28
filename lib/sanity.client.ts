import { createClient } from "next-sanity";

type SimpleClient = { fetch: (q: any, params?: Record<string, any>) => Promise<any> };

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

let client: SimpleClient;
if (projectId && dataset) {
  client = createClient({ projectId, dataset, apiVersion: "2025-01-01", useCdn: true }) as any;
} else {
  client = { fetch: async () => [] };
}

export const sanityClient = client;

