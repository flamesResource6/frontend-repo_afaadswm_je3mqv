export default function Projects() {
  const projects = [
    {
      title: 'Neon HUD Interface',
      tags: ['React', 'Framer Motion'],
      link: '#',
      desc: 'A responsive, game-inspired dashboard with kinetic micro-interactions.'
    },
    {
      title: 'Cosmic Landing',
      tags: ['Spline', 'Tailwind'],
      link: '#',
      desc: 'Interactive 3D hero experience with immersive gradients and depth.'
    },
    {
      title: 'Realtime Party Chat',
      tags: ['FastAPI', 'WebSockets'],
      link: '#',
      desc: 'Low-latency messaging layer optimized for co-op gameplay lobbies.'
    }
  ];

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">Featured Projects</h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.link}
            className="group rounded-xl border border-zinc-200/60 bg-white/60 p-5 transition hover:border-zinc-300 hover:shadow-lg backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60 dark:hover:border-zinc-700"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-base font-medium text-zinc-900 dark:text-zinc-100">{p.title}</h3>
              <span className="text-xs text-zinc-500 dark:text-zinc-400">↗</span>
            </div>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">{p.desc}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-zinc-100 px-2.5 py-1 text-xs text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">{t}</span>
              ))}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
