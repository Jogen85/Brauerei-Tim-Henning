import groq from "groq";

export const siteQuery = groq`*[_type == "site"][0]{
  title, heroSlogan, heroCtaLabel, heroCtaHref, heroVideo{url, poster},
  contactEmail
}`;

export const allBeersQuery = groq`*[_type == "beer"]|order(name asc){
  _id, name, slug, style, abv, ibu, og, special[], availableNow, category, 
  "image": image.asset->url,
  short
}`;

export const beerBySlugQuery = groq`*[_type == "beer" && slug.current == $slug][0]{
  _id, name, slug, style, abv, ibu, og, special[], availableNow, category,
  "image": image.asset->url, short, description
}`;

export const upcomingEventsQuery = groq`*[_type == "event" && date >= now()]|order(date asc){
  _id, title, date, timeFrom, timeTo, location, mapsUrl, note, status,
  beers[]->{_id, name, slug}
}`;
