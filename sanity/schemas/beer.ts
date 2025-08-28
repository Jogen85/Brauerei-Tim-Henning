import { defineField, defineType } from "sanity";

export default defineType({
  name: "beer",
  title: "Bier",
  type: "document",
  fields: [
    defineField({ name: "name", title: "Name", type: "string", validation: r => r.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "name", maxLength: 96 } }),
    defineField({ name: "short", title: "Kurzbeschreibung", type: "text" }),
    defineField({ name: "description", title: "Beschreibung (lang)", type: "array", of: [{ type: "block" }] }),
    defineField({ name: "style", title: "Stil", type: "string" }),
    defineField({ name: "abv", title: "Alkohol (% vol)", type: "number" }),
    defineField({ name: "og", title: "Stammwürze", type: "number" }),
    defineField({ name: "ibu", title: "IBU", type: "number" }),
    defineField({ name: "special", title: "Besonderheiten", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "category", title: "Kategorie", type: "string", options: { list: [
      { title: "Standard", value: "standard" },
      { title: "Saisonal", value: "seasonal" },
      { title: "Limitiert", value: "limited" }
    ]}}),
    defineField({ name: "availableNow", title: "Jetzt erhältlich", type: "boolean", initialValue: false }),
    defineField({ name: "image", title: "Bild", type: "image", options: { hotspot: true } })
  ]
});

