import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col justify-center text-center">
      {/* <h1 className="mb-4 text-2xl font-bold">Developer Guide</h1> */}
      {/* <div className="text-center">
        <img className="mx-auto max-h-[750px]" src="/imgs/e1evate-hero.png" />
      </div> */}
      <p className="text-fd-muted-foreground">
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          View ALL Guides
        </Link>{" "}
      </p>
    </main>
  );
}
