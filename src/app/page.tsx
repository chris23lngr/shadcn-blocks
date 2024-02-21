'use client';

import { CollectionThumbnail } from '@/components/collection-thumbnail';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle } from '@/components/ui/card';
import { config } from '@/lib/config';
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import CollectionHeroThumbnail from '../../public/collections/hero.svg';

export default function Home() {
  console.log('typeof config', typeof config);

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
            <Button variant="outline">
              <GitHubLogoIcon className="me-2 h-5 w-5" />
              Github
            </Button>
          </div>
        </div>
        <div className="mt-12"></div>
      </section>

      <section id="categories" className="mb-64">
        <div className="container grid grid-cols-5 gap-6">
          <p className="text-lg font-medium text-foreground">Application</p>

          <CollectionThumbnail
            categoryId={'marketing'}
            collection={{
              id: 'hero',
              label: 'Hero',
              description:
                'Hero sections are the first thing your users see when they land on your website. It is important to make a good first impression.',
            }}
          />
          <Card>
            <Image
              src={CollectionHeroThumbnail}
              alt="Collection Hero"
              className="rounded-t-lg border-b border-border"
            />
            <CardHeader>
              <CardTitle>Hero Sections</CardTitle>
            </CardHeader>
          </Card>
        </div>
      </section>
    </main>
  );
}
