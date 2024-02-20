export default async function NotFound({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <section id="not-found">
      <div className="container flex min-h-[60vh] flex-col items-center justify-center">
        <p className="max-w-prose text-center text-xl font-semibold text-foreground">
          This category was not found.
        </p>
        <p className="mt-4 max-w-prose text-center text-base text-muted-foreground">
          Are you sure you're on the right path? Check the URL again or return
          to the landing page.
        </p>
      </div>
    </section>
  );
}
