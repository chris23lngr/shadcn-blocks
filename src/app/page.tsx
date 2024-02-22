import { CollectionThumbnail } from '@/components/collection-thumbnail';
import { Button, buttonVariants } from '@/components/ui/button';
import { getCategories } from '@/lib/category';
import { getCollections } from '@/lib/collection';
import { config } from '@/lib/config';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Link from 'next/link';

export default async function Home() {
  const categories = await getCategories();

  if (!categories) {
    return <div>Loading...</div>;
  }

  const applicationCollections = await getCollections('application');

  if (applicationCollections == null) {
    return <div>Loading...</div>;
  }

  const marketingsCollections = await getCollections('marketing');

  if (marketingsCollections == null) {
    return <div>Loading...</div>;
  }

  return (
    <main className="">
      <section id="hero" className="flex flex-col justify-end py-32">
        <div className="container flex h-full flex-col items-center justify-center">
          <p className="max-w-screen-md text-center text-4xl font-extrabold leading-[1.125] text-foreground md:text-5xl">
            Handrcafted UI Blocks, built with Tailwindcss and shadcn/ui
          </p>
          <p className="mt-4 max-w-screen-sm text-center text-lg text-muted-foreground">
            High quality copy paste components for your next website built with
            the help of{' '}
            <span className="cursor-pointer font-medium decoration-2 underline-offset-2 hover:underline">
              Tailwindcss
            </span>{' '}
            and{' '}
            <span className="cursor-pointer font-medium decoration-2 underline-offset-2 hover:underline">
              @shadcn/ui
            </span>
            .
          </p>
          <div className="mt-8 flex w-fit items-center justify-center gap-4">
            <Button>Get Started</Button>
            <Link
              className={buttonVariants({ variant: 'outline' })}
              href={config.repository.url}
              target="_blank"
            >
              <GitHubLogoIcon className="me-2 h-5 w-5" />
              Github
            </Link>
          </div>
        </div>
        <div className="mt-12"></div>
      </section>

      <section id="categories" className="mb-6 space-y-24">
        <div className="container grid grid-cols-5 gap-6">
          <p className="text-lg font-medium text-foreground">Application</p>
          <div className="col-span-4 grid grid-cols-4 gap-6">
            {applicationCollections.data?.map((collection) => {
              return (
                <CollectionThumbnail
                  key={collection.id}
                  collection={collection}
                  categoryId={'application'}
                />
              );
            })}
          </div>
        </div>
        <div className="container grid grid-cols-5 gap-6">
          <p className="text-lg font-medium text-foreground">Marketing</p>
          <div className="col-span-4 grid grid-cols-4 gap-6">
            {marketingsCollections.data?.map((collection) => {
              return (
                <CollectionThumbnail
                  key={collection.id}
                  collection={collection}
                  categoryId={'marketing'}
                />
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
