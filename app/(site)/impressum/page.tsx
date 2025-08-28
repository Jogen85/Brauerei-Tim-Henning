export default function Page() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl font-semibold">Impressum</h1>

      <section className="mt-4 space-y-1">
        <h2 className="text-lg font-semibold">Verantwortlich für den Inhalt</h2>
        <p>Handwerksbrauerei Hennings</p>
        <p>Braumeister Tim Hennings</p>
        <p>Schloßstraße 1</p>
        <p>19067 Leezen</p>
      </section>

      <section className="mt-6 space-y-1">
        <h2 className="text-lg font-semibold">Kontakt</h2>
        <p>
          Tel.: <a className="text-accent underline" href="tel:+491742357281">0174&nbsp;235&nbsp;72&nbsp;81</a>
        </p>
        <p>
          E-Mail: <a className="text-accent underline" href="mailto:info@brauerei-hennings.de">info@brauerei-hennings.de</a>
        </p>
        <p>
          Web: <a className="text-accent underline" href="https://www.brauerei-hennings.de" target="_blank">www.brauerei-hennings.de</a>
        </p>
      </section>

      <section className="mt-6 space-y-1">
        <h2 className="text-lg font-semibold">Umsatzsteuer-Identifikationsnummer</h2>
        <p>USt-IdNr.: DE 283523697</p>
      </section>
    </article>
  );
}
