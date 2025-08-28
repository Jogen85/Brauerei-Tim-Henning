import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

let builder: any = null;
if (projectId && dataset) {
  builder = imageUrlBuilder({ projectId, dataset } as any);
}

export const urlFor = (source: any) => (builder ? builder.image(source) : { url: () => "" });

