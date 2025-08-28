import { defineField, defineType } from "sanity";

export default defineType({
  name: "event",
  title: "Verkaufstermin",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Titel", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title", maxLength: 96 } }),
    defineField({ name: "date", title: "Datum", type: "datetime", validation: r => r.required() }),
    defineField({ name: "timeFrom", title: "Uhrzeit von", type: "string" }),
    defineField({ name: "timeTo", title: "Uhrzeit bis", type: "string" }),
    defineField({ name: "location", title: "Ort/Adresse", type: "string" }),
    defineField({ name: "mapsUrl", title: "Google Maps URL", type: "url" }),
    defineField({ name: "beers", title: "Angebotene Biere", type: "array", of: [{ type: "reference", to: [{ type: "beer" }] }] }),
    defineField({ name: "note", title: "Hinweis", type: "text" }),
    defineField({ name: "status", title: "Status", type: "string", options: { list: [
      { title: "Geplant", value: "planned" },
      { title: "Abgesagt", value: "cancelled" }
    ]}, initialValue: "planned" })
  ]
});

