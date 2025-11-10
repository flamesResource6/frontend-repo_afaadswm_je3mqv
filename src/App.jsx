import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeToggle from './components/ThemeToggle';

function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mt-4 flex items-center justify-between rounded-full border border-zinc-200/60 bg-white/70 p-2 backdrop-blur md:mt-6 dark:border-zinc-800 dark:bg-zinc-900/60">
          <a href="#top" className="flex items-center gap-2 rounded-full px-3 py-1.5 text-sm font-semibold tracking-tight text-zinc-900 hover:bg-zinc-100 dark:text-zinc-100 dark:hover:bg-zinc-800">
            <span className="inline-block h-2.5 w-2.5 rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-400" />
            <span>PlayerOne</span>
          </a>
          <nav className="hidden items-center gap-1 sm:flex">
            {[
              { href: '#about', label: 'About' },
              { href: '#projects', label: 'Projects' },
              { href: '#contact', label: 'Contact' },
            ].map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

export default function App() {
  return (
    <div id="top" className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-900 dark:text-zinc-50">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
