import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center pt-24">
      <div className="text-center">
        <p className="font-display text-8xl font-bold text-gradient-accent">404</p>
        <h1 className="mt-4 font-display text-2xl font-bold text-white">
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
