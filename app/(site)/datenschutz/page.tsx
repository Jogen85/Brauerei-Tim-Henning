export default function Page() {
  return (
    <article className="max-w-3xl">
      <h1 className="text-2xl font-semibold">Datenschutzerklärung</h1>
      <p className="mt-3">Hier die Informationen zur Datenverarbeitung (Kontaktformular, Server-Logs, ggf. Turnstile/Resend/SMTP) ergänzen.</p>

      <section className="mt-6">
        <h2 className="text-xl font-semibold">Verantwortlicher</h2>
        <p className="mt-2">Handwerksbrauerei Hennings</p>
        <p>Braumeister Tim Hennings</p>
        <p>Schloßstraße 1, 19067 Leezen</p>
        <p>
          Tel.: <a className="text-accent underline" href="tel:+491742357281">0174&nbsp;235&nbsp;72&nbsp;81</a>
        </p>
        <p>
          E-Mail: <a className="text-accent underline" href="mailto:info@brauerei-hennings.de">info@brauerei-hennings.de</a>
        </p>
      </section>

      <h2 className="mt-6 text-xl font-semibold">Kontaktformular</h2>
      <p className="mt-2">Gespeicherte Daten, Zweck, Dauer, Rechtsgrundlage. Hinweis auf E-Mail-Versand und Turnstile (Anti-Spam) mit Link zu deren Datenschutzhinweisen.</p>
    </article>
  );
}

