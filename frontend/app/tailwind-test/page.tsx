export default function TailwindTest() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="border-b border-border bg-accent">
        <div className="max-w-5xl mx-auto px-4 py-12 md:py-16">
          <h1 className="text-3xl md:text-4xl font-bold">Tailwind Test</h1>
          <p className="text-foreground/80 mt-3">
            This page demonstrates Tailwind utilities using the design tokens defined in
            <code className="mx-1 rounded bg-secondary px-2 py-0.5">app/globals.css</code>.
          </p>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-12 space-y-12">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Theme colors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="rounded-lg p-4 text-primary-foreground bg-primary">bg-primary</div>
            <div className="rounded-lg p-4 text-accent-foreground bg-accent">bg-accent</div>
            <div className="rounded-lg p-4 text-secondary-foreground bg-secondary">bg-secondary</div>
            <div className="rounded-lg p-4 border border-border">border-border</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Built-in palette sanity check</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="rounded-lg p-4 text-white bg-blue-500">bg-blue-500</div>
            <div className="rounded-lg p-4 text-white bg-emerald-500">bg-emerald-500</div>
            <div className="rounded-lg p-4 text-white bg-fuchsia-500">bg-fuchsia-500</div>
            <div className="rounded-lg p-4 text-white bg-rose-500">bg-rose-500</div>
            <div className="rounded-lg p-4 text-white bg-slate-700">bg-slate-700</div>
            <div className="rounded-lg p-4 text-black bg-yellow-300">bg-yellow-300</div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Buttons</h2>
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-4 h-10 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition">
              Primary
            </button>
            <button className="px-4 h-10 rounded-md border border-border bg-background hover:bg-accent transition">
              Outline
            </button>
            <button className="px-4 h-10 rounded-md bg-background border border-input focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
              Focus ring
            </button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Inputs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              placeholder="Search…"
              className="h-11 w-full rounded-md border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background"
            />
            <select className="h-11 w-full rounded-md border border-input bg-background px-3 outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background">
              <option>Option A</option>
              <option>Option B</option>
              <option>Option C</option>
            </select>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Cards grid (responsive)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((n) => (
              <div key={n} className="rounded-lg border-2 border-border p-5 hover:shadow-lg transition-shadow">
                <div className="text-sm text-muted-foreground mb-1">Card {n}</div>
                <div className="font-medium">This uses border-border and muted-foreground</div>
                <div className="mt-3 h-2 w-full bg-gradient-to-r from-primary to-accent rounded-full" />
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Gradients</h2>
          <div className="rounded-lg p-6 text-foreground bg-gradient-to-r from-primary to-accent">
            bg-gradient-to-r from-primary to-accent
          </div>
          <div className="mt-4 rounded-lg p-6 text-white bg-gradient-to-r from-blue-500 to-rose-500">
            built-in gradient (blue → rose)
          </div>
        </section>
      </div>
    </main>
  );
}


