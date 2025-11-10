export default function Contact() {
  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
      <div className="rounded-2xl border border-zinc-200/60 bg-white/70 p-8 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/60">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">Let’s build something</h2>
            <p className="mt-2 max-w-xl text-zinc-600 dark:text-zinc-400">
              Interested in collaborations, contracts, or just chatting about game UX? Drop a message.
            </p>
          </div>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <a href="mailto:hello@example.com" className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white hover:bg-zinc-800 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-100">Email Me</a>
            <a href="#" className="inline-flex items-center justify-center rounded-full border border-zinc-300 px-5 py-2 text-sm font-medium text-zinc-700 hover:bg-zinc-100 dark:border-zinc-700 dark:text-zinc-200 dark:hover:bg-zinc-800">Download CV</a>
          </div>
        </div>
      </div>
      <p className="mt-6 text-center text-xs text-zinc-500 dark:text-zinc-500">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </section>
  );
}
