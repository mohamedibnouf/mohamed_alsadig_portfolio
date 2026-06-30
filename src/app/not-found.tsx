import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[80dvh] items-center justify-center px-4 pt-24">
      <div className="text-center">
        <p className="font-display text-6xl font-bold text-gradient-accent sm:text-8xl">404</p>
        <h1 className="mt-4 font-display text-xl font-bold text-white sm:text-2xl">
          Page not found
        </h1>
        <p className="mt-2 text-text-muted">
          The page you&apos;re looking for doesn&apos;t exist.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 text-accent transition-colors hover:text-white"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
