const swatches = [
  { name: "primary", hex: "#3B1F16", note: "Dunkelbraun – Flächen/Header/Footer" },
  { name: "sand", hex: "#D8C6B3", note: "Sandbeige – Text auf dunkel, helle Sektionen" },
  { name: "accent", hex: "#8A4B2D", note: "Rostrot/Sepia – Akzent/Buttons/Hover" },
  { name: "paper", hex: "#F2EEE9", note: "Altweiß – Karten/Seitenhintergrund" },
  { name: "muted", hex: "#5F5047", note: "Braun-Grau – Sekundär/Border/Disabled" },
  { name: "hop", hex: "#6B7A4C", note: "Optional Hopfengrün – selten nutzen" },
  { name: "malt", hex: "#D3A95C", note: "Optional Malzgelb – selten nutzen" }
];

export default function Page() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="text-2xl font-semibold">Styleguide</h1>
        <p className="mt-2 text-muted/80">Farbpalette und Beispiele für UI-Elemente.</p>
      </header>

      <section>
        <h2 className="text-xl font-semibold">Farben</h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {swatches.map((s) => (
            <div key={s.name} className="rounded-lg border border-muted/30 overflow-hidden">
              <div className="h-20" style={{ backgroundColor: s.hex }}></div>
              <div className="p-3 text-sm">
                <div className="font-medium">{s.name}</div>
                <div className="text-muted/80">{s.hex}</div>
                <div className="mt-1">{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Buttons</h2>
        <div className="mt-3 flex flex-wrap gap-3">
          <a className="inline-flex rounded bg-accent px-4 py-2 text-paper" href="#">CTA Akzent</a>
          <a className="inline-flex rounded border border-muted/30 bg-paper px-4 py-2 text-muted hover:border-accent" href="#">Sekundär</a>
        </div>
      </section>
    </div>
  );
}

