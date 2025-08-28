import { defineField, defineType } from "sanity";

export default defineType({
  name: "site",
  title: "Seitenkonfiguration",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Seitentitel", type: "string" }),
    defineField({ name: "heroSlogan", title: "Hero Slogan", type: "string" }),
    defineField({ name: "heroCtaLabel", title: "Hero CTA Label", type: "string" }),
    defineField({ name: "heroCtaHref", title: "Hero CTA Link", type: "string" }),
    defineField({ name: "heroVideo", title: "Hero Video", type: "object", fields: [
      { name: "url", title: "Video URL", type: "url" },
      { name: "poster", title: "Posterbild", type: "image" }
    ]}),
    defineField({ name: "contactEmail", title: "Kontakt E-Mail Empfänger", type: "string" })
  ]
});

