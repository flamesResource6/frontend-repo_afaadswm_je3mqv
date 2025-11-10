import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/UiMDkOJtlS5O5Vaz/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center px-6">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-white/90 backdrop-blur-sm dark:border-white/10">Gaming • Futuristic • Tech</span>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-white sm:text-5xl md:text-6xl">
            Minimalist Portfolio for a Modern Gamer-Developer
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/80 md:text-lg">
            I craft immersive, high-performance experiences across web and interactive media. Explore my work, skills, and the tools I love.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#projects" className="rounded-full bg-white px-5 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100">View Projects</a>
            <a href="#contact" className="rounded-full border border-white/30 bg-white/10 px-5 py-2 text-sm font-medium text-white hover:bg-white/20">Contact</a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-white dark:to-zinc-900" />
    </section>
  );
}
