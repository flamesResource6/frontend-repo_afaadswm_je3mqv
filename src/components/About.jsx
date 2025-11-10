export default function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">About Me</h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            I’m a multidisciplinary creator at the intersection of gaming, web, and spatial interfaces. My focus is building sleek, performant UIs with a futuristic aesthetic, and telling stories through motion and interaction.
          </p>
          <p className="mt-4 text-zinc-600 dark:text-zinc-300">
            Comfortable across the stack, I design systems that feel fluid and responsive—optimized for both light and dark environments.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:gap-6">
          {[
            ['Frontend', 'React, Vite, Tailwind'],
            ['3D & Motion', 'Spline, Framer Motion'],
            ['Backend', 'FastAPI, MongoDB'],
            ['Tooling', 'TypeScript, Git, CI/CD'],
          ].map(([title, desc]) => (
            <div key={title} className="rounded-xl border border-zinc-200/60 bg-white/60 p-4 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
              <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-1 text-xs text-zinc-600 dark:text-zinc-400">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
