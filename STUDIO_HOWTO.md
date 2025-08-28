# Admin‑Anleitung: Sanity Studio & Checkliste

## Zugriff & Voraussetzungen
- Studio öffnen: `http://localhost:3000/studio` (Produktion: entsprechend Ihrer Domain).
- Benötigte Variablen in `.env.local`: `NEXT_PUBLIC_SANITY_PROJECT_ID`, `NEXT_PUBLIC_SANITY_DATASET`.
- Inhalte erscheinen auf der Website unter `app/(site)/…` (z. B. `/biere`, `/termine`).

## Inhalte pflegen
- Seitenkonfiguration (Dokumenttyp `site`)
  - Hero‑Slogan (kurzer Claim), CTA‑Label/Link (z. B. „Jetzt Biere entdecken“ → `/biere`).
  - Kontakt‑E‑Mail (Empfang für Formular). Optional: Hero‑Video‑URL + Posterbild.
  - Speichern → „Publish“.
- Biere (Dokumenttyp `beer`)
  - Pflicht: Name, Kurzbeschreibung, Stil, Alkohol (%). Optional: IBU, Stammwürze, Besonderheiten, Kategorie.
  - Bild hochladen (≥1200 px, WebP/AVIF empfohlen), „Jetzt erhältlich“ setzen wenn aktuell.
  - Slug automatisch übernehmen, „Publish“.
- Verkaufstermine (Dokumenttyp `event`)
  - Datum/Uhrzeit (Zukunft), Ort/Adresse, optional Maps‑URL.
  - „Angebotene Biere“: 3–4 passende Biere referenzieren.
  - Status „Geplant“/„Abgesagt“, „Publish“. Vergangene Termine blendet die Seite aus.

## Medienempfehlungen
- Hero‑Video: 10–20 s Loop, stumm, < 12 MB; Posterbild setzen (verbessert Ladezeit).
- Bilder: Querformat für Karten, 4:3/16:9, 1200–1600 px, WebP/AVIF.

## Kontaktformular prüfen
- `.env.local`: `CONTACT_TO_EMAIL=info@brauerei-hennings.de`, `CONTACT_FROM_EMAIL=noreply@brauerei-hennings.de`, `RESEND_API_KEY` (oder SMTP) + Turnstile Keys setzen.
- In `/kontakt`: Vorbestellung (Termin wählen, Mengen setzen) & allgemeine Anfrage testen. E‑Mail‑Eingang + Kunden‑Kopie prüfen.
 - Später: Resend‑Domain verifizieren (DKIM/SPF) oder SMTP‑Absender zulassen; Testsendung erneut prüfen.

## Checkliste vor Go‑Live
- [ ] Impressum & Datenschutzerklärung final.
- [ ] Mind. 1 `site`‑Dokument mit Slogan/CTA/Kontakt‑E‑Mail.
- [ ] 6–12 Biere angelegt, Bilder optimiert, Slugs geprüft.
- [ ] 2–4 zukünftige Termine mit verknüpften Bieren.
- [ ] Formular: Versand funktioniert, Anti‑Spam aktiv (Turnstile), Erfolg/Fehlertexte sinnvoll.
- [ ] E‑Mail: `CONTACT_TO_EMAIL=info@…` und `CONTACT_FROM_EMAIL=noreply@…` gesetzt.
- [ ] Resend‑Domain verifiziert (DKIM/SPF) oder SMTP‑Fallback konfiguriert.
- [ ] Domain/SSL aktiv, Environment‑Variablen auf Prod gesetzt.
- [ ] Startseite: „Nächster Verkaufstag“ zeigt korrekten Eintrag.
- [ ] Mobil‑Ansicht geprüft (iOS/Android), Performance ok (Lighthouse ohne „rot“).

## Troubleshooting
- Inhalte fehlen? Publiziert? Dataset korrekt? Cache (ISR) nach wenigen Minuten aktualisiert.
- E‑Mails kommen nicht an? Resend‑Domain verifizieren oder SMTP prüfen; Spam‑Ordner kontrollieren.
