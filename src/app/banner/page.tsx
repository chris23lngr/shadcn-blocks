import Link from 'next/link';

export default async function Page() {
  return (
    <main className="">
      <div className="w-full bg-primary">
        <div className="container">
          <p className="py-1 text-center text-primary-foreground">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor{' '}
            <Link href={''} className="text-muted-foreground underline">
              Lorem ipsum dolor
            </Link>
          </p>
        </div>
      </div>
      <section>
        <div className="container">
          <p>Hello world</p>
        </div>
      </section>
    </main>
  );
}
